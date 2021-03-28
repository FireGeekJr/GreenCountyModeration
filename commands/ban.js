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
          if (client.users.fetch(args[0])) {
            const bantarget = client.users.fetch(args[0])
             bantarget.ban(reason, args.splice(1,100).join(" "))
              const ra = args.splice(1, 100)
              const embed = new MessageEmbed()
              .setTitle(`Ban Info`)
              .setColor(`#FF0000`)
              .addFields(
               { name: `Moderator`, value: `${message.author}`, inline: true},
               { name: `Banned`, value: `${args[0]}`, inline: true},
               { name: `Reason`, value: `${ra.join(" ")}`, inline: false}
           )
             message.channel.send(embed)
             client.channels.cache.get(`812025615732572230`).send(embed)
             return;
          }
          else if (target) {
            const targetMember = client.users.fetch(target.id)
            if (targetMember.bannable) {
             targetMember.ban() 
             const ra = args.splice(1, 100)
             
              const embed = new MessageEmbed()
              .setTitle(`Ban Info`)
              .setColor(`#FF0000`)
              .setThumbnail(message.guild.iconURL())
              .addFields(
              { name: `Moderator`, value: `${message.author}`, inline: true},
              { name: `Banned`, value: `${targetMember}`, inline: true},
              { name: `Reason`, value: `${ra.join(" ")}`, inline: false}
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
    