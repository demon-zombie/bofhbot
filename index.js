const Commando = require('discord.js-commando');
const Discord = require('discord.js');

const TOKEN = process.env.TOKEN;

const client = new Commando.Client({
    owner: '603315629055016960',
    commandEditableDuration: 30,
    disableEveryone: true,
    partials:  ['MESSAGE', 'CHANNEL', 'REACTION']
});

const path = require('path');

client.registry

.registerGroups([
	['admin', 'Server Administration Commands'],
	['serverlab', 'General ServerLab Commands']
])

.registerDefaultTypes()

.registerDefaultGroups()

.registerDefaultCommands({
	unknownCommand: false
})

.registerCommandsIn(path.join(__dirname, 'commands'));

const sqlite = require('sqlite');

client.setProvider(
    sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);


client.on("messageReactionAdd", async (reaction, user) => {
	if(reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}

	//console.log(reaction.message.channel);
	if(reaction.message.channel.id === '767267787654955008' && reaction.message.id === '771953940149436448' && reaction._emoji.id === '596576670815879169') {
		//console.log(user);
		//pfyRole = reaction.message.guild.roles.find(r => r.name ==="PFY");
		//member = reaction.message.guild.members.get(user.id);
		//console.log(pfyRole);
		//member.addRole(pfy);
	}
});

client.login(TOKEN);
