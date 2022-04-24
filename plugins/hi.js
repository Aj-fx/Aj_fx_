const Kaztroser = require('../events');
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
var ɪɴsᴛᴀɢʀᴀᴍ ʟɪɴɢ,ɢɪᴛ ʟɪɴɢ
var split = ɢɪᴛ ʟɪɴɢ/ɪɴsᴛᴀɢʀᴀᴍ ʟɪɴɢ ('/');
         ɢɪᴛ ʟɪɴɢ = split[1];
         ɪɴsᴛᴀɢʀᴀᴍ ʟɪɴɢ = split[0];

let whb = Config.WORKTYPE == 'public' ? false : true

Kaztroser.addCommand({pattern: 'ive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit Ajfx
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: ɪɴsᴛᴀɢʀᴀᴍ ʟɪɴɢ }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: ɢɪᴛ ʟɪɴɢ }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '```'+Config.BOT+'\n\n```'\n',
          footerText: ' ©',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
