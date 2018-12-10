const qrcode = require("qrcode");
const tempy = require("tempy");
var prefix = process.env["Prefix"]
var footer = process.env["Footer"]


function qr(message, client, args) {
  if(message.content.startsWith(prefix + "qr")) {
    const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) { 
        qrcode.toFile(qrOutput, args.slice(1).join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.reply('Votre qr code est près !')
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "qr.png"
                }]
            });
        });
    }else{
        message.channel.stopTyping();
        message.reply("Quel texte souhaitez-vous mettre dans le qr code ? ");
    }
  }
}
module.exports = qr;