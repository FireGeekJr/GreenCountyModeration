module.exports = {
    name: 'ship',
    description: 'See the compatablity with someone else',
    execute(message, args, date, timesent){
         if (args[0]){
             const rdm = Math.random() * 100
             const percent = Math.round(rdm * 1)
             message.channel.send(`<@!${message.author.id}> is a ${percent}% match with ${args[0]}`)
         }
         else {
             message.channel.send(`You need to mention someone to do this`)
         }
    }
};