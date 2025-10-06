// import { Client, PermissionsBitField, TextChannel } from 'discord.js';
import { Client, TextChannel } from "discord.js";
import { buildNewsEmbed } from "@apps/bot/utils/embedBuilder.js";
import { MessageBrokerService } from "../services/messagebroker.service";
import { Currency, Impact } from "@repo/api/src/models/index.js";

export class SchedulerService {
  private static instance: SchedulerService | null = null;
  private client: Client;
  private messageBroker: MessageBrokerService;

  private constructor(client: Client) {
    this.client = client;
    this.messageBroker = MessageBrokerService.getInstance();
  }

  public static getInstance(client: Client): SchedulerService {
    if (!SchedulerService.instance) {
      SchedulerService.instance = new SchedulerService(client);
    }
    return SchedulerService.instance;
  }

  public async startConsumer(): Promise<void> {
    try {
      await this.messageBroker.connect();
      console.log("Connected to RabbitMQ");

      await this.messageBroker.consumeScheduleTasks(async (message) => {
        const {
          serverId,
          channelId,
          news: rawNews,
          market,
          timeDisplay,
        } = message;

        try {
          const guild = await this.client.guilds.fetch(serverId);
          if (!guild) {
            console.warn(`Guild ${serverId} not found - acknowledging message`);
            return; // Message will be acknowledged
          }

          // TODO: Enable this once the GuildMembers intent is enabled
          // const channel = await guild.channels.fetch(channelId, { force: true }) as TextChannel;

          const channel = (await guild.channels.fetch(
            channelId
          )) as TextChannel;
          if (!channel) {
            console.warn(
              `Channel ${channelId} not found in guild ${serverId} - acknowledging message`
            );
            return; // Message will be acknowledged
          }

          // // Check if bot has permission to send messages in the channel
          const permissions = channel.permissionsFor(this.client.user!);
          if (!permissions?.has("SendMessages")) {
            console.warn(
              `Bot lacks permission to send messages in channel ${channelId} - acknowledging message`
            );
            return; // Message will be acknowledged
          }

          // Reconstruct News objects
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

          const embeds = buildNewsEmbed(
            news,
            `${market} News Update`,
            timeDisplay
          );

          // Send embeds with error handling for each message
          for (const embed of embeds) {
            try {
              await channel.send({ embeds: [embed] });
            } catch (error) {
              console.error(
                `Failed to send embed to channel ${channelId}:`,
                error
              );
              // Continue with next embed even if one fails
              continue;
            }
          }
        } catch (error) {
          // Log the error but don't rethrow - we still want to acknowledge the message
          console.error("Error processing message:", error);
        }
      });

      console.log("Message consumer started");
    } catch (error) {
      console.error("Failed to start consumer:", error);
      throw error;
    }
  }
}
