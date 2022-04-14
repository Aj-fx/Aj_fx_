/*Codded by @phaticusthiccy
recodded by afnan plk
kaztroser 

*/

const Kaztroser  = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const cheerio = require('cheerio')
const FormData = require('form-data')
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('conventer');

function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData()
        bodyForm.append('new-image-url', '')
        bodyForm.append('new-image', fs.createReadStream(path))
        await Axios({
            method: 'post',
            url: 'https://s6.ezgif.com/webp-to-mp4',
            data: bodyForm,
            headers: {
                'Content-Type': `multipart/form-data boundary=${bodyForm._boundary}`
            }
        }).then(async ({ data }) => {
            const bodyFormThen = new FormData()
            const $ = cheerio.load(data)
            const file = $('input[name="file"]').attr('value')
            const token = $('input[name="token"]').attr('value')
            const convert = $('input[name="file"]').attr('value')
            const gotdata = {
                file: file,
                token: token,
                convert: convert
            }
            bodyFormThen.append('file', gotdata.file)
            bodyFormThen.append('token', gotdata.token)
            bodyFormThen.append('convert', gotdata.convert)
            await Axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data boundary=${bodyFormThen._boundary}`
                }
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                resolve({
                    status: true,
                    message: "Made by WhatsAsena",
                    result: result
                })
            }).catch(reject)
        }).catch(reject)
    })
}

if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {
if (Config.WORKTYPE == 'private') {

    Kaztroser .addCommand({pattern: 'mp3$', fromMe: true, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.MP4TOAUDİO,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Kaztroser .addCommand({pattern: 'photo$', fromMe: true, desc: Lang.STİCKER_DESC}, (async (message, match) => {   
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.STİCKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.STİCKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    
    Kaztroser .addCommand({pattern: 'take', fromMe: true, desc: 'download whatsapp status (only video for image mp4screenshot vro)'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,'```reply to a status video```', MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,'bro am taking your status..hehe😎😎',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); //created by afnanplk

        if (message.reply_message.video === true && message.reply_message.video) {
            ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video);
            });
        return 
        }

        ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video);
            });
        return 
    }));
    
    Kaztroser .addCommand({pattern: 'mp4$', desc: Lang.ANİM_STİCK, fromMe: true}, (async (message, match) => {
        const mid = message.jid
        if (message.reply_message === false) return await message.sendMessage(Lang.STİCKER_NEEDREPLY);
        await message.client.sendMessage(mid, Lang.ANİMATE, MessageType.text)
        const savedFilename = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await webp2mp4File(savedFilename).then(async (rest) => {
            await Axios({ method: "GET", url: rest.result, responseType: "stream"}).then(({ data }) => {
                const saving = data.pipe(fs.createWriteStream('/root/WhatsAsenaDuplicated/stweb.mp4'))
                saving.on("finish", async () => {
                    await message.client.sendMessage(mid, fs.readFileSync('/root/WhatsAsenaDuplicated/stweb.mp4'), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by kaztroser ', quoted: message.data })
                    if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                    if (fs.existsSync('/root/WhatsAsenaDuplicated/stweb.mp4')) fs.unlinkSync('/root/WhatsAsenaDuplicated/stweb.mp4')
                })
            })
        })
    }));
}
else if (Config.WORKTYPE == 'public') {

    Kaztroser .addCommand({pattern: 'mp3$', fromMe: false, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.MP4TOAUDİO,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)    
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Kaztroser .addCommand({pattern: 'photo$', fromMe: false, desc: Lang.STİCKER_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.STİCKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.STİCKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    
      Kaztroser .addCommand({pattern: 'take', fromMe: true, desc: 'download whatsapp status (only video for image mp4screenshot vro)'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,'```reply to a status video```', MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,'bro am taking your status..hehe😎😎',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); //created by afnanplk

        if (message.reply_message.video === true && message.reply_message.video) {
            ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video);
            });
        return 
        }

        ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video);
            });
        return 
    }));
    
   Kaztroser .addCommand({pattern: 'mp4$', desc: Lang.ANİM_STİCK, fromMe: false}, (async (message, match) => {
        const mid = message.jid
        if (message.reply_message === false) return await message.sendMessage(Lang.STİCKER_NEEDREPLY);
        await message.client.sendMessage(mid, Lang.ANİMATE, MessageType.text)
        const savedFilename = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await webp2mp4File(savedFilename).then(async (rest) => {
            await Axios({ method: "GET", url: rest.result, responseType: "stream"}).then(({ data }) => {
                const saving = data.pipe(fs.createWriteStream('/root/WhatsAsenaDuplicated/stweb.mp4'))
                saving.on("finish", async () => {
                    await message.client.sendMessage(mid, fs.readFileSync('/root/WhatsAsenaDuplicated/stweb.mp4'), MessageType.video, { mimetype: Mimetype.mp4, caption: 'inna nanba', quoted: message.data })
                    if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                    if (fs.existsSync('/root/WhatsAsenaDuplicated/stweb.mp4')) fs.unlinkSync('/root/WhatsAsenaDuplicated/stweb.mp4')
                })
            })
        })
    }));
    var doc_desc = ''
    var plk = ''
    var afn = ''
    var usge = ''
     if (Config.LANG == 'EN') {
        doc_desc = 'covert mp3 to document and rename to given name'
        plk = '```NAMING AND DOCIFYING```'
        afn = '```PLEASE REPLY TO A AUDIO```'
        usge = '.doc kaztroser  (replace kaztroser  with desired name)'
    }
    if (Config.LANG == 'ML') {
        doc_desc = 'ഡോക്യുമെന്റിലേക്ക് പരിവർത്തനം ചെയ്യുകയും നൽകിയപേര് ചേർക്കുകയും ചെയ്യുക'
        afn = '```ഒരു ഓഡിയോയ്ക്ക് മറുപടി നൽകുക```'
        plk = '```ഡോക്യുമെന്റിലേക്ക് പരിവർത്തനം ചെയ്യുകയും പേര് നൽകുകയും ചെയ്യുന്നു```'
        usge = '.doc kaztroser '
    }
    
     Kaztroser .addCommand({pattern: 'doc ?(.*)', fromMe: false, desc: doc_desc , usage : usge}, (async (message, match) => { 
      
        if (match[1] === '') return await message.client.sendMessage(message.jid,'give me a name',MessageType.text);  
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid,afn, MessageType.text);
        var downloading = await message.client.sendMessage(mid,plk,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)    
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.document, {filename: match[1] + '.mp3', mimetype: 'audio/mpeg', quoted: message.data});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

}
    
}
