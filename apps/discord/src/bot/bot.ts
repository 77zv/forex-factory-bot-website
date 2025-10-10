import { Client, GatewayIntentBits, Collection } from 'discord.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

declare module "discord.js" {
  export interface Client {
    commands: Collection<string, any>;
  }
}

async function startBot() {
  console.log('Starting bot...');
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      // GatewayIntentBits.GuildMembers, TODO: Enable this once the GuildMembers intent is granted by Discord
    ]
  }) as Client & {
    commands: Collection<string, any>;
  };

  const token = process.env.DISCORD_TOKEN;
  const clientId = process.env.DISCORD_CLIENT_ID;

  if (!token) {
    throw new Error("DISCORD_TOKEN is not set");
  }

  if (!clientId) {
    throw new Error("DISCORD_CLIENT_ID is not set");
  }

  // Load events
  const eventsPath = path.join(__dirname, 'events');
  const fileExt = process.env.NODE_ENV === 'development' ? '.ts' : '.js';
  const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(fileExt));

  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const fileUrl = pathToFileURL(filePath).href;
    const event = await import(fileUrl);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }

  client.commands = new Collection();

  // Load commands
  const foldersPath = path.join(__dirname, 'commands');
  const commandFolders = fs.readdirSync(foldersPath);

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(fileExt));
    
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const fileUrl = pathToFileURL(filePath).href;
      const command = await import(fileUrl);
      if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
      }
    }
  }

  await client.login(token);
  return client;
}

startBot().catch(console.error);