/* Kaztroser Bot 
Re-edit Aj-fx
*/

const Amalser = require('../events');  
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
var sk1,sk2
var split = Config.AJ_FX.split('/');
         sk2 = split[1];
         sk1 = split[0];

let whb = Config.WORKTYPE == 'public' ? false : true

Amalser.addCommand({pattern: 'ajayan', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit Ajayan
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: sk1 }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: sk2 }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '```'+Config.BOT+'\n\n```'+Config.GITMSG+'\n',
          footerText: 'ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
