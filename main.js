/* bot variables */
const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const token = "OTY1NTY0MDYyNzY5NDkyMDM4.Yl1Bmw.2I01T8eHQ7QmE6SExyzY5B1E_7I"
const prefix = "!"
const fs = require('node:fs');

const db = require('croxydb')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({ activities: [{ name: '!setup', type:"LISTENING" }] });
});


client.on('messageCreate', (message) => {
    const args = message.content.slice(prefix.length).split(/ +/);
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const command = args.shift().toLowerCase();
});

client.login(token)