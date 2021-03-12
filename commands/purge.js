const { Message } = require('discord.js');
const fs = require('fs');
const words = require('./words')
const word = words.words

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
};


module.exports = {
    name: 'purge',
    description: 'Mass delete Messages',
    execute(message, args, date, timesent){


    if (
      message.author.hasPermission('MANAGE_MESSAGES')
    ) {
    
    }
  }
} 
