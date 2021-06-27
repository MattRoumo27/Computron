module.exports = {
    name: 'mult',
    description: 'Multiply numbers together',
    execute(client, message, args) {
        if (args.length < 2) return message.reply('Please have at least two arguments!');

        let total = 1;
        for(const number of args) {
            if (Number.isNaN(number)) {
                return message.reply('Please enter a real number');
            } else {
                total *= Number(number);
            }
        }

        return message.reply(`The total: ${total}`);
    }
}