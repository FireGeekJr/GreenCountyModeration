const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'sm',
    description: 'Change the slowmode of a channel',
    execute(message, args, date, timesent){
        const member = message
        if (message.member.hasPermission(`MANAGE_CHANNELS`)){
            if (!args[0]){
                const embed = new MessageEmbed()
                    .setTitle("Slowmode Info")
                    .setDescription("Please provide a time!")
                return message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
            }else{
                time = Number(args[0])
                if (!isNaN(time)) {
                    message.channel.setRateLimitPerUser(time)
                    const embed = new MessageEmbed()
                    .setTitle('Slowmode Info')
                    .setDescription(`Set slowmode to **${time}** Seconds!`)
                    message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
                }else{
                    const embed = new MessageEmbed()
                    .setTitle('Slowmode Info')
                    .setDescription(`**${args[0]}** Is not a number!`)
                    message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
                }
                
            }
        }
        else{
            const embed = new MessageEmbed()
            .setTitle("Slowmode Info")
            .setDescription("You do not have permission to use this command!")
            return message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
        }
    }   
};