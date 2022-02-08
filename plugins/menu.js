const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const invite = "it sends details of invite"
const group link = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'invite', fromMe: true, deleteCommand: true, desc: invite,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════🎀ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ🎀═════╗*\n           \n*⚜═ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ═⚜*\n\n*ɢʀᴏᴜᴘ ʟɪɴɢ -  https://chat.whatsapp.com/EdukdzFc6suJNCs62aJB3f*\n*            *\n*╚══════🎀ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ🎀═════╝*\n\n*▷Creator: ᴀͥᴊͭᴀᷤʏᴀͫɴͤ*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'group link', fromMe: true, deleteCommand: true, desc: group link,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Group link*\n           *\n💥═ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ ɢʀᴏᴜᴘ ʟɪɴɢ═💥*\n\n*💘 https://chat.whatsapp.com/EdukdzFc6suJNCs62aJB3f*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'invite', fromMe: false, deleteCommand: true, desc: invite,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════🎀ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ🎀═════╗*\n           \n*⚜═ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ═⚜*\n\n*ɢʀᴏᴜᴘ ʟɪɴɢ -  https://chat.whatsapp.com/EdukdzFc6suJNCs62aJB3f*\n*            *\n*╚══════🎀ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ🎀═════╝*\n\n*▷Creator: ᴀͥᴊͭᴀᷤʏᴀͫɴͤ*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'group link', fromMe: false, deleteCommand: true, desc: group link,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Group link*\n           *\n💥═ᴋⷪᴀᷫᴢᷫᴛᷝʀⷭᴏᷝsⷶᴇᷞʀ ɢʀᴏᴜᴘ ʟɪɴɢ ═💥*\n\n*💘 https://chat.whatsapp.com/EdukdzFc6suJNCs62aJB3f*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
