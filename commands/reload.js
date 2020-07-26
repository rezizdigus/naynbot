const Discord = require("discord.js");

module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	usage: ';reload [command]',
	args: true,
	execute(message, args) {
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			const embed = new Discord.MessageEmbed().setTitle(':red_circle: Error!').setColor(0xeb4034).setDescription(`An error occured while trying to reload command!`).addFields({name: 'Name', value: `${commandName}`});
			return message.channel.send(embed);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.log(error);
			message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
			const embed = new Discord.MessageEmbed().setTitle(':red_circle: Error!').setColor(0xeb4034).setDescription('An error occured while trying to reload command!').addFields({name: 'Name', value: `${command.name}`}, {name: 'Message', value: `${error.message}`});
			message.channel.send(embed);
		}
	},
};

//Obviously proudly copied from discordjs.guide