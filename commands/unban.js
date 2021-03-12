const { Message } = require('discord.js');
const fs = require('fs');
const words = require('./words')
const word = words.words


module.exports = {
    name: 'unban',
    description: 'Unban a member from the guild',
    execute(message, args, date, timesent){
        const { member, mentions } = message
        
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('BAN_MEMBERS')
        ) {
            message.guild.members.unban(args[0])
             message.channel.send(`<@!${args[0]}> Has been unbanned`)
             client.channels.cache.get(`812025615732572230`).send(`${message.author} has unbanned <@!${args[0]}> | ${args[0]}`)
             return;
        } 
        else { 
            message.channel.send(`You do not have permission to do that`)
            return;
        }
        
    }
}
    
