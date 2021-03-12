module.exports = {
    name: 'ping',
    description: 'Ping Command',
    execute(message, args, date, timesent){
        message.channel.send(`**${date - timesent}ms**`);
    },
};