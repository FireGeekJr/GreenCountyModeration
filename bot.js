// Run dotenv
require('dotenv').config();
const {prefix, token, bot_age, words_array, bot_info} = require('./config.json');

const Discord = require('discord.js');

const fs = require('fs');
const { waitForDebugger } = require('inspector');
const { start } = require('repl');
global.client = new Discord.Client();
client.commands = new Discord.Collection();
global.config = require(`./config.json`)
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


//client.on("ready", () =>{
//client.user.setActivity(`FireGeekJr Break things`, { type: `WATCHING`}).catch(console.error);
//client.user.setStatus(`dnd`);
//console.log()
//});

client.once('ready', () => {
  console.log(prefix)
  console.log(bot_info.name)
  console.log(bot_info.version)

});

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}



client.on('message', message => {
//  if(!message.author.bot){
//    message.channel.send(`||***<@!655579078753124422> Get pinged nerd***||`)}


if(!message.content.startsWith(prefix) || message.author.bot) return;

  const timesent = message.createdTimestamp
  const date = Date.now()
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if(!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName)
  try{
    command.execute(message, args, date, timesent)
  }catch(error){
    console.error(error);
    message.channel.send(`<@!${message.author.id}>, there was an issue executing that command!`);
  }
})

client.once('ready', () => {
const activities = [
  `${prefix}help`,
  `FireGeekJr Break things`,
  `${client.commands.size} Commands!`,
  `${client.channels.cache.size} Channels!`,
  `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users!`
];

let i = 0
setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {type: `WATCHING`}), 15000);
});

client.login(token);