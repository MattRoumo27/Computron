module.exports = {
    name: 'eval',
    description: 'Evaluates an algebraic expression',
    execute(client, message, args) {
        console.log(args);
        if (!containValidNumberOfParenthesis(args)) {
            return message.reply('There is an incorrect number of parenthesis in the expression!');
        }

        if (!containValidArguments(args.join("").split(""))) {
            return message.reply('There is/are invalid argument/s');
        }

        const inputString = args.join(' ');
        let result;
        console.log(inputString);
        try {
            result = eval(inputString).toString();
            console.log(result);
        } catch(exception) {
            console.error(exception);
        }

        if (result === "Infinity") {
            return message.reply("This is an invalid expression!");
        }

        return message.reply(`The total: ${result}`);
    }
}

let validArguments = [
    '(',
    ')',
    '+',
    '-',
    '*',
    '/'
];

/**
 * @param {Array[string]} inputString - The algebraic operation passed by the user
 * @returns {boolean} - determines if their are correct number of parenthesis in the expression
 */
function containValidNumberOfParenthesis(args) {
    let openParens = 0;

    for (const element of args) {
        if (element.includes('(')) {
            openParens++;
        }
        if (element.includes(')')) {
            openParens--;
        }
    }

    if (openParens === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {Array[string]} args - The algebraic operation passed by the user
 * @returns {boolean} - determines if the arguments are all valid
 */
function containValidArguments(args) {
    for (const element of args) {
        if (!validArguments.includes(element) && Number.isNaN(element)) {
            console.log(element);
            return false;
        }
    }

    return true;
}