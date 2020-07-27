const { MessageEmbed } = require("discord.js")

module.exports = {
	name: 'changelog',
	description: 'Shows latest changes in the bot.',
	usage: ';changelog',
	execute(message, args) {
		const embed = new MessageEmbed().setThumbnail('http://img.zdigusofficial.pl/images/naynbot.gif').setTitle("Latest Changes.").addFields({name: 'Help command', value: 'Improved help command'}, {name: '**NEW** Changelog command', value: 'Shows latest changes of the bot. (If updated)'}, {name: '**NEW** Info command', value: 'Shows Information about the bot'}, {name: 'Other', value: 'Added usage to all commands.'}).setFooter("Hosted on RPI 3B. (May not be yet hosted on RPI 3B)", 'http://img.zdigusofficial.pl/images/naynbot.png').setURL('http://redirect.zdigusofficial.pl/nb');
		message.channel.send(embed);
	}
}