# Computron

## Overview

A Discord bot application built with NodeJS. A simple calculator app that reads commands from a user to add, subtract, multiply, and divide numbers together. It can also be used to evaluate an algebraic expression when using the eval command. I used the [discord.js](https://discord.js.org/#/) npm package to build the bot as I have working knowledge of JavaScript, and I thought it would be a fun project to build a program that works with Discord. I faced a few challenges in checking for erroneous inputs that a user could have. This is where most of the bug fixing dealt with as I had to think of different possibilities for when an algebraic expression would be invalid (for the eval command).  

## Tools Used

* [NodeJS](https://nodejs.org/en/)
* [discord.js](https://discord.js.org/#/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [file-system](https://www.npmjs.com/package/file-system)
* [Heroku](https://dashboard.heroku.com/apps)

## Add the Bot to Your Server

The bot has been deployed on Heroku and can be added to a Discord server through this [link](https://discord.com/oauth2/authorize?client_id=858088074877599831&permissions=8&scope=bot)

## How to Start the Project

Before using this project, a Discord application will have to be made through the [Discord Developer Portal](https://discord.com/developers/applications). A file will also have to be added in the root directory of this repository, alongside the `main.js` file. This file will be `.env` file that will contain the Discord bot token and the desired prefix to use for commands.

The `.env` file will contain something like this...

```env
BOT_TOKEN = ** Place Bot Token Here **
PREFIX = ** Place Desired Prefix Here **
```

`Notice:` Make sure that the variable names in the `.env` file are exactly as shown to ensure the program works correctly.

After this, deploy the bot to a Discord server that is available to you. The bot comes online when the program is executed through the command line.

Since this is a [NodeJS](https://nodejs.org/en/) project, this project can be run using...

```bash
node main.js
```

or

```bash
npm start
```

in a command line setting like [Git Bash](https://git-scm.com/downloads).

## Commands

### hello

Say hello to Computron with this basic command

```text
!hello
```

### add

Adds two or more numbers sequentially

```text
!add 2 9
```

### sub

Subtracts two or more numbers sequentially

```text
!sub 10 5 5
```

### mult

Multiples two or more numbers sequentially

```text
!mult 5 8 9 7
```

### div

Divides two or more numbers sequentially

```text
!div 8 2
```

### mod

Calculates the remainder of dividing the first argument by the second argument

```text
!mod 8 3
```

### eval

Give Computron an algebraic equation to solve (assuming it is has the correct syntax)

```text
!eval (40 - -5) * (26 / 4) + 70
```

### help

Ask Computron for information about the different commands it can perform

```text
!help
```

## License

Copyright © 2021 [Matt Roumeliotis](https://github.com/MattRoumo27)  
This project is [MIT](https://github.com/MattRoumo27/Computron/blob/master/LICENSE) licensed
