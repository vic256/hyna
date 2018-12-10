function asay(message, prefix, client, args) {
if (message.content.startsWith(prefix + "asay")) {
    if (message.author.id == 316450218440654849) { //Vic
      message.channel.send(message.content.substr(1 + 4))
      message.delete(message.author)
    } else if (message.author.id == 409781688214880281) { //Arthur
      //message.reply('Refuse par le dieu surpuissant vic256 !')
      message.channel.send(message.content.substr(1 + 4))
      message.delete(message.author)
    }  else if (message.author.id == 436945839617867787) { //Arthur
      message.reply("Oups, j'ai piscine !")
      message.delete(message.author)
    }  else if (message.author.id == 499566106906984468) { //Estedu
      message.channel.send(message.content.substr(1 + 4))
      //message.reply("Oups, j'ai piscine !")
      message.delete(message.author)
    }
    else message.reply('Cher monsieur, il se trouve que se bot vous refuse la commande :) ')
  }
}  
module.exports = asay;  
