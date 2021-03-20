const { Message, MessageEmbed } = require('discord.js');
const fs = require('fs');
const words = require('./words')
const word = words.words

module.exports = {
    name: 'ban',
    description: 'Ban a member from the guild',
    execute(message, args, date, timesent){
        const { member, mentions } = message
        
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('BAN_MEMBERS')
        ) {
          const target = mentions.users.first()
          if (message.guild.members.cache.get(args[0])) {
            const bantarget = message.guild.members.cache.get(args[0])
             bantarget.ban()
              const embed = new MessageEmbed()
              .setTitle(`Ban Info`)
              .setColor(`#FF0000`)
              .addFields(
               { name: `Moderator`, value: `${message.author}`, inline: true},
               { name: `Banned`, value: `${args[0]}`, inline: true},
           )
             message.channel.send(embed)
             client.channels.cache.get(`812025615732572230`).send(embed)
             return;
          }
          else if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            if (targetMember.bannable) {
             targetMember.ban() 
              const embed = new MessageEmbed()
              .setTitle(`Ban Info`)
              .setColor(`#FF0000`)
              .setThumbnail(message.guild.iconURL())
              .addFields(
              { name: `Moderator`, value: `${message.author}`, inline: true},
              { name: `Banned`, value: `${targetMember}`, inline: true},
         )
           message.channel.send(embed)
           client.channels.cache.get(`812025615732572230`).send(embed)
           return;
            }
            else {
              const embed = new MessageEmbed()
              .setTitle(`Ban Info`)
              .setColor(`#FF0000`)
              .setThumbnail(message.guild.iconURL())
              .addFields(
               { name: `${message.author.tag}`, value: `Could not ban ${target}`, inline: true}
           )
             message.channel.send(embed)
             return;
            }
           
          } else {
              const embed = new MessageEmbed()
              .setTitle(`Ban Info`)
              .setColor(`#FF0000`)
              .setThumbnail(message.guild.iconURL())
              .addFields(
               { name: `${message.author.tag}`, value: `Please specify a user to ban`, inline: true}
           )
             message.channel.send(embed)
          }
        } else {
          const embed = new MessageEmbed()
          .setTitle(`Ban Info`)
          .setColor(`#FF0000`)
          .setThumbnail(message.guild.iconURL())
          .addFields(
           { name: `${message.author.tag}`, value: `You cant use that command!`, inline: true}
       )
         message.channel.send(embed)
        }
      }
    } 
    