//GLITCH caca :) Viens eval mdrr modules/owner/eval.js regarde a gauche*****
 var express = require('express');
var app = express();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
//GLITCH



//Discord launch
const discord = require('discord.js');
const client = new discord.Client();
var prefix = "/";
client.login(process.env["TOKEN"])

client.on("ready", () => {
    console.log("[HYNA] Le bot est près !")
    client.user.setPresence({ game: { name: 'HynaBot | /help', type: 'LISTENING'} , status: 'online'})
});
//Discord launch

client.on('message', message => {

  if (message.content.startsWith('/play')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }
})



const help = require('./modules/help.js')
const ban = require('./modules/mod/ban.js')
const evalcode = require('./modules/owner/eval.js')
const invitation = require('./modules/invitation.js')
const clearmessage = require('./modules/mod/clearmessage.js')
const asay = require('./modules/owner/asay.js')
const qr = require('./modules/autres/qr.js')
const stats = require('./modules/autres/stats.js')
const restart = require('./modules/owner/restart.js')
const support = require('./modules/support.js')

client.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  asay(message, prefix, client, args)
  help(message, client, args);
  ban(message, client, args);
  evalcode(message, client, args);
  invitation(message, client, args);
  clearmessage(message, client, args);
  qr(message, client, args)
  stats(message, client)
  restart(message, client, args)
  support(message, client, args)
});