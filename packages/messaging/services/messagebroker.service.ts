import amqp from 'amqplib';
import { Schedule, News } from '@packages/api/models/index.js';

export class MessageBrokerService {
  private static instance: MessageBrokerService | null = null;
  private connection: amqp.Connection | null = null;
  private channel: amqp.Channel | null = null;
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
      
      this.connection = await amqp.connect(url);
      this.channel = await this.connection.createChannel();
      await this.channel.assertQueue(this.QUEUE_NAME, { durable: true });
    } catch (error) {
      console.error('Failed to connect to RabbitMQ:', error);
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

  public async consumeScheduleTasks(callback: (message: any) => Promise<void>): Promise<void> {
    if (!this.channel) {
      throw new Error('RabbitMQ channel not initialized');
    }

    await this.channel.consume(this.QUEUE_NAME, async (msg) => {
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
    if (this.channel) {
      await this.channel.close();
    }
    if (this.connection) {
      await this.connection.close();
    }
  }
} 