const Discord = require("discord.js");
const client = new Discord.Client;

const config = require("./config.json");

activityState = 0;

client.on('ready', () => {
	console.log('NaynBot is Online. Thanks for using.');
	activityState = 1;
});

client.login(config.token);