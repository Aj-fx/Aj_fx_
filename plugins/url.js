const e = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const w = require('../config');
const v = w.SUPPORT2
const {upload} = require('abu-bot');
e.addCommand({pattern: 'url ?(.*)', fromMe: a, desc:'Uploads image to imgur.com'}, (async (m, match) => { 
if (!m.reply_message.image && !m.reply_message.video ) return;
var q = await m.client.downloadAndSaveMediaMessage({key: {remoteJid: m.reply_message.jid,id: m.reply_message.id},message: m.reply_message.data.quotedMessage});
var res = await upload(q,v)
await m.client.sendMessage(m.jid, '_*File uploaded!*_ \n\n_File name:_ ' + res.id + '.jpeg \n_File URL:_ ' + res.link + '\n_File size:_ ' + res.size + ' bits' + '\n_Format:_ ' + res.type + '\n_Height:_ ' + res.height + '\n_Width:_ ' + res.width , MessageType.text, { quoted: m.data });}));
