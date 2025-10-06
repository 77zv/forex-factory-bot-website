import amqp from 'amqplib';
import { Client, TextChannel, EmbedBuilder } from 'discord.js';
import type { Schedule, News, Currency, Impact } from '@repo/api/src/models/index';
import { TimeDisplay } from '@repo/api/src/models/index';

export class MessageBrokerService {
  private static instance: MessageBrokerService | null = null;
  private connection: any | null = null;
  private channel: any | null = null;
  private readonly QUEUE_NAME = 'schedule_tasks';

  private constructor() {}

  public static getInstance(): MessageBrokerService {
    if (!MessageBrokerService.instance) {
      MessageBrokerService.instance = new MessageBrokerService();
    }
    return MessageBrokerService.instance;
  }

  public async connect(): Promise<void> {
    try {
      const url = process.env.RABBITMQ_URL || 
        `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`;
      
      const conn = await amqp.connect(url);
      const ch = await conn.createChannel();
      await ch.assertQueue(this.QUEUE_NAME, { durable: true });
      this.connection = conn;
      this.channel = ch;
    } catch (error) {
      console.error('Failed to connect to RabbitMQ:', error);
      throw error;
    }
  }

  public async startConsumer(client: Client): Promise<void> {
    try {
      await this.connect();
      console.log('Connected to RabbitMQ');

      await this.consumeScheduleTasks(async (message) => {
        const { serverId, channelId, news: rawNews, market, timeDisplay } = message;

        try {
          const guild = await client.guilds.fetch(serverId);
          if (!guild) {
            console.warn(`Guild ${serverId} not found - acknowledging message`);
            return;
          }

          // TODO: Enable this once the GuildMembers intent is enabled
          // const channel = await guild.channels.fetch(channelId, { force: true }) as TextChannel;

          const channel = (await guild.channels.fetch(channelId)) as TextChannel;
          if (!channel) {
            console.warn(
              `Channel ${channelId} not found in guild ${serverId} - acknowledging message`
            );
            return;
          }

          const permissions = channel.permissionsFor(client.user!);
          if (!permissions?.has('SendMessages')) {
            console.warn(
              `Bot lacks permission to send messages in channel ${channelId} - acknowledging message`
            );
            return;
          }

          const news = rawNews.map((item: any) => {
            return {
              title: item.title as string,
              country: item.country as Currency,
              date: item.date as Date,
              impact: item.impact as Impact,
              forecast: item.forecast as number,
              previous: item.previous as number,
            };
          });

          const embeds = this.buildNewsEmbeds(
            news,
            `${market} News Update`,
            (timeDisplay as TimeDisplay) ?? TimeDisplay.RELATIVE
          );

          for (const embed of embeds) {
            try {
              await channel.send({ embeds: [embed] });
            } catch (error) {
              console.error(`Failed to send embed to channel ${channelId}:`, error);
              continue;
            }
          }
        } catch (error) {
          console.error('Error processing message:', error);
        }
      });

      console.log('Message consumer started');
    } catch (error) {
      console.error('Failed to start consumer:', error);
      throw error;
    }
  }

  public async publishScheduleTask(schedule: Schedule, news: News[]): Promise<void> {
    if (!this.channel) {
      throw new Error('RabbitMQ channel not initialized');
    }

    const message = {
      scheduleId: schedule.id,
      serverId: schedule.serverId,
      channelId: schedule.channelId,
      news,
      market: schedule.market,
    };

    this.channel.sendToQueue(
      this.QUEUE_NAME,
      Buffer.from(JSON.stringify(message)),
      { persistent: true }
    );
  }

  private buildNewsEmbeds(news: News[], title: string, timeDisplay: TimeDisplay): EmbedBuilder[] {
    if (news.length === 0) {
      const embed = new EmbedBuilder()
        .setTitle(title)
        .setColor(0x02ebf7)
        .setDescription('No news found for the specified criteria.')
        .setFooter({ text: 'Powered by ForexFactory' });
      return [embed];
    }

    const impactColors: Record<string, string> = {
      HIGH: '🔴',
      MEDIUM: '🟠',
      LOW: '🟡',
      HOLIDAY: '⚪',
    };

    const countryFlags: Record<string, string> = {
      USD: '🇺🇸',
      EUR: '🇪🇺',
      GBP: '🇬🇧',
      JPY: '🇯🇵',
      CHF: '🇨🇭',
      AUD: '🇦🇺',
      CAD: '🇨🇦',
      CNY: '🇨🇳',
      NZD: '🇳🇿',
    };

    const MAX_FIELDS_PER_EMBED = 25;
    const embeds: EmbedBuilder[] = [];
    const totalPages = Math.ceil(news.length / MAX_FIELDS_PER_EMBED);

    for (let page = 0; page < totalPages; page++) {
      const embed = new EmbedBuilder()
        .setTitle(`${title}${totalPages > 1 ? ` (Page ${page + 1}/${totalPages})` : ''}`)
        .setColor(0x02ebf7)
        .setFooter({ text: 'Powered by ForexFactory' });

      const startIdx = page * MAX_FIELDS_PER_EMBED;
      const endIdx = Math.min(startIdx + MAX_FIELDS_PER_EMBED, news.length);
      const pageNews = news.slice(startIdx, endIdx);

      pageNews.forEach((item) => {
        const flag = countryFlags[item.country] || '';
        const impactColor = impactColors[(item.impact as string).toUpperCase()] || '⚪';

        embed.addFields({
          name: `${flag} ${item.country} - ${item.title}`,
          value: `📅 ${this.getFormattedDate(new Date(item.date), timeDisplay)}\n🕒 ${this.getFormattedTime(new Date(item.date), timeDisplay)}\n${impactColor} ${item.impact} impact\n\`\`\`Forecast: ${item.forecast}\nPrevious: ${item.previous}\`\`\``,
          inline: true,
        });
      });

      embeds.push(embed);
    }

    return embeds;
  }

  private getFormattedDate(date: Date, format: TimeDisplay): string {
    if (format === TimeDisplay.RELATIVE) {
      const timestamp = Math.floor(date.getTime() / 1000);
      return `<t:${timestamp}:R>`;
    }

    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  }

  private getFormattedTime(date: Date, format: TimeDisplay): string {
    if (format === TimeDisplay.RELATIVE) {
      const timestamp = Math.floor(date.getTime() / 1000);
      return `<t:${timestamp}:R>`;
    }

    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} ${period}`;
  }

  public async consumeScheduleTasks(callback: (message: any) => Promise<void>): Promise<void> {
    if (!this.channel) {
      throw new Error('RabbitMQ channel not initialized');
    }

    await this.channel.consume(this.QUEUE_NAME, async (msg: amqp.ConsumeMessage | null) => {
      if (msg) {
        try {
          const content = JSON.parse(msg.content.toString());
          await callback(content);
          this.channel?.ack(msg);
        } catch (error) {
          console.error('Error processing message:', error);
          // Reject the message and requeue it
          this.channel?.nack(msg, false, true);
        }
      }
    });
  }

  public async close(): Promise<void> {
    const ch = this.channel;
    const conn = this.connection;
    if (ch) await ch.close();
    if (conn) await conn.close();
  }
} 