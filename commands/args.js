module.exports = {
    name: 'args',
    description: 'Info about the arguments',
    execute(message, args, date, timesent){
        if(!args.length){
            return message.channel.send(`You have not provied any arguments, <@!${message.author.id}>`);
        }else if(args[0]==='foo'){
            return message.channel.send('bar')
        }

        message.channel.send(`Arguments: ${args.join(" ")} \nArguments Lenght: ${args.length}`);
    },
};