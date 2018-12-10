var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
const Discord = require("discord.js")
function ban(message, client, args) {
  if(message.content.startsWith(prefix + "ban")) {
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.chanel.send(":x: Vous n'avez pas la permission");
      let time = args[2]
      let reason = args.slice(3).join(' ');
      if(!reason) reason = " Aucune raison...";
      if(message.mentions.users.size === 0) {
          return message.channel.send(":x: Erreur ! Vous devez mentionner quelqu'un !")
        
      }
    
      var ban = message.guild.member(message.mentions.users.first());
      if(!ban) {
          return message.channel.send(":x: Je ne suis pas sur que l'utilisateur existe :thinking:")
      }
    
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
          return message.channel.send("Je n'ai pas la permission pour ban :-/");
      }
    
      var mention = `<@${client.user.id}>`;
      ban.ban({
          reason: '[HynaBan]' + ` ${reason}`,
          days: 7
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`L'utilisateur ${ban} a été banni !`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('Une erreur est survenue. Allez voir la console du bot !');
          // Log the error
          console.error(err);
        }
        
      );
    }
  
}
module.exports = ban;  



