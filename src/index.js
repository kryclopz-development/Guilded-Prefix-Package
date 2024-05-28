require("dotenv").config();
const { Client, CacheCollection } = require('guilded.js');
const chalk = require('chalk');
const fs = require('fs')

// Clear The Console
console.clear()

// Log The Starting Of Bot (Fancy 🤩)
console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.magenta(chalk.underline(chalk.bold(`Bot Starting...`))))

// Define The Client
const client = new Client({
  token: process.env.TOKEN,
});

// Define Commands Array
client.commands = new CacheCollection();

// Start Handlers
for (const handler of fs.readdirSync('./src/Handlers').filter(f => f.endsWith('.js'))) {
	require(`./Handlers/${handler}`)(client)
}

// Login To The Bot
client.login();
