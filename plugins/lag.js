const Kaztroser = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config');
const {FancyRandom,skbuffer} = require('raganork-bot');
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })
const image = require('../buffer');
var img = image.skbuffer(Config.LOGOSK)
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
var split = Config.KAZTRO_SER.split('/');
         sk2 = split[1];
         sk1 = split[0];
 var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
var wish = ''
if (hrs >= 00 && hrs <= 12) wish = '𝗚𝗢𝗢𝗗 𝗠𝗢𝗥𝗡𝗜𝗡𝗚⛅'
if (hrs >= 12 && hrs <= 15) wish = '𝗚𝗢𝗢𝗗 𝗔𝗙𝗧𝗘𝗥𝗡𝗢𝗢𝗡🌞'
if (hrs >= 15 && hrs <= 18) wish = '𝗚𝗢𝗢𝗗 𝗘𝗩𝗘𝗡𝗜𝗡𝗚🌥'
if (hrs >= 18 && hrs <= 23) wish = '𝗚𝗢𝗢𝗗 𝗡𝗜𝗚𝗛𝗧🌙'


let whb = Config.WORKTYPE == 'public' ? false : true

Kaztroser.addCommand({pattern: 'lag', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
var img = await skbuffer(Config.LOGOSK)
// send a buttons message!credit Ajfx
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: sk1 }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: sk2 }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '\n ' + wish + '\n💠ᴛɪᴍᴇ : ' + plk_say + '\n💠ᴅᴀᴛᴇ : ' + plk_here + '\n💠ʙᴏᴛ ɴᴀᴍᴇ : '+Config.BOT+'\n\n'+Config.ALIVEMSG+'\n',
          footerText: 'ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 123,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});

}));
