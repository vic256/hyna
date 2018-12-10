const Discord = require("discord.js")
var prefix = process.env["Prefix"]

function restart(message, client, args) {
  function relancement(message, client, args) {
      message.reply("Ok je redémarre!") 

      client.destroy();
      client.login(process.env["TOKEN"]).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`[HYNA-SYS] - Houston ! Je suis lancé !`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('Houston on a un probleme...');
          // Log the error
          console.error(err);
        })
      }
  if(message.content.startsWith(prefix + "restart")) {
    if(message.author.id === "316450218440654849") {
        relancement(message, client, args)
  }else {
    if(message.author.id === "409781688214880281") {
      relancement(message, client, args)
    } else {
      return message.reply("Il se trouve que ce bot est sécurisé :)")
      }
  }

}
}

module.exports = restart;

