const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'lmgtfy',
			group: 'serverlab',
			memberName: 'lmgtfy',
			description: 'Search for ',
			args: [
				{
					key: 'searchQuery',
					type: 'string',
					prompt: ''
				}
			],
			argsPromptLimit: 0
		});
	}

	run(message, { searchQuery }) {
		return message.say('<https://lmgtfy.com/?q=' + encodeURI(searchQuery) + '>');
	}
};
