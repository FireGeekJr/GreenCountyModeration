const { MessageEmbed, Guild } = require('discord.js');
const {prefix, token, bot_age, words_array, bot_info} = require('/Users/pmhilton/FireBot/config.json');

module.exports = {
    name: 'ginfo',
    description: 'Get the bots info',
    execute(message, args, date, timesent){
       const embed = new MessageEmbed()
       .setTitle(`Guild Information`)
       .setColor(0xc300ff)
       .setThumbnail(message.guild.iconURL())
       .addFields(
        { name: `Guild Name`, value: `${message.channel.guild.name}`, inline: true},
        { name: `Channels`, value: `${message.channel}`, inline: true},
    )
    message.channel.send(embed)
    },
};