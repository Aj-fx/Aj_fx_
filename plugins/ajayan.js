const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/u76xdWZ.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name Kaztroser*

*Creator number : http://wa.me/918281440156*
     
 *Instagram id: https://instagram.com/_ajayan_007?utm_medium=copy_link*

 *ᴋᴀᴢᴛʀᴏsᴇ ʙᴏᴛ: https://chat.whatsapp.com/EdukdzFc6suJNCs62aJB3f*

 *github link : https://github.com/Aj-fx/Kaztro_ser*

 *ᴀᴊ-ғxꫂ⁩..♡︎*
`}) 

}));
