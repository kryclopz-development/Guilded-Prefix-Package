require("dotenv").config();
const { Client, CacheCollection } = require('guilded.js');
const chalk = require('chalk');

// Clear The Console
console.clear()

// Log The Starting Of Bot (Fancy)
console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.magenta(chalk.underline(chalk.bold(`Bot Starting...`))))

// Define The Client
const client = new Client({
  token: process.env.TOKEN,
});

// Define Commands Array
client.commands = new CacheCollection();

// Start Handlers
['eventsHandler', 'commandsHandler'].forEach(handler => {
	require(`./Handlers/${handler}`)(client);
})

// Login To The Bot
client.login();
