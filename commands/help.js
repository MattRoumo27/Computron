const fs = require('fs');

module.exports = {
    name: 'help',
    description: 'This command allows a user to see what Computron can do!',
    execute(client, message, args, Discord) {
        const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        const embed = new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setTitle('Computron Guide')
            .setDescription("Invoke every command with a '!' prefix.")
            
        for (const file of command_files) {
            const command = require(`./${file}`);
            if (command.name) {
                embed.addField(command.name, command.description, inline=false);
            }
        }

        embed.addField('More Info', 'For more details visit this [link](https://github.com/MattRoumo27/Computron#readme)', inline=false);

        return message.channel.send(embed);
    }
}