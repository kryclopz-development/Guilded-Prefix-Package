const fs = require('fs')
const chalk = require('chalk');

module.exports = (client) => {
	
	// Log Starting Of Command Loading
	console.log(" ") // Empty Logs Make It Look Better
	console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.cyan(chalk.underline(`Commands Starting Loading`)))
	console.log(" ") // Empty Logs Make It Look Better

	// Get The Root Directory Of Commands
	const commandFolders = fs.readdirSync('./src/Commands')

	// For Each Folder In The Root Directory Of Commands
	for (const folder of commandFolders) {

		// Finding The Files In Those Folders That End With .JS
		const commandFiles = fs.readdirSync(`./src/Commands/${folder}`).filter(files => files.endsWith('.js'))

		// For Each File Ending In .JS
		for (const file of commandFiles) {

			// Define Command As That File
			const command = require(`../Commands/${folder}/${file}`)

			// Add The Command To The Commands Array
			client.commands.set(command.name, command)

			// Log Each Command Being Loaded
			console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.blue(chalk.bold(`${command.name}`)), (chalk.green(`Command Loaded`)))
		}
	}
}