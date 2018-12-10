var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
const Discord = require("discord.js")
function help(message, client, args) {
  if (message.content.startsWith(prefix + "support")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let helpmsg = args
    message.reply('Demande de support envoyé !')
    client.channels.get('506818712540807179').send("", {
 	      embed: new Discord.RichEmbed()
 	   	  .setTitle("Demande de support !")
 		    .setDescription(message.content.substr(1 + 7))
 		    .setColor("#ff0000")
        .setTimestamp()
        .setFooter(`Voici le tag de cette personne ${message.author.tag}`)
    });

}
}
module.exports = help;  