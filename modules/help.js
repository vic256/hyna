var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
const Discord = require("discord.js")
function help(message, client, args) {
  if(message.content.startsWith(prefix + "help")) {
    //----AUCUN ARGUMENT----//
    //EMBED ://
    var helpfun = new Discord.RichEmbed()
      .setThumbnail("http://image.noelshack.com/fichiers/2018/45/7/1541936518-hyparia-logo-discord.png")
      .setColor("#40A497")
      .setTitle("Fun :")
      .addField("IN DEV", "** **")
      .addField("** **", "** **")
      /*.addField("💥 *invite", "T'envoie le lien d'invitation du Bot")
      .addField("💥 *ban <utilisateur>", "Ban un utilisateur du serveur")*/
      .setFooter(footer + "| Les crochets ne sont pas a mettre dans les commandes !")  
    
   
    var helpmod = new Discord.RichEmbed()
      .setThumbnail("http://image.noelshack.com/fichiers/2018/45/7/1541936518-hyparia-logo-discord.png")
      .setColor("#40A497")
      .setTitle("Modération")
      .addField("/ban", "**Utilisation :** /ban [utilisateur] [message]** \n **")
      .addField("/kick", "**IN DEV**")
      .addField("/clear", "**/clear [NOMBRE]**")
      /*.addField("💥 *invite", "T'envoie le lien d'invitation du Bot")
      .addField("💥 *kick <utilisateur>", "Kick un utilisateur du serveur")
      .addField("💥 *helpadmin", "Envoie l'aide pour les Admin !")
      .addField("💥 *ban <utilisateur>", "Ban un utilisateur du serveur")*/
    .setFooter(footer + "| Les crochets ne sont pas a mettre dans les commandes !")  
    
    
    var helpautre = new Discord.RichEmbed()
      .setThumbnail("http://image.noelshack.com/fichiers/2018/45/7/1541936518-hyparia-logo-discord.png")
      .setColor("#40A497")
      .setTitle("Autres :")
      .addField("/support", "**Utilisation :** /support [message]")
      .addField("/invite", "**Utilisation :** /invite")
      .addField('/qr', "**Utilisation : ** /qr [LIEN/TEXTE]")
      /*.addField("💥 *invite", "T'envoie le lien d'invitation du Bot")
      .addField("💥 *kick <utilisateur>", "Kick un utilisateur du serveur")
      .addField("💥 *helpadmin", "Envoie l'aide pour les Admin !")
      .addField("💥 *ban <utilisateur>", "Ban un utilisateur du serveur")*/
    .setFooter(footer + "| Les crochets ne sont pas a mettre dans les commandes !")  
  
    var help_embed = new Discord.RichEmbed()
        .setThumbnail("http://image.noelshack.com/fichiers/2018/45/7/1541936518-hyparia-logo-discord.png")
        .setColor("#40A497")
        .setTitle("Choisis une catégorie :")
        .addField("🔨 Modération", "** **")
        .addField('😂 Fun', "** **")
        .addField("📌Autre", "** **")
        /*.addField("💥 *invite", "T'envoie le lien d'invitation du Bot")
        .addField("💥 *kick <utilisateur>", "Kick un utilisateur du serveur")
        .addField("💥 *helpadmin", "Envoie l'aide pour les Admin !")
        .addField("💥 *ban <utilisateur>", "Ban un utilisateur du serveur")*/
        .setFooter(footer)  
    
    
    
    
    let command = args[0]
      message.reply("Page d'aide :")
        message.channel.send(help_embed).then(messagex => {
          const collecteur = messagex.createReactionCollector((reaction, user) => user.id === message.author.id);
          messagex.react('🔨')
          messagex.react('📌')
          messagex.react('😂')
          collecteur.on('collect', async(reaction) => {
            if (reaction.emoji.name === "🔨") { 
              reaction.remove(message.author.id); //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
              messagex.edit(helpmod)
              await reaction.remove(message.author.id); 
            }})
          collecteur.on('collect', async(reaction) => {
            if (reaction.emoji.name === "📌") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
              messagex.edit(helpautre)
              await reaction.remove(message.author.id); 
            }})
          collecteur.on('collect', async(reaction) => {
            if (reaction.emoji.name === "😂") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
              messagex.edit(helpfun)
              await reaction.remove(message.author.id); 
            }})
        })
        console.log("[HYNA] Nouvelles commande ! /help !")
    }
    
    //----AUCUN ARGUMENT----//
     // var SDL = "\n** **\n"
    
}
module.exports = help;  