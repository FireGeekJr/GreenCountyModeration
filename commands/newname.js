const { Message } = require('discord.js');
const fs = require('fs');
const words = require('./words')
const word = words.words

module.exports = {
    name: 'newname',
    description: 'Generate a new name',
    execute(message, args, date, timesent){

        message.channel.send(`${word[Math.floor(Math.random() * 13)]}${word[Math.floor(Math.random() * 13)]}`)
    },
};

