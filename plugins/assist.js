const Abu = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const {skbuffer} = require('raganork-bot');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


let whb = Config.WORKTYPE == 'public' ? false : true

Abu.addCommand({pattern: 'assist', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
var img = await skbuffer(Config.LOGOSK)
// send a buttons message!credit Abu
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: '𝐎𝐖𝐍𝐄𝐑' }, type: 1},
      ]
      
      const buttonMessage = {
          contentText: '*𝐆𝐢𝐭 𝐋𝐢𝐧𝐤 : github.com/Aj-fx/Kaztro_ser*',
          footerText:  '©'+Config.BOT+' ™',
          buttons: buttons,
          headerType: 1
      }
      
await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 990,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});

}));
