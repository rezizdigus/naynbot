const Discord = require("discord.js");
const client = new Discord.Client;

const config = require("./config.json");

activityState = 0;

function activityLoop(timeout) {
	if (activityState === 1) {
		client.user.setActivity('all over the server and you!', {type: 'WATCHING'});
		activityState = 2;
		setTimeout(() => {
			activityLoop(timeout);
		}, timeout);
	} else if (activityState === 2) {
		client.user.setActivity('for ;help!', {type: 'WATCHING'});
		activityState = 3;
		setTimeout(() => {
			activityLoop(timeout);
		}, timeout);
	} else if (activityState === 3) {
		client.user.setActivity('NyanBot!', {type: 'WATCHING'});
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

client.login(config.token);