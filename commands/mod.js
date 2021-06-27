module.exports = {
    name: 'mod',
    description: 'Find the remainder of two numbers being divided',
    execute(client, message, args) {
        if (args.length !== 2) return message.reply('Please have only two arguments!');

        let remainder;
        const number1 = args[0];
        const number2 = args[1];

        if (Number.isNaN(number1) || Number.isNaN(number2)) {
            return message.reply('Please enter a real number');
        } else {
            remainder = Number(number1) % Number(number2);
        }

        return message.reply(`The remainder: ${remainder}`);
    }
}