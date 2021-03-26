const { Message, MessageEmbed } = require('discord.js');
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
    name: 'kick',
    description: 'Kick a member from the guild',
    execute(message, args, date, timesent){
        const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (message.guild.members.cache.get(args[0])) {
        const bantarget = message.guild.members.cache.get(args[0])
        if (bantarget.bannable) {
         bantarget.kick()
         const embed = new MessageEmbed()
         .setTitle(`Kick Info`)
         .setColor(`#FF0000`)
         .setThumbnail(message.guild.iconURL())
         .addFields(
         { name: `Moderator`, value: `${message.author}`, inline: true},
         { name: `Kicked`, value: `${targetMember}`, inline: true},
    )
      message.channel.send(embed)
      client.channels.cache.get(`812025615732572230`).send(embed)
      return;
        }
        else {
          message.channel.send(`<@!${bantarget}> cannot be kicked`)
        }
      }
    
      else if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        if (targetMember.bannable){
        targetMember.kick()
        message.channel.send(`${target} has been kicked`)
        client.channels.cache.get(`812025615732572230`).send(`${message.author} has kicked <@!${args[0]}> | ${args[0]} |
         ${message.channel.guild.name}`)
        }
        else {
          message.channel.send(`${targetMember} cannot be kicked`)
        }
      } else {
        message.channel.send(`${message.author} Please specify someone to kick.`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      )
    }
  }
} 
