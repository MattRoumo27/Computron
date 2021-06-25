module.exports = {
    name: 'add',
    description: 'Add numbers together',
    execute(client, message, args) {
        if (args.length < 2) return message.reply('Please have more than two arguments!');
        let total = 0
        for(const number of args) {
            if (Number.isNaN(number)) {
                return message.reply('Please enter a real number');
            } else {
                total += parseInt(number, 10);
            }
        }

        return message.reply(`The total: ${total}`);
    }
}