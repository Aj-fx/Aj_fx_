const New = require('../events');
const Config = require('../config');
const image = require('../buffer');
const {MessageType} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('asena');
let sourav = Config.WORKTYPE == 'public' ? false : true

New.addCommand({pattern: 'hi ?(.*)', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {
        var img = await image.skbuffer(Config.LOGOSK)
        var CMD_HELP = '';
        if (match[1] === '') {
            New.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.desc + '``` \n' + '* ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.desc + '``` \n' + '* ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.usage + '```\n' + '* ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.desc + '``` \n' + '* ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '* ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid, Config.BOT + '\n\n  \n' + CMD_HELP, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 777, status: 200, thumbnail: fs.readFileSync('./photo/Kaztroser.jpg'), surface: 200, message: Config.BOT, orderTitle: Config.BOT, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Kaztroser.jpg')}}}});
        } 
        else {
            var CMD_HELP = '';
            New.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.desc + '``` \n' + '* ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.desc + '``` \n' + '* ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.usage + '```\n' + '* ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += ' ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + ' ' + ' ```' + command.desc + '``` \n' + '* ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '* ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, Config.BOT + '\n\n  \n' + CMD_HELP, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 777, status: 200, thumbnail: fs.readFileSync('./photo/Kaztroser.jpg'), surface: 200, message: Config.BOT, orderTitle: Config.BOT, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/Kaztroser.jpg')}}}});
        
        }
    }));
