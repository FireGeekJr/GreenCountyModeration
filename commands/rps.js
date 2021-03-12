const fs = require('fs');
const words = require('./rpsOptions')
const word = words.words

module.exports = {
    name: 'rps',
    description: 'Play a game of rock paper scissors with the bot',
    execute(message, args, date, timesent){
        const input = args[0].toLowerCase()
        const output = word[Math.floor(Math.random() * 3)]

        if (input === `paper` && output === "Paper") {
            message.channel.send("You chose **Paper**, I chose **Paper**\nIts a **Tie**!")
            return;
        } 
        else if (input === `tock` && output === "Rock") {
            message.channel.send("You chose **Rock**, I chose **Rock**\nIts a **Tie**!")
            return;
        } 
        else if (input === `scissors` && output === "Scissors") {
            message.channel.send("You chose **Scissors**, I chose **Scissors**\nIts a **Tie**!")
            return;
        } 
        else if (input === `rock` && output === "Paper") {
            message.channel.send("You chose **Rock**, I chose **Paper**\nI **Win**!")
            return;
        } 
        else if (input === `rock` && output === "Scissors") {
            message.channel.send("You chose **Rock**, I chose **Scissors**\nYou **Win**!")
            return;
        } 
        else if (input === `paper` && output === "Rock") {
            message.channel.send("You chose **Paper**, I chose **Rock**\nYou **Win**!")
            return;
        } 
        else if (input === `paper` && output === "Scissors") {
            message.channel.send("You chose **Paper**, I chose **Scissors**\nI **Win**!")
            return;
        } 
        else if (input === `scissors` && output === "Paper") {
            message.channel.send("You chose **Scissors**, I chose **Paper**\nYou **Win**!")
            return;
        } 
        else if (input === `scissors` && output === "Rock") {
            message.channel.send("You chose **Scissors**, I chose **Rock**\nI **Win**!")
            return;
        } 
        else {
            message.channel.send("You need to provide a choice")
        }
    },
};


