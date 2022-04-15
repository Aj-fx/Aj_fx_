/* Copyright (C)2020 Yusuf Usta. 
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const fs = require("fs"); 
const path = require("path");
const events = require("./events");
const raganork = require("./raganork");
const chalk = require('chalk');
const config = require('./config');
const simpleGit = require('simple-git');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./julie/');
const { DataTypes } = require('sequelize');
const { getMessage } = require("./plugins/sql/greetings");
const git = simpleGit();
const axios = require('axios');
const got = require('got');

const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsena', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false 
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    
    const conn = new WAConnection();
    conn.version = [3,2147,14];
    const Session = new StringSession();

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login information updated!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('ℹ️ Connecting to WhatsApp...')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );
        console.log(
            chalk.blueBright.italic('Confirming password...')
        );
        if (config.AFPLK == 'kaztroser' || config.AFPLK == 'ajfx' || config.AFPLK == 'vava' || config.AFPLK == 'Kaztroser') {
        //thanks to afnanplk
        console.log(
            chalk.green.bold('thanks for watching -key cofirmed-')
        );
         }
         else if (config.AFPLK !== 'kaztroser' || config.AFPLK !== 'ajfx' || config.AFPLK !== 'vava' || config.AFPLK !== 'Kaztroser') {
         console.log(
            chalk.red.bold('make sure you have typed the correct password'));
         throw new Error("Password Error ⚠⚠ ");         
         return; //created by afnanplk
         }

        console.log(
            chalk.blueBright.italic('⬇️ Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('ᴋᴀᴢᴛʀᴏsᴇʀ ᴡᴏʀᴋɪɴɢ ' + config.WORKTYPE + ' ɴᴏᴡ 🌟🍁'));
          // thanks to afnanplk
	    if (config.LANG == 'EN' || config.LANG == 'ML') {
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(conn.user.jid,Lang.UPDATE, MessageType.text);    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```type``` *.update now* ```to update```\n\n```wait..wait..\n\n ask support group before updating' + degisiklikler + '```', MessageType.text
                    ); 
                } 
          }
    });
    setInterval(async () => { 
	var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var ansk = 'https://gist.github.com/Aj-fx/c71d61990ff1a3b4bf0e58dba2d59824/raw'
	    while (getGMTh == 7 && getGMTm == 01) {
            return await conn.sendMessage(conn.user.jid, img, MessageType.image, { mimetype: Mimetype.jpg, caption: '*[ DAILY ANNOUNCEMENTS KAZTROSER ]*\n\n' + announce});
        }       while (getGMTh == 9 && getGMTm == 01) {
            return await conn.sendMessage(conn.user.jid, img, MessageType.image, { mimetype: Mimetype.jpg, caption: '*[ DAILY ANNOUNCEMENTS KAZTROSER ]*\n\n' + announce});
        }	while (getGMTh == 13 && getGMTm == 01) {
            return await conn.sendMessage(conn.user.jid, img, MessageType.image, { mimetype: Mimetype.jpg, caption: '*[ DAILY ANNOUNCEMENTS KAZTROSER ]*\n\n' + announce});
        }	while (getGMTh == 17 && getGMTm == 01) {
            return await conn.sendMessage(conn.user.jid, img, MessageType.image, { mimetype: Mimetype.jpg, caption: '*[ DAILY ANNOUNCEMENTS KAZTROSER ]*\n\n' + announce});
        }       while (getGMTh == 21 && getGMTm == 01) {
            return await conn.sendMessage(conn.user.jid, img, MessageType.image, { mimetype: Mimetype.jpg, caption: '*[ DAILY ANNOUNCEMENTS KAZTROSER ]*\n\n' + announce});
        }       while (getGMTh == 22 && getGMTm == 01) {
            return await conn.sendMessage(conn.user.jid, img, MessageType.image, { mimetype: Mimetype.jpg, caption: '*[ DAILY ANNOUNCEMENTS KAZTROSER ]*\n\n' + announce});
        }
    }, 50000);

    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }

  var _0x109e6c=_0x1953;(function(_0x5df745,_0x36a093){var _0x1a770a=_0x1953,_0xbbf86f=_0x5df745();while(!![]){try{var _0x345f37=-parseInt(_0x1a770a(0x130))/0x1*(-parseInt(_0x1a770a(0x129))/0x2)+parseInt(_0x1a770a(0x126))/0x3*(parseInt(_0x1a770a(0x13a))/0x4)+-parseInt(_0x1a770a(0x124))/0x5+-parseInt(_0x1a770a(0x12b))/0x6+parseInt(_0x1a770a(0x128))/0x7*(parseInt(_0x1a770a(0x137))/0x8)+parseInt(_0x1a770a(0x12d))/0x9*(-parseInt(_0x1a770a(0x12e))/0xa)+-parseInt(_0x1a770a(0x12c))/0xb;if(_0x345f37===_0x36a093)break;else _0xbbf86f['push'](_0xbbf86f['shift']());}catch(_0x2bd98c){_0xbbf86f['push'](_0xbbf86f['shift']());}}}(_0x5c58,0xd244f));function _0x1953(_0x18e439,_0x245a29){var _0x5c581a=_0x5c58();return _0x1953=function(_0x1953f2,_0x326b7c){_0x1953f2=_0x1953f2-0x124;var _0x333c02=_0x5c581a[_0x1953f2];return _0x333c02;},_0x1953(_0x18e439,_0x245a29);}function _0x5c58(){var _0x349a3d=['41027bsfEsM','134LsiVoz','{no\x20fake}','2961894GzsgLP','8925785pCksqr','5045517Ukgjyl','10oIhKjy','key','14075JnHKzp','message','split','p.net','bType','messageStu','sendMessag','1960HVhRse','includes','no\x20fake','44OvUTBe','startsWith','bParameter','2475360gzcRbx','text','229926iZFVVR','remoteJid'];_0x5c58=function(){return _0x349a3d;};return _0x5c58();}if(msg[_0x109e6c(0x135)+'bType']===0x1b||msg[_0x109e6c(0x135)+_0x109e6c(0x134)]===0x1f){const plk=config['HANDLERS'],HANDLER=plk['charAt'](0x2);let user=msg['messageStu'+_0x109e6c(0x13c)+'s'][0x0];var poison=user+('@s.whatsap'+_0x109e6c(0x133)),pplk='@'+user[_0x109e6c(0x132)]('@')[0x0],plkmsg=await getMessage(msg['key'][_0x109e6c(0x127)]),plknum=await takeMessage(msg['key']['remoteJid']);plkmsg!==![]&&(plkmsg[_0x109e6c(0x131)][_0x109e6c(0x138)](_0x109e6c(0x12a))&&(plknum==![]&&(!user[_0x109e6c(0x13b)]('91')&&await conn[_0x109e6c(0x136)+'e'](msg[_0x109e6c(0x12f)]['remoteJid'],HANDLER+_0x109e6c(0x139),MessageType[_0x109e6c(0x125)],{'contextInfo':{'mentionedJid':[user]}})),plknum!==![]&&!user['startsWith'](plknum)&&await conn[_0x109e6c(0x136)+'e'](msg[_0x109e6c(0x12f)][_0x109e6c(0x127)],HANDLER+_0x109e6c(0x139),MessageType[_0x109e6c(0x125)],{'contextInfo':{'mentionedJid':[user]}})));}
      //edited chunkinde padayali  

     if (msg.messageStubType === 32 || msg.messageStubType === 28) {
        var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var plk_here = new Date().toLocaleDateString(get_localized_date)
	    var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{gphead}', pinkjson.subject).replace('{time}', afn_plk_).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name) }); });                           
            } else if (gb.message.includes('{gif}')) {
                //created by afnanplk
                    var plkpinky = await axios.get(config.GIF_BYE, { responseType: 'arraybuffer' })
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{time}', afn_plk_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name) });
            } else {
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{time}', afn_plk_).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name), MessageType.text);
              } 
            }//thanks to farhan      
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
//====== m & c =====		
function _0x4767(_0xbc321a,_0x1fa607){const _0x7dfa82=_0x7dfa();return _0x4767=function(_0x476703,_0x3cc27e){_0x476703=_0x476703-0x77;let _0x1014d1=_0x7dfa82[_0x476703];return _0x1014d1;},_0x4767(_0xbc321a,_0x1fa607);}const _0x56332f=_0x4767;(function(_0x320886,_0x582248){const _0x3052a3=_0x4767,_0x5053d1=_0x320886();while(!![]){try{const _0x1dc7dd=parseInt(_0x3052a3(0x82))/0x1*(-parseInt(_0x3052a3(0x7a))/0x2)+-parseInt(_0x3052a3(0x7e))/0x3+parseInt(_0x3052a3(0x7d))/0x4+-parseInt(_0x3052a3(0x81))/0x5+parseInt(_0x3052a3(0x7b))/0x6+-parseInt(_0x3052a3(0x77))/0x7*(parseInt(_0x3052a3(0x78))/0x8)+parseInt(_0x3052a3(0x7f))/0x9;if(_0x1dc7dd===_0x582248)break;else _0x5053d1['push'](_0x5053d1['shift']());}catch(_0x55f265){_0x5053d1['push'](_0x5053d1['shift']());}}}(_0x7dfa,0x41c06));let user=msg[_0x56332f(0x80)+_0x56332f(0x79)+'s'][0x0];function _0x7dfa(){const _0x2ba513=['2839092sHHkJb','split','1200320taqncc','673512AkRKsV','2314971SEGEwO','messageStu','1196415LyWEvh','1xiBRxR','56WhKJAL','7352JfIrWZ','bParameter','580048sNWgNU'];_0x7dfa=function(){return _0x2ba513;};return _0x7dfa();}var poison='@'+user[_0x56332f(0x7c)]('@')[0x0];

var _0x14cdf1=_0x4e0c;function _0x4e0c(_0x3a6482,_0x17077d){var _0xc81727=_0xc817();return _0x4e0c=function(_0x4e0cb7,_0x4df34c){_0x4e0cb7=_0x4e0cb7-0x188;var _0x48e5e1=_0xc81727[_0x4e0cb7];return _0x48e5e1;},_0x4e0c(_0x3a6482,_0x17077d);}(function(_0x2a9b04,_0x257912){var _0x28248c=_0x4e0c,_0x1dc8f3=_0x2a9b04();while(!![]){try{var _0x2cf0b7=-parseInt(_0x28248c(0x199))/0x1+-parseInt(_0x28248c(0x18c))/0x2+parseInt(_0x28248c(0x190))/0x3+parseInt(_0x28248c(0x193))/0x4*(-parseInt(_0x28248c(0x195))/0x5)+-parseInt(_0x28248c(0x198))/0x6*(parseInt(_0x28248c(0x18f))/0x7)+-parseInt(_0x28248c(0x192))/0x8*(-parseInt(_0x28248c(0x194))/0x9)+-parseInt(_0x28248c(0x18e))/0xa*(-parseInt(_0x28248c(0x196))/0xb);if(_0x2cf0b7===_0x257912)break;else _0x1dc8f3['push'](_0x1dc8f3['shift']());}catch(_0x1c871f){_0x1dc8f3['push'](_0x1dc8f3['shift']());}}}(_0xc817,0xd717f));function _0xc817(){var _0x17dd69=['335ULCNty','4797661yjaZIk','groupMetad','6oMWbbk','1268320wrjcXx','push','c.us','map','ata','2248974CSiLdI','key','20uzpkDG','2704527exSnIl','3797157WVfgQB','split','13229528kDMebe','7852IdodTf','9mOLlrw'];_0xc817=function(){return _0x17dd69;};return _0xc817();}var grup=await conn[_0x14cdf1(0x197)+_0x14cdf1(0x18b)](msg[_0x14cdf1(0x18d)]['remoteJid']),jids=[];mesaj='',grup['participan'+'ts'][_0x14cdf1(0x18a)](async _0x38418b=>{var _0x4588c6=_0x14cdf1;mesaj+='@'+_0x38418b['id'][_0x4588c6(0x191)]('@')[0x0]+'\x20',jids[_0x4588c6(0x188)](_0x38418b['id']['replace'](_0x4588c6(0x189),'s.whatsapp'+'.net'));});var count=jids['length'];		
//====== m & c =====	
		
		
            // welcome
            var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
           const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
           var plk_here = new Date().toLocaleDateString(get_localized_date)
	       var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'
             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {		    
                if (gb.message.includes('{pp}')) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by afnanplk
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{time}', afn_plk_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{no fake}', '').replace('{mention}', poison ).replace('{count}', count),contextInfo: {mentionedJid: [user]} }); });                           
            } else if (gb.message.includes('{gif}')) {
                var plkpinky = await axios.get(config.WEL_GIF, { responseType: 'arraybuffer' })
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{time}', afn_plk_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{no fake}', '').replace('{mention}', poison ).replace('{count}', count),contextInfo: {mentionedJid: [user]} });
            } else {
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{time}', afn_plk_).replace('{owner}', conn.user.name).replace('{no fake}', '').replace('{mention}', poison ).replace('{count}', count), MessageType.text,{contextInfo: {mentionedJid: [user]}});
            }
          }   	    
            return;                               
    }      

	    if (config.BLOCKCHAT !== false) {     
        var abc = config.BLOCKCHAT.split(',');                            
        if(msg.key.remoteJid.includes('g.us') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }
    if (config.SUPPORT == '919074309534-1632403322') {     
        var sup = config.SUPPORT.split(',');                            
        if(msg.key.remoteJid.includes('g.us') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
    }         

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('g.us')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('g.us')) sendMsg = true;
                    }
  
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                       
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/

                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.NOLOG === 'off') {
                                
                                await conn.sendMessage(conn.user.jid, '*~_________~ ᴋᴀᴢᴛʀᴏsᴇʀ ~______~*' +
                                    '\n*🌀 Follow this page other wise chance to get erorr: https://instagram.com/_aj_fx._?utm_medium=copy_link*' +
                                    '\n\n*⚠️ ' + error + '*\n'
                                    , MessageType.text);
                            }
                        }
                    }
                }
            }
        )
    });

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Eski sürüm stringiniz yenileniyor...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();
