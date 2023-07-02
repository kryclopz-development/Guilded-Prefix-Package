module.exports = {
	name: 'ping',
	aliases: ['latency', 'lag'],
	description: "Sends the client's ping.",
	execute(message, args, commandName, client, Guilded) {
		// Example Command

		// Define The Response
		let response = {
			embeds: [{
				description: `🏓 ${client.ws.ping}ms`,
				color: 0x00ff00
			}],
		};

		// Send The Response
		message.reply(response)
	}
}