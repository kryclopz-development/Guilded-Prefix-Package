const { Client, Message } = require('guilded.js')
const Prefix = process.env.Prefix

module.exports = {
	name: "messageCreated",
	/**
	 * @param {Client} client
	 * @param {Message} message
	 */
	async execute(message, client) {
		// When A Message Is Created

		// If Message Does Not Start With Prefix Or Is A Bot Do Nothing
		// console.log(message.content);
		if (!message.content.startsWith(Prefix) || message.author.type === 0) return;

		// Remove The Prefix From The Args
		const args = message.content.slice(Prefix.length).trim().split(/ +/)

		// Set The Command Name
		const commandName = args.shift().toLowerCase();

		// Find The Command With The Name/Aliases Set
		const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

		// If No Command With That Name/Aliases Do Nothing
		if(!command) return;

		try {
			// Try To Execute The Command
			command.execute(message, client, args )
		} catch (error) {
			// If Execution Failed, Log The Error
			console.log(error);

			// Set A Reply To The User
			let errorReply = {
				embeds: [{
					title: '⛔ Error',
					description: `\`\`\` ${error}\`\`\``,
					color: 0xff0000
				}],
				isPrivate: true
			 };

			// Send The Reply
			message.reply(errorReply);
		}
		
	}
}