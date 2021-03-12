const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'suggest',
    description: 'Create a suggestion',
    execute(message, args, date, timesent){
        if (args[0]){
        const suggestion = args.join(" ")
        const embed = new MessageEmbed()
       .setTitle(`Suggestion`)
       .setColor(0xc300ff)
       .setDescription(`${suggestion}`)
       .setFooter(`Made by ${message.author.tag} | ${message.author.id}`)
        client.channels.cache.get(`812087074550448168`).send(embed)
        .then(function(message){
            message.react(`✅`)
            message.react(`❌`)
        })
        }
        else {
            message.channel.send(`You need to provide a suggestion`)
        }
    }
};