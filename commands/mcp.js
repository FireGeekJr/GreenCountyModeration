const fetch = require('node-fetch');
const { MessageEmbed, Guild } = require('discord.js');

function getId(playername) {
    return fetch(`https://api.mojang.com/users/profiles/minecraft/${playername}`)
      .then(data => data.json())
      .then(player => player.id);
  }

module.exports = {
    name: 'mcp',
    description: 'Get a users Minecraft Skin',
    execute(message, args, date, timesent){
      try{  
        getId(args[0]).then(id => {
        const embed = new MessageEmbed()
        .setTitle(`Skin of user ${args[0]}`)
        .setColor(0xc300ff)
        .addFields(
         { name: `File`, value: `[Download](https://minotar.net/download/${args[0]})`, inline: false},
         { name: `UUID`, value: `${id}`, inline: false},
         { name: `Profile`, value: `[NameMc](https://namemc.com/profile/${args[0]}.1)`, inline: false}
        )
        .setImage(`https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${args[0]}/700`)
        message.channel.send(embed)
        })
        //const embed = new discord.MessageEmbed()
        //.setTitle(`Skin of user ${args[0]}`)
        //.addFeild(`UUID: ${uuid}`)
        //.addFeild(`[Download](https://minotar.net/download/${args[0]})`)
        //.setImage(`https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${args[0]}/700`)
    } catch(e) {
        message.channel.send(`Skin Not found`)
    }
        
    },
};