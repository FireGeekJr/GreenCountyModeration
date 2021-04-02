const { MessageEmbed } = require('discord.js');
const {prefix, token, bot_age, words_array, bot_info} = config

module.exports = {
    name: 'help',
    description: 'Get a list of commands for the bot',
    execute(message, args, date, timesent){
       const embed = new MessageEmbed()
       .setTitle(`${bot_info.name}'s Commands`)
       .setColor(0xc300ff)
       .addFields(
        { name: `${prefix}args`, value: `Get information about arguments`, inline: true},
        { name: `${prefix}info`, value: `Get information about the bot`, inline: true},
        { name: `${prefix}ping`, value: `Get the current ping of the bot`, inline: true},
        { name: `${prefix}kick`, value: `Kick a member from the guild`, inline: true},
        { name: `${prefix}ban`, value: `Ban a member from the guild`, inline: true},
        { name: `${prefix}newname`, value: `Generate a new username from a set group of words`, inline: true},
        { name: `${prefix}ginfo`, value: `Get info about the Guild`, inline: true}
        
    )
    message.channel.send(embed)
    },
};
///message.channel.send(`**Bot Name**\n${bot_info.name}\n**Bot Version**\n${bot_info.version}\n**Prefix**\n${prefix}\n**Ping**\n${timesent - date}`);