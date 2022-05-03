const kaztro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

kaztro.addCommand({pattern: 'lk', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: ''𝐎𝐖𝐍𝐄𝐑"\n '}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: ''𝐆𝐈𝐓"\n '}, type: 1},
      ]
      
      const buttonMessage = {
          contentText: '      \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n      ☆ ~ɪᴛsᴍᴇ ᴋᴀᴢᴛʀᴏ~ ☆ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟ \n ┣⍟👾 *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : ᴋᴀᴢᴛʀᴏ \n ┣⍟👾 *ʙᴏᴛ* : ᴋᴀᴢᴛʀᴏ sᴇʀ \n ┣⍟👾 *ᴠᴇʀsɪᴏɴ* : 3.0 \n ┣⍟👾 *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ \n ┣⍟👾 *ᴘʀᴇғɪx* : [ . ] \n ┣⍟ \n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎\n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎ \n ┣⍟         ɪᴀᴍ ᴋᴀᴢᴛʀᴏ𖨆 \n ┣⍟ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟        ◩ *ᴍᴇɴᴜ* ◪ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟ \n ┣⍟ ✩[ *ᴍᴇᴅɪᴀ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .sᴏɴɢ \n ┣⍟𝕾⃝⚙️ .ᴠɪᴅᴇᴏ \n ┣⍟𝕾⃝⚙️ .ɪɴsᴛᴀ \n ┣⍟𝕾⃝⚙️ .ʏᴛ \n ┣⍟𝕾⃝⚙️ .ғɪɴᴅ \n ┣⍟𝕾⃝⚙️ .sɪɴɢ \n ┣⍟ \n ┣⍟ ✩[ *ᴄᴏɴᴠᴇʀᴛ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ɢɪғ \n ┣⍟𝕾⃝⚙️ .ᴍᴘ3 \n ┣⍟𝕾⃝⚙️ .ᴍᴘ4 \n ┣⍟𝕾⃝⚙️ .ᴜɴᴠᴏɪᴄᴇ \n ┣⍟𝕾⃝⚙️ .ᴛᴛs \n ┣⍟𝕾⃝⚙️ .ɪᴍɢ \n ┣⍟𝕾⃝⚙️ .sᴛɪᴄᴋᴇʀ \n ┣⍟𝕾⃝⚙️ .ᴀᴛᴛᴘ \n ┣⍟𝕾⃝⚙️ .ᴛᴛᴘ \n ┣⍟𝕾⃝⚙️ .ғᴀᴛᴘ \n ┣⍟𝕾⃝⚙️ .ᴄᴏᴅᴛᴛᴘ \n ┣⍟𝕾⃝⚙️ .ᴘʜᴏᴛᴏ \n ┣⍟𝕾⃝⚙️ .ɪᴍɢ \n ┣⍟𝕾⃝⚙️ .ᴊɪᴅ \n ┣⍟𝕾⃝⚙️ .ʙʀᴅᴍᴏʀᴇ \n ┣⍟𝕾⃝⚙️ .ʀᴅᴍᴏʀᴇ \n ┣⍟𝕾⃝⚙️ .ᴅᴇᴛᴇᴄᴛʟᴀɴɢ \n ┣⍟𝕾⃝⚙️ .ᴄᴜʀʀᴇɴᴄʏ \n ┣⍟𝕾⃝⚙️ .sᴡᴇᴀᴛʜᴇʀ \n ┣⍟𝕾⃝⚙️ .ᴡᴀᴍᴇ \n ┣⍟𝕾⃝⚙️ .ᴄᴀʟᴄ \n ┣⍟ \n ┣⍟ ✩[ *ᴍᴀᴋᴇʀ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .xᴍᴇᴅɪᴀ \n ┣⍟𝕾⃝⚙️ .ᴄᴀʀʙᴏɴ \n ┣⍟𝕾⃝⚙️ .ғғɪʀᴇ \n ┣⍟𝕾⃝⚙️ .ᴇᴍᴏ \n ┣⍟𝕾⃝⚙️ .ᴍᴏʀᴇᴛxᴛ \n ┣⍟𝕾⃝⚙️ .ᴍᴍᴘᴀᴄᴋ \n ┣⍟𝕾⃝⚙️ .ᴍᴀᴋᴇʀᴍᴇɴᴜ \n ┣⍟𝕾⃝⚙️ .ᴛxᴛɪᴛ \n ┣⍟𝕾⃝⚙️ .ʀᴀɴᴅᴏᴍ \n ┣⍟𝕾⃝⚙️ .ɢᴅᴍʀɴɢ \n ┣⍟𝕾⃝⚙️ .ɢᴅɴɪ8 \n ┣⍟ \n ┣⍟ ✩[ *ғᴜɴ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴀᴅᴀɴ \n ┣⍟𝕾⃝⚙️ .ᴊᴏᴋᴇ \n ┣⍟𝕾⃝⚙️ .ᴍᴏʟᴜ \n ┣⍟𝕾⃝⚙️ .ᴍᴇᴍᴇ \n ┣⍟𝕾⃝⚙️ .ǫʀ \n ┣⍟𝕾⃝⚙️ .ᴀɴɪᴍᴇsᴀʏ \n ┣⍟𝕾⃝⚙️ .ᴄʜᴀɴɢᴇsᴀʏ \n ┣⍟𝕾⃝⚙️ .ᴛʀᴜᴍᴘsᴀʏ \n ┣⍟𝕾⃝⚙️ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ \n ┣⍟ \n ┣⍟ ✩[ *sᴄʀᴇᴄʜ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴡɪᴋɪ \n ┣⍟𝕾⃝⚙️ .ɴᴇᴡs \n ┣⍟𝕾⃝⚙️ .ᴄᴏᴠɪᴅ \n ┣⍟𝕾⃝⚙️ .ʟʏʀɪᴄ \n ┣⍟𝕾⃝⚙️ .sʜᴏᴡ \n ┣⍟𝕾⃝⚙️ .ᴍᴏᴠɪᴇ \n ┣⍟𝕾⃝⚙️ .ᴡᴇᴀᴛʜᴇʀ \n ┣⍟𝕾⃝⚙️ .ᴅɪᴄᴛ \n ┣⍟𝕾⃝⚙️ .sʜᴏʀᴛ \n ┣⍟𝕾⃝⚙️ .sᴄᴀɴ \n ┣⍟ \n ┣⍟ ✩[ *ᴛᴀɢ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴛᴀɢᴀʟʟ \n ┣⍟𝕾⃝⚙️ .ᴛᴀɢᴀᴅᴍɪɴ \n ┣⍟ \n ┣⍟ ✩[ *ᴏᴛʜᴇʀ* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴀɴɪᴍᴇ \n ┣⍟𝕾⃝⚙️ .ᴡᴀʟʟᴘᴀᴘᴇʀ \n ┣⍟𝕾⃝⚙️ .ss \n ┣⍟𝕾⃝⚙️ .ᴛʀᴛ \n ┣⍟𝕾⃝⚙️ .ʀᴇᴍᴏᴠᴇʙɢ \n ┣⍟𝕾⃝⚙️ .ᴀᴘᴋᴍᴏᴅ \n ┣⍟𝕾⃝⚙️ .ʜᴍᴏᴅ \n ┣⍟𝕾⃝⚙️ .ɴᴏᴛᴇs \n ┣⍟𝕾⃝⚙️ .sᴀᴠᴇ \n ┣⍟𝕾⃝⚙️ .ᴅᴇʟᴇᴛᴇɴᴏᴛᴇs \n ┣⍟𝕾⃝⚙️ .ɪɴsᴜʟᴛ \n ┣⍟𝕾⃝⚙️ .ǫᴜᴏᴛᴇ \n ┣⍟𝕾⃝⚙️ .sʏsᴅ \n ┣⍟𝕾⃝⚙️ .ᴡᴇᴀᴛʜᴇʀ \n ┣⍟𝕾⃝⚙️ .sᴘᴇᴇᴅᴛᴇsᴛ \n ┣⍟ \n ┣⍟ ✩[ *ɢʀᴏᴜᴘ ᴄᴍɴᴅs* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴀᴅᴅ \n ┣⍟𝕾⃝⚙️ .ʙᴀɴ \n ┣⍟𝕾⃝⚙️ .ᴘʀᴏᴍᴏᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴅᴇᴍᴏᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴡᴇʟᴄᴏᴍᴇ \n ┣⍟𝕾⃝⚙️ .ɢᴏᴏᴅʙʏᴇ \n ┣⍟𝕾⃝⚙️ .ᴍᴜᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴜɴᴍᴜᴛᴇ \n ┣⍟𝕾⃝⚙️ .ʀᴇɴᴀᴍᴇ \n ┣⍟𝕾⃝⚙️ .ɪɴᴠɪᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴀɴᴛɪʟɪɴᴋ \n ┣⍟𝕾⃝⚙️ .ᴛʜᴇʀɪ [ɴᴏ-ʏᴇs] \n ┣⍟𝕾⃝⚙️ .ᴛᴇʀɪ [ᴄᴍɴᴅ,ᴄᴍɴᴅ] \n ┣⍟𝕾⃝⚙️ .ʀᴇᴘᴏʀᴛ \n ┣⍟𝕾⃝⚙️ .ʀᴇsᴇᴛ ᴡᴀʀɴ \n ┣⍟𝕾⃝⚙️ .ᴡʜᴏɪs \n ┣⍟ \n ┣⍟ ✩[ *ᴏᴡɴᴇʀ ᴄᴍɴᴅs* ]✩ \n ┣⍟ \n ┣⍟𝕾⃝⚙️ .ᴜᴘᴅᴀᴛᴇ \n ┣⍟𝕾⃝⚙️ .ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ \n ┣⍟𝕾⃝⚙️ .ғᴜʟʟᴇᴠᴀ \n ┣⍟𝕾⃝⚙️ .ᴀᴜᴛᴏʙɪᴏ \n ┣⍟𝕾⃝⚙️ .sᴇᴛᴠᴀʀ \n ┣⍟𝕾⃝⚙️ .ᴅᴇʟᴠᴀʀ \n ┣⍟𝕾⃝⚙️ .ᴀʟʟᴡᴀʀ \n ┣⍟𝕾⃝⚙️ .ʙɢᴍ [ᴏɴ-ᴏғғ] \n ┣⍟𝕾⃝⚙️ .sᴛɪᴄᴋᴇʀ [ᴏɴ-ᴏғғ] \n ┣⍟𝕾⃝⚙️ .sᴜᴅᴏ \n ┣⍟𝕾⃝⚙️ .ᴄᴀᴘᴛɪᴏɴ \n ┣⍟𝕾⃝⚙️ .ʜᴀɴᴅʟᴇʀs \n ┣⍟𝕾⃝⚙️ .ʙᴏᴛɴᴀᴍᴇ \n ┣⍟𝕾⃝⚙️ .ᴀ [ᴊɪᴅ] \n ┣⍟𝕾⃝⚙️ .ᴘɪɴɢ \n ┣⍟ \n ┣⍟ ✩[ *ᴍᴏʀᴇ ɪɴғᴏ* ]✩ \n ┣⍟ \n ┣⍟🎲 .ʟɪsᴛ \n ┣⍟🎲 .ᴏᴡɴᴇʀ \n ┣⍟🎲 .ɢɪᴛ \n ┣⍟🎲 .ᴀʟɪᴠᴇ \n ┣⍟ \n ┣⍟ ✩[ *ᴄʀᴇᴀᴛᴇʀ* ]✩ \n ┣⍟ \n ┣⍟😜 ᴋᴀᴢᴛʀᴏ sᴇʀ \n ┣⍟ \n ┣⍟    ❏ ᴋᴀᴢᴛʀᴏ ❏ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟      ◩ *ᴛʜᴀɴᴋ ʏᴏᴜ* ◪ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛\n',
          footerText: '© ᴋᴀᴢᴛʀᴏ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync('./photo/kaztro.jpg'), surface: 200, message: Config.BOT, orderTitle: Config.BOT, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/k.jpg')}}}});

}));
