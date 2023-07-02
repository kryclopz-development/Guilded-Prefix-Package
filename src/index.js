require("dotenv").config();
const Guilded = require('guilded.js')
const { Client, CacheCollection } = Guilded;
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
	require(`./Handlers/${handler}`)(client, Guilded);
})

// Login To The Bot
client.login();
