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
    name: 'mute',
    description: 'Mute a member',
    execute(message, args, date, timesent){
        const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ) {
      const target = mentions.users.first()
      let myRole = message.guild.roles.cache.find(role => role.name === "Muted");
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.roles.add(myRole).catch(console.error)
        const embed = new MessageEmbed()
          .setTitle(`Mute info`)
          .setColor(`#FF0000`)
          .addFields(
            {name: `Moderator`, value: `<@!${message.author.id}>`, inline: true},
            {name: `User`, value: args[0], inline: true}
          )
        message.channel.send(embed)
      }
      }
    else {
      const embed = new MessageEmbed()
        .setTitle(`Mute Info`)
        .setDescription(`You do not have permission to use the ${prefix}mute command <@!${message.author.id}>`)
      message.channel.send(
        embed
      )
    }
  }
} 
