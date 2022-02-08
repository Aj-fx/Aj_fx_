const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'invite', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*😈𝕊ℍ𝔸ℍ𝕀𝔻-𝕊ℍ𝔸ℤℤ😈*
*ᴋᴀᴢᴛʀᴏsᴇʀ ɢʀᴏᴜᴘ ʟɪɴɢ https://chat.whatsapp.com/EdukdzFc6suJNCs62aJB3f*

`}) 

}));
