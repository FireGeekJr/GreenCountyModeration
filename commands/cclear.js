const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'cclear',
    description: 'Clear an entire channel by cloning it!',
    execute(message, args, date, timesent){
        const member = message
        if (message.member.hasPermission(`MANAGE_CHANNELS`)){
            message.channel.clone(undefined,true,false, `Channel cleared by ${message.author}`)
                .then(message.channel.delete())
            console.log(message.channel.id + "|" + message.author.id + "| CClear has been used!")
        }
        else{
            const embed = new MessageEmbed()
            .setTitle("Channel Clear Info")
            .setDescription("You do not have permission to use this command!")
        }
    }   
};