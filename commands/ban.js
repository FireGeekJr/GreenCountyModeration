const discord = require ('discord.js');

module.exports = {
    name: 'ban',
    description: 'Bans a user from the server.',
    async execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return;

      const noReasonEmbed = new discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor(`#FF0000`)
            .setDescription("No reason was specified!")

      const cannotBanEmbed = new discord.MessageEmbed()
      .setTitle(`Ban Info`)
      .setColor(`#FF0000`)
      .setThumbnail(message.guild.iconURL())
      .addFields(
       { name: `${message.author.tag}`, value: `Could not ban <@!${args[0]}>`, inline: true}
   )

        let parameters = message.content.split(" ");
        let user = parameters[1];
        let reason = parameters.slice(2).join(" ");
        user = user.match(/\d+/gm)[0];
        let userInstance; 
        try {
            userInstance = await message.guild.members.fetch(user);
        }
        catch
        {
            userInstance = false;
        }
        if (!reason) return message.channel.send(noReasonEmbed);
        if (userInstance) {
            if (userInstance.hasPermission("BAN_MEMBERS")) return message.channel.send(cannotBanEmbed);
        }
         
        const banUserEmbed = new discord.MessageEmbed()
            .setTitle(`Ban Info`)
            .setColor(`#FF0000`)
            .addFields(
             { name: `Moderator`, value: `${message.author}`, inline: true},
             { name: `Banned`, value: user, inline: true},
             { name: `Reason`, value: `${reason}`, inline: false}
            )
        message.guild.members.ban(user, {'reason': reason}).then(() => {
        message.channel.send(banUserEmbed);
        message.guild.channels.fetch(`logs`).send(banUserEmbed)
        }).catch(Error => {
            console.log(Error);
            return message.channel.send(cannotBanEmbed)
        });
    }
}

//const { Message, MessageEmbed } = require('discord.js');
//
//module.exports = {
//    name: 'ban',
//    description: 'Ban a member from the guild',
//    //So here?
//    async execute(message, args, date, timesent){
//       
//      const { member, mentions } = message
//
//        if (
//          member.hasPermission('ADMINISTRATOR') ||
//          member.hasPermission('BAN_MEMBERS')
//        ) {
//          let user = args[1]
//          user = user.match(/\d+/gm)[0];
//          let parameters = message.content.split(" ");
//          let user = parameters[1];
//          user = user.match(/\d+/gm)[0];
//          let userinstance;
//          try {
//            console.log(user + "Try1")
//            userinstance = await message.guild.members.fetch(user);
//            console.log(user + "Try 2")
//          }
//          catch {
//            userinstance = false
//          }
//          if (userinstance == false){
//            const embed = new MessageEmbed()
//              .setTitle(`Ban Info`)
//              .setColor(`#FF0000`)
//              .setThumbnail(message.guild.iconURL())
//              .addFields(
//               { name: `${message.author.tag}`, value: `Please specify a user to ban`, inline: true}
//           )
//             message.channel.send(embed);
//            return;
//          };
//          if (user.bannable == true){
//             
//              const ra = args.splice(1, 100)
//              const embed = new MessageEmbed()
//              .setTitle(`Ban Info`)
//              .setColor(`#FF0000`)
//              .addFields(
//               { name: `Moderator`, value: `${message.author}`, inline: true},
//               { name: `Banned`, value: `<@!${args[0]}>`, inline: true},
//               { name: `Reason`, value: `${ra.join(" ")}`, inline: false}
//           )
//            message.guild.members.ban(user,
//            // days: 7,
//              ra.join(" ")
//           )
//             message.channel.send(embed)
//             client.channels.cache.get(`812025615732572230`).send(embed)
//             return;
//          }else{
//              const embed = new MessageEmbed()
//              .setTitle(`Ban Info`)
//              .setColor(`#FF0000`)
//              .setThumbnail(message.guild.iconURL())
//              .addFields(
//               { name: `${message.author.tag}`, value: `Could not ban ${user}`, inline: true}
//           )
//             message.channel.send(embed)
//             return;
//            }
//          }else{
//            const embed = new MessageEmbed()
//            .setTitle(`Ban Info`)
//            .setColor(`#FF0000`)
//            .setThumbnail(message.guild.iconURL())
//            .addFields(
//                   { name: `${message.author.tag}`, value: `You cant use that command!`, inline: true}
//               )
//                 message.channel.send(embed)
//          }
//        }
//      };