const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'av',
    description: 'get your avatar',
    execute(message, args, date, timesent){
          const user = message.mentions.users.first() || message.author;
          
        if (!user){
        const avatarEmbed = new MessageEmbed()
        .setDescription(`${message.author}'s Avatar`)
        .setColor(0x333333)
        .setImage(user.displayAvatarURL({dynamic : true}))
        message.channel.send(avatarEmbed);
        }
        else {
            const avatarEmbed = new MessageEmbed()
            .setDescription(`${user}'s Avatar`)
            .setColor(0x333333)
            .setImage(user.displayAvatarURL({dynamic : true}))
            message.channel.send(avatarEmbed);
        }
}

};