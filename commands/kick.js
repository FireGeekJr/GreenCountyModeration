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
         const ra = args.splice(1, 100)
         const embed = new MessageEmbed()
         .setTitle(`Kick Info`)
         .setColor(`#FF0000`)
         .setThumbnail(message.guild.iconURL())
         .addFields(
         { name: `Moderator`, value: `${message.author}`, inline: true},
         { name: `Kicked`, value: `${bantarget}`, inline: true},
         { name: `Reason`, value: `${ra.join(" ")}`, inline: false}
    )
      message.channel.send(embed)
      message.guild.channels(`logs`).send(embed)
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
        const embed = new MessageEmbed()
          .setTitle(`User Kicked`)
          .addFields(
            {name: "Moderator", value: `<@!${message.author.id}>`, inline: true},
            {name: "Kicked", value: `<@!${targetMember}>`, inline: true},
            {name: "Reason", value: args.slice(2).join(" "), inline: true}
          )
        message.channel.send(embed)
        }
        else {
          const embed = new MessageEmbed()
            .setTitle("Kick Info")
            .setDescription("User cannot be kicked").then(msg => msg.delete({timeout: 5000}))
          message.channel.send(embed)
        }
      } else {
        const embed = new MessageEmbed()
        .setTitle("Kick Info")
        .setDescription("Please specify a user to kick").then(msg => msg.delete({timeout: 5000}))
        message.channel.send(embed)
      }
    } else {
      const embed = new MessageEmbed()
      .setTitle("Kick Info")
      .setDescription("You do not have permission to use that command!").then(msg => msg.delete({timeout: 5000}))
    }
  }
} 
