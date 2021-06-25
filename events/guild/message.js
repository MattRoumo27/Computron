const dotenv = require('dotenv');
dotenv.config();

module.exports = (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases.includes(cmd));

    try {
        command.execute(client, message, args, Discord);
    } catch (err) {
        message.reply('There was an error trying to execute your command!');
        console.log(err);
    }
}