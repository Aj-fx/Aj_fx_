//PLUGIN BY AJFX COPY WITH CREDIT

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'info', fromMe: false, desc: 'Shows bot information and creator info'}, (async (message, match) => {

    var r_text = new Array ();



  r_text[0] = Config.LG_LOGO;


    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `` + Config.BOT + ` *BOT CREATED BY* ` + Config.OWNER +`
    
    ----- ` + Config.BOT + ` -----
    
╭─➤ 𝗜𝗡𝗙𝗢 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 »
│❖ *ᴀᴜᴛʜᴏʀ* : ` + Config.OWNER + `
│❖ *ᴋᴇʀɴᴇʟ* : ꪶ͢ᴀᴊ ғxꫂ⁩
│❖ *ɪɴꜱᴛᴀɢʀᴀᴍ* : ` + Config.OA_NAME + `
│❖ *ᴡʜᴀᴛꜱᴀᴘᴘ* : ᴄᴏᴍɪɴɢ ꜱᴏᴏɴ...
╰────────────────❋ཻུ۪۪➹
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
               ` + Config.BOT + `
    
    🎀 ` + Config.ALL + ` 🎀
`}) 

}));
