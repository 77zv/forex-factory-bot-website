import "dotenv/config";
import { Collection,REST, Routes } from "discord.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export async function deployCommands(clientId: string, token: string) {
  const rest = new REST().setToken(token);
  
  try {
    const foldersPath = path.join(__dirname, "commands");
    const commandFolders = fs.readdirSync(foldersPath);
    
    const loadedCommands = new Collection<string, any>();

    for (const folder of commandFolders) {
      const commandsPath = path.join(foldersPath, folder);
      const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith(".ts"));
      
      for (const file of commandFiles) {
        const filePath = `file://${path.join(commandsPath, file)}`;
        const command = await import(filePath);
        if ("data" in command && "execute" in command) {
          loadedCommands.set(command.data.name, command);
        } else {
          console.log(
            `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
          );
        }
      }
    }

    const commandData = Array.from(loadedCommands.values()).map(cmd => cmd.data.toJSON());
    
    console.log('Registering global commands:', commandData);

    const data = await rest.put(
      Routes.applicationCommands(clientId),
      { body: commandData }
    );

    console.log('Registration response:', data);
    console.log(
      `Successfully reloaded ${loadedCommands.size} global application (/) commands.`
    );
    
    return loadedCommands;
  } catch (error) {
    console.error('Error registering commands:', error);
    throw error;
  }
}

const main = async () => {
  await deployCommands(
    process.env.DISCORD_CLIENT_ID!,
    process.env.DISCORD_TOKEN!,
  );
  process.exit(0);
};

main().catch(console.error); 