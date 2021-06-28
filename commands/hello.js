module.exports = {
    name: 'hello',
    description: 'Say hello to Computron',
    execute(client, message, args, Discord) {
        const author = message.author.tag.slice(0, -5);
        message.reply(`Hello ${author}! My name is Computron!`);
    }
}