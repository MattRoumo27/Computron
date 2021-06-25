module.exports = {
    name: 'hello',
    description: 'this is a hello command!',
    execute(client, message, args, Discord) {
        const author = message.author.tag.slice(0, -5);
        message.reply(`Hello ${author}`);
    }
}