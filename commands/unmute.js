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
    name: 'unmute',
    description: 'Unmute a member',
    execute(message, args, date, timesent){
        const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ) {
      const target = mentions.users.first()
      let myRole = message.guild.roles.cache.find(role => role.name === "Muted");
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.roles.remove(myRole).catch(console.error)
        message.channel.send(`${target} has been unmuted`)
      }
      }
    else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      )
    }
  }
} 
