module.exports = {
    name: 'gban',
    description: 'Ban a player from the game',
    async execute(message, args, date, timesent){
        /*import * as TrelloNodeAPI from 'trello-node-api';
        const Trello = new TrelloNodeAPI();
        Trello.setApiKey("aea6d8274859de9241754120c7ed2752");
        Trello.setOauthToken("047465e71003fb4f875e9d78658aca9b192b64ce5b882a08fe36b051787993a4");*/
       if (message.member.hasPermission("Administrator")){
        var Trello = require('trello-node-api')("aea6d8274859de9241754120c7ed2752", "047465e71003fb4f875e9d78658aca9b192b64ce5b882a08fe36b051787993a4");
        let data = {
            name: args[0],
            pos: 'top',
            idList: '608a08d616a279343a6c1d77', //REQUIRED
        };
        let response;
        try {
            response = await Trello.card.create(data);
            message.channel.send("Player Banned")
        } catch (error) {
            if (error) {
                console.log('error ', error);
            }
        }
       }
    }   
};