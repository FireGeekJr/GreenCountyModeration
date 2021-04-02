const { MessageEmbed } = require('discord.js');
const {prefix, token, bot_age, words_array, bot_info} = config

module.exports = {
    name: 'info',
    description: 'Get the bots info',
    execute(message, args, date, timesent){
       const embed = new MessageEmbed()
       .setTitle(`${bot_info.name}'s Information`)
       .setColor(0xc300ff)
       .addFields(
        { name: `Bot Name`, value: `${bot_info.name}`, inline: true},
        { name: `Bot Version`, value: `${bot_info.version}`, inline: true},
        { name: `Bot Prefix`, value: `${prefix}`, inline: true },
        { name: `Current Ping`, value: `**${date - timesent}ms**`, inline: true },
        { name: `Developer Info`, value: `Hello, I am ArashiaSkies#7183, Thank you for using my bot, feel free to follow [my twitch channel](https://www.twitch.tv/firegeekjr), and subscribe to [my youtube channel](https://www.youtube.com/channel/UCwwf5RDzYva6v4b0vWVoO_Q)`, inline: false }
        
    )
    message.channel.send(embed)
    },
};
