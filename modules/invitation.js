var prefix = process.env["Prefix"]
var footer = process.env["Footer"]
function invitation(message, bot) {
    if(message.content === prefix + "invitation") {
    message.reply("l'invitation vous a été envoyé en mp/dm :envelope_with_arrow: !")
    message.author.send('Invitation du bot : https://discordapp.com/oauth2/authorize?client_id=501795695859204096&scope=bot&permissions=2146958591')
}    
  if(message.content === prefix + "invite") {
    message.reply("l'invitation vous a été envoyé en mp/dm :envelope_with_arrow: !")
    message.author.send('Invitation du bot : https://discordapp.com/oauth2/authorize?client_id=501795695859204096&scope=bot&permissions=2146958591')
}    
}
module.exports = invitation;