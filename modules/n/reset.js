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