const { MessageEmbed } = require("discord.js")

module.exports = {
	name: 'info',
	description: 'Shows info about the bot',
	usage: ';info',
	execute(message, args) {
		const embed = new MessageEmbed().setThumbnail('http://img.zdigusofficial.pl/images/naynbot.gif').setTitle("Info.").setDescription('A joke version of NyanBot made by Scarfy. Click the title for more informations about the bot. [WIP]').setFooter("Hosted on RPI 3B.", 'http://img.zdigusofficial.pl/images/naynbot.png').setURL('http://redirect.zdigusofficial.pl/nb');
		message.channel.send(embed);
	}
}