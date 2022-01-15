const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/jDkKLYG.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name Kaztroser*

*Creator number : wa.me/918281440156?text=Hi%20Aj-fx%20bro.%20*


 *Efx audios : https://chat.whatsapp.com/FmZqZDpjgyv8f2jVzfcGwp*
     
 *Instagram id: https://instagram.com/_ajayan_007?utm_medium=copy_link*

 *Bot zone: https://chat.whatsapp.com/L38gYwSPTBILW3K4kdvMY1*

 *github link : ɢɪᴛʜᴜʙ ʟɪɴᴋ ᴜɴᴀᴠᴀɪʟᴀʙʟᴇ*

 *ᴀᴊ-ғxꫂ⁩..♡︎*
`}) 

}));
