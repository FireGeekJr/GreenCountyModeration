const { Message } = require('discord.js');
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
             message.channel.send(`<@!${args[0]}> Has been banned`)
             client.channels.cache.get(`812025615732572230`).send(`${message.author} has banned ${target} | ${args[0]} |
             ${message.channel.guild.name}`)
             return;
          }
          else if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            if (targetMember.bannable) {
            targetMember.ban() 
            message.channel.send(`${target} has been banned`)
            client.channels.cache.get('812025615732572230').send(`${message.author} has banned ${target} | ${targetMember} |
            ${message.channel.guild.name}`)
            }
            else {
              message.channel.send(`User Cannot Be Banned`)
            }
           
          } else {
            message.channel.send(`${message.author} Please specify someone to ban.`)
          }
        } else {
          message.channel.send(
            `${tag} You do not have permission to use this command.`
          )
        }
      }
    } 
    