const fetch = require('node-fetch');

function getId(playername) {
    return fetch(`https://api.mojang.com/users/profiles/minecraft/${playername}`)
      .then(data => data.json())
      .then(player => player.id);
  }

module.exports = {
    name: 'mcid',
    description: 'Get a users Minecraft Id',
    execute(message, args, date, timesent){
       if(args[0]){
        getId(args[0]).then(id => {
            message.channel.send(`${args[0]}'s uuid is ${id}`)
          })
       }
       else{
           message.channel.send(`You need to provide a minecraft name`)
       }
    },
};