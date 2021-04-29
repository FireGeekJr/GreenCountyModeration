const { MessageEmbed } = require('discord.js');
const {prefix, token, bot_age, words_array, bot_info} = config

module.exports = {
    name: 'help',
    description: 'Get a list of commands for the bot',
    execute(message, args, date, timesent){

        const hembed = new MessageEmbed()
            .setTitle(`${bot_info[1]}'s Commands`)
            .setColor(`#7D46EB`)
            client.commands.forEach(function(value, key, map) {
                hembed.addField(value.name, value.description, true)
            });

            if (args[0]) {
            const cmdname = args[0].toLowerCase()
            if (client.commands.has(/*args[0].toLowerCase()*/cmdname)){
                const cmdinfo = require(`./${cmdname}`)
                const embed = new MessageEmbed()
                .setTitle(cmdinfo.name)
                .setDescription(cmdinfo.description)
                .setColor(`#7D46EB`)
                
                message.channel.send(embed)
            } else {
                return message.channel.send(hembed)
            }
        } else{
            return message.channel.send(hembed)
        }




      // const embed = new MessageEmbed()
      // .setTitle(`${bot_info.name}'s Commands`)
      // .setColor(0xc300ff)
//
    //message.channel.send(embed)
    },
};
///message.channel.send(`**Bot Name**\n${bot_info.name}\n**Bot Version**\n${bot_info.version}\n**Prefix**\n${prefix}\n**Ping**\n${timesent - date}`);