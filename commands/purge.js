const { Message, MessageEmbed } = require('discord.js');



module.exports = {
    name: 'purge',
    description: 'Mass delete Messages',
    async execute(message, args, date, timesent){
    const sucsess = new MessageEmbed()
      .setTitle(`Purge info`)
      .setDescription(`Sucsessfully purged ${args[0]} messages.`)

    if (
      message.member.hasPermission('MANAGE_MESSAGES')
    ) {
      if (message.guild.me.hasPermission(`MANAGE_MESSAGES`)){
        if (args[0]){

          const delamount = Number(args[0], 10);

          if (isNaN(delamount)){
            const embed = new MessageEmbed()
              .setTitle(`Purge Information`)
              .setDescription(`${args[0]} is not a number <@!${message.author.id}>`)
            return message.channel.send(embed)
          }
          if (!Number.isInteger(delamount)){
            const embed = new MessageEmbed()
              .setTitle(`Purge Information`)
              .setDescription(`${args[0]} is not a whole number <@!${message.author.id}>`)
            return message.channel.send(embed)
          }
          if(!delamount || delamount < 2 || delamount > 500){
            const embed = new MessageEmbed()
              .setTitle(`Purge Information`)
              .setDescription(`Your amount needs to be greater than 2 and less than 500`)
            return message.channel.send(embed)
          }
        }else{
          const embed = new MessageEmbed()
          .setTitle("Purge Info")
          .setDescription("Please specify a amount of messages to purge.")
          message.channel.send(embed)
          return
        }
        const delamount = Number(args[0], 10);
        const fetched = message.channel.messages.fetch({
          limit: delamount
        })
        try{
          await message.channel.bulkDelete(delamount + 2)
            .then(message.channel.send(sucsess).then(msg => msg.delete({timeout: 5000})))
        } catch(err) {
          console.log(err)
          const embed = new MessageEmbed()
            .setTitle(`Purge Information`)
            .setDescription(`Could not purge the messages, please make sure they are no older than 14 days.`)
            message.channel.send(embed)
        }

      }else{       
        const embed = new MessageEmbed()
        .setTitle("Purge Info")
        .setDescription("I need the MANAGE MESSAGES permission.")
        message.channel.send(embed)
        return
      }
    }
    else{
      const embed = new MessageEmbed()
      .setTitle("Purge Info")
      .setDescription("You do not have permission to use this command.")
      message.channel.send(embed)
      return
    }
  }
} 
