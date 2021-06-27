module.exports = {
    name: 'div',
    description: 'Divide numbers together',
    execute(client, message, args) {
        if (args.length < 2) return message.reply('Please have at least two arguments!');

        let total;
        for(const number of args) {
            if (Number.isNaN(number)) {
                return message.reply('Please enter a real number');
            } else {
                const parsedNumber = Number(number);
                if (number == args[0]) {
                    total = parsedNumber;
                } else if (parsedNumber === 0) {
                    return message.reply('It is undefined behavior to divide a number by 0.')
                } else {
                    total /= parsedNumber;
                }
            }
        }

        return message.reply(`The total: ${total}`);
    }
}