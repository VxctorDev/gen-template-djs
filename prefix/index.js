const { GatewayIntentBits, Client, Collection } = require("discord.js");
const config = require("./config.json");
const client = new Client({ 
  intents: [ 
GatewayIntentBits.Guilds, 
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent, 
GatewayIntentBits.GuildMembers,  
GatewayIntentBits.GuildVoiceStates, 
       ]
    });
module.exports = client;
client.on("messageCreate", message => {
  if(message.author.bot || !message.guild || !message.content.startsWith(config.prefix)) return;
  const [comando, ...args] = message.content.slice(config.prefix.length).trim().split(/ +/)
  const cmd = client.prefixCommands.get(comando)
  if(!cmd) return message.reply(`Ops.. este comando não existe em meu banco de dados!`)
  cmd.run(client, message, args)
})

client.prefixCommands = new Collection();
require("./handler")(client);
client.login(config.token);