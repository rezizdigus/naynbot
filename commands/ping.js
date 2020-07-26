const { MessageEmbed } = require("discord.js");

const Discord = require("discord.js");
const client = new Discord.Client;

module.exports = {
	name: 'ping',
	description: 'Shows bots ping',
	usage: ';ping',
	execute(message) {
		const embed = new MessageEmbed().setTitle(":ping_pong: Pong!").addFields({name: 'Bot Latency is:', value: `${Date.now() - message.createdTimestamp + " ms"}`}, {name: 'API Latency is:', value: `${client.ws.ping} ms`})
		message.channel.send(embed);
	}
}