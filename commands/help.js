const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	usage: ';help [command name]',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			const embed = new MessageEmbed().setThumbnail('http://img.zdigusofficial.pl/images/naynbot.gif').setTitle("Command List.").setDescription(commands.map(command => command.name)).setFooter("Use ;help [Command name] to see help for a specific command!", 'http://img.zdigusofficial.pl/images/naynbot.png').setURL('http://redirect.zdigusofficial.pl/nb');
			message.channel.send(embed);
		} else {
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

			if (!command) {
				return message.reply('that\'s not a valid command!');
			}

			const embed = new MessageEmbed().setTitle("Help.").addFields({name: `Command name`, value: `${command.name}`}, {name: 'Description', value: `${command.description}`}, {name: 'Usage', value: `${command.usage}`});
			message.channel.send(embed);
			}
	},
};