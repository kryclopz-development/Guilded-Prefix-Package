const fs = require('fs')
const chalk = require('chalk');

module.exports = (client) => {

	// Log Starting Of Event Loading
	console.log(" ") // Empty Logs Make It Look Better
	console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.cyan(chalk.underline(`Events Starting Loading`)))
	console.log(" ")// Empty Logs Make It Look Better

	// Get The Root Directory Of Events
	const eventFolders = fs.readdirSync('./src/Events')

	// For Each Folder In The Root Directory Of Events
	for (const folder of eventFolders) {

		// Finding The Files In Those Folders That End With .JS
		const eventFiles = fs.readdirSync(`./src/Events/${folder}`).filter(files => files.endsWith('.js'))

		// For Each File Ending In .JS
		for (const file of eventFiles) {

			// Define Event As That File
			const event = require(`../Events/${folder}/${file}`)

			// If The Event Happens Once
			if (event.once) {

				// Run It With Client.Once, Passing In The Event Name And Args And Executing
				client.once(event.name, (...args) => event.execute(...args, client))

				// Log Each Event Being Loaded
				console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.blue(chalk.bold(`${event.name}`)), (chalk.green(`Event Loaded`)))

			// If The Event Happens More Than Once
			} else {

				// Run It With Client.On, Passing In The Event Name And Args And Executing
				client.on(event.name, (...args) => event.execute(...args, client))

				// Log Each Event Being Loaded
				console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.blue(chalk.bold(`${event.name}`)), (chalk.green(`Event Loaded`)))
			}
		}
	}
}