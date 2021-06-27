module.exports = {
    name: 'sub',
    description: 'Subtract numbers together',
    execute(client, message, args) {
        if (args.length < 2) return message.reply('Please have at least two arguments!');

        let total;
        for(const number of args) {
            if (Number.isNaN(number)) {
                return message.reply('Please enter a real number');
            } else {
                if (number == args[0]) {
                    total = Number(number)
                } else {
                    total -= Number(number);
                }
            }
        }

        return message.reply(`The total: ${total}`);
    }
}