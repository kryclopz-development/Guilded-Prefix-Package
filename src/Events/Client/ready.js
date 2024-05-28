const chalk = require('chalk');
const mongoose = require('mongoose')

module.exports = {
	name: "ready",
	async execute(client) {
		// When Client Is Ready We Will

		// Define mongodbURL
		const mongodbURL = process.env.MongoDB_URL

		// If There Is No mongodbURL, Do Nothing
		if (!mongodbURL) return;

		// If Connecting To MongoDB
		if (await mongoose.connect(mongodbURL)) {

			// Log It
			console.log(" ")// Empty Logs Make It Look Better
			console.log(chalk.green(chalk.bold(`Database`)), (chalk.white(`>>`)), chalk.green(chalk.bold(`MONGOOSE`)), (chalk.green(`Online`)))
		}

		// Log The Client As Online
		console.log(" ")// Empty Logs Make It Look Better
		console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.magenta(chalk.bold(`${client.user.name}`)), (chalk.green(`ONLINE`)))

		// Set The Status Of The Client
		client.setStatus({
			content: "Helping The Poor",
			emoteId: "1973542"
		})
	}
}