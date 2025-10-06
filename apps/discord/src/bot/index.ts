import { env } from "@repo/env";
import { ShardingManager } from 'discord.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const ext = process.env.NODE_ENV === 'development' ? '.ts' : '.js';
const ext = '.ts';
const botPath = path.join(__dirname, `bot${ext}`);

console.log('DISCORD_TOKEN:', env.DISCORD_TOKEN ? '✓ Found' : '✗ Not found');

const manager = new ShardingManager(botPath, { 
  token: env.DISCORD_TOKEN,
  totalShards: "auto"
});

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn()
	.then(shards => {
		shards.forEach(shard => {
			shard.on('message', message => {
				console.log(`Shard[${shard.id}] : ${message._eval} : ${message._result}`);
			});
		});
	})
	.catch(console.error);