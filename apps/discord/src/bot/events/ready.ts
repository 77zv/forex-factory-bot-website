import { Events, Client } from "discord.js";
import { SchedulerService } from "@repo/messaging/services/messageConsumer.service.js";

export const name = Events.ClientReady;
export const once = true;

export async function execute(client: Client) {
  console.log(`Ready! Logged in as ${client.user?.tag}`);

  // Start the message consumer on all shards
  try {
    await SchedulerService.getInstance(client).startConsumer();
    console.log("Message consumer started on shard", client.shard?.ids[0]);
  } catch (error) {
    console.error("Failed to start message consumer:", error);
  }
}
