const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require("fs");

const config = require("./config.json");

//command handler
client.commands = new Discord.Collection();

fs.readdir("./events/", (err, files) => {
	const embed = new Discord.MessageEmbed().setTitle(':red_circle: Error!').setColor(0xeb4034).setDescription('An error occured while trying to execute this event!').addField('Error Message:', err);
	if (err) return Discord.Guild.channels.get(config.log-Channel);
	files.forEach(file => {
	  if (!file.endsWith(".js")) return;
	  const event = require(`./events/${file}`);
	  let eventName = file.split(".")[0];

	  client.on(eventName, event.bind(null, client));
	  delete require.cache[require.resolve(`./events/${file}`)];
	});
  });

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

activityState = 0;

function activityLoop(timeout) {
	if (activityState === 1) {
		client.user.setActivity('all over the server and you!', {type: 'WATCHING'});
		activityState = 2;
		setTimeout(() => {
			activityLoop(timeout);
		}, timeout);
	} else if (activityState === 2) {
		client.user.setActivity('Scarfy messing up his code!', {type: 'WATCHING'});
		activityState = 3;
		setTimeout(() => {
			activityLoop(timeout);
		}, timeout);
	} else if (activityState === 3) {
		client.user.setActivity('NyanBot!', {type: 'WATCHING'});
		activityState = 4;
		setTimeout(() => {
			activityLoop(timeout);
		}, timeout);
	} else if (activityState === 4) {
		client.user.setActivity('on Scarfy\'s Minecraft Server', {type: 'PLAYING'});
		activityState = 5;
		setTimeout(() => {
			activityLoop(timeout);
		}, timeout);
	} else if (activityState === 5) {
		client.user.setActivity('cool vibes!', {type: 'LISTENING'});
		activityState = 1;
		setTimeout(() => {
			activityLoop(timeout);
		}, timeout);
	}
}

client.on('ready', () => {
	console.log('NaynBot is Online. Thanks for using.');
	activityState = 1;
	activityLoop(15000);
});

//Command Handler

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		const embed = new Discord.MessageEmbed().setTitle(':red_circle: Error!').setColor(0xeb4034).setDescription('An error occured while trying to execute command! Please look into console for an detailed error message.');
		message.channel.send(embed);
	}
});


client.login(config.token);