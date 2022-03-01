const Kaztroser = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const image = require('buffer');
const Config = require('../config');
let sourav = Config.WORKTYPE == 'public' ? false : true
Kaztroser.addCommand({pattern: 'bts ?(.*)', fromMe: sourav, desc: 'Sends random BTS wallpaper' , dontAddCommandList: true }, async (message, match) => {
await message.client.sendMessage(message.jid, await image.query.skbuffer('https://rgnk.herokuapp.com/api/random/bts?apikey=5EzAGZL08X'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})});
Kaztroser.addCommand({pattern: 'bpink ?(.*)', fromMe: sourav, desc: 'Sends random Blackpink wallpaper' , dontAddCommandList: true }, async (message, match) => {
await message.client.sendMessage(message.jid, await image.query.skbuffer('https://rgnk.herokuapp.com/api/random/blackpink?apikey=5EzAGZL08X'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})});
Kaztroser.addCommand({pattern: 'xxx ?(.*)', fromMe: sourav, desc: 'Sends random Xxxtentacion wallpaper' , dontAddCommandList: true }, async (message, match) => {
await message.client.sendMessage(message.jid, await image.query.skbuffer('https://rgnk.herokuapp.com/api/random/tentacion?apikey=5EzAGZL08X'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})})
Kaztroser.addCommand({pattern: 'wallpaper ?(.*)', fromMe: sourav, desc: 'Sends random Xxxtentacion wallpaper' , dontAddCommandList: true }, async (message, match) => {
await message.client.sendMessage(message.jid, await image.query.skbuffer('https://rgnk.herokuapp.com/api/random/wallpaper?apikey=5EzAGZL08X'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})})
