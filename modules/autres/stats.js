const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
var os = require('os');
const fs = require("fs")
var guilds = {};
var prefix = process.env["Prefix"]
function stats(message, client) {
  if (message.content === prefix + "stats") {
      message.channel.send(`== = Bot Statistics = ==

    \`  Username ${client.user.tag}'

    =  Statistiques du bot =
       ↪ Nombre d'utilisateurs      :: ${client.guilds.reduce((p, c) => p + c.memberCount, 0).toLocaleString() } Users
       ↪ Nombre de bots             :: ${client.users.filter(user => user.bot).size.toLocaleString()} Bots
       ↪ Nombre de serveurs         :: ${client.guilds.size.toLocaleString()} Servers
       ↪ Emojis personnalisée       :: ${client.emojis.size.toLocaleString()} Emojis
       ↪ Nombre de salons           :: ${client.channels.size.toLocaleString()} Channels
    =  Informations du bot =
       ↪ Ping                       :: ${Math.round(client.ping)}ms
    =  Process Statistics =
       ↪ Version de discord.js      :: ${Discord.version}
       ↪ Version de node.js         :: ${process.version}
       ↪ Processus prêt             :: ${moment.duration(process.uptime() * 1000).format(" D [days] H [hrs] m [mins] s [secs]")}
       ↪ Bot prêt                   :: ${moment.duration(client.uptime).format(" D [days] H [hrs] m [mins] s [secs]")}
    =  Computer Statistics =
       ↪ Système d'exploitation     :: Oups...... 
       ↪ Uptime                     :: ${moment.duration(os.uptime(), "seconds").format(" D [days] H [hrs] m [mins] s [secs]")}
       ↪ Utilisation de la ram      :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
       ↪ Tas de mémoire             :: ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB
       ↪ Ram total                  :: ${(os.totalmem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes
       ↪ Ram libre                  :: ${(os.freemem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes`, {
                code: 'asciidoc'
       })
}}
module.exports = stats;