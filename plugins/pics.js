const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'pics', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/3Aiq6WO.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ꪶ͢ɪͥᴛͭsᷤ ͢ᴍͫᴇͤᡃ⃝ᴋᴀᴢᴛʀᴏsᴇʀ࿐*
                  
         *🔸PICS COMMENTS🔸*
                   
✨ *Cristiano ronaldo pics* .ronaldo

✨ *Noorin shereef* .noorin

✨ *Rashmika mandanna* .rashmika

✨ *xxxtentacion* .xxxtentacion

 *🍁more pics and comments coming soon..🍁*
    
    
    *🌟Thanks Ajfx and Kaztroser🌟*
 
`}) 

}));
