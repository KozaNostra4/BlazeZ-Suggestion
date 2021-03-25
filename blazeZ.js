const Discord = require('discord.js');
const client = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const prefix = '!';
const fs = require('fs');
client.commands = new Discord.Collection();

const commandsFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));
for (const file of commandsFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}


client.on('ready', () => {
	console.log(
		[
			`${client.user.tag} is online!`
		].join('\n')
	);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'suggest-setup') {
		client.commands.get('suggest-setup').execute(message, args, Discord, client);
    }
    })
	client.login('ODE2MzcyNDE3MzExMjc3MTA2.YD6ADw.J2WovddQ2Yw4sSLoeMIznzBlKdI');