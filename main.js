const Discord = require('discord.js');
const dotenv = require('dotenv');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
dotenv.config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command-handler', 'event-handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

// Login to the bot
client.login(process.env.BOT_TOKEN);