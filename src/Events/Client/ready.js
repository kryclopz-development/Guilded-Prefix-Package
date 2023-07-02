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

		// When Mongoose Connects with mongodbURL, Set Options.
		await mongoose.connect(mongodbURL || '', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})

		// If Mongoose Successfully Connected
		if (mongoose.connect) {

			// Log It
			console.log(" ")// Empty Logs Make It Look Better
			console.log(chalk.green(chalk.bold(`Database`)), (chalk.white(`>>`)), chalk.green(chalk.bold(`MONGOOSE`)), (chalk.green(`Online`)))
		}

		// Log The Client As Online
		console.log(" ")// Empty Logs Make It Look Better
		console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.magenta(chalk.bold(`${client.user.name}`)), (chalk.green(`ONLINE`)))

		// Set The Status Of The Client
		client.setStatus({
			content: "Put Status Here",
			emoteId: "Put Emote ID Here"
		})
	}
}