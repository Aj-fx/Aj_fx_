const {
    Module
} = require('../main');
const {
    Mimetype
} = require('@adiwajshing/baileys');
const fs = require('fs');
const got = require("got");
const axios = require('axios');
const setting = require('../config');
const {
    getPost,
    getStalk,
    getStory,
    getBuffer
} = require('abu-bot');
const {
    downloadGram,
    pin,
    story,
    tiktok,
    fb
} = require('./lib/utils');
const Config = require('../config');
const s = require('../config');
var need = "*_Need instagram link!_*";
var downloading = "_*Downloading*_";
var need_acc = "*_Need an instagram username!_*";
var fail = "*_Download failed! Check your link and try again_*";
var need_acc_s = "_Need an instagram username or link!_";
let jsl = setting.MODE == 'public' ? false : true
Module({
    pattern: 'insta ?(.*)',
    fromMe: jsl,
    desc: 'Instagram post downloader',
    usage: 'insta link or reply to a link',
    use: 'download'
}, (async (msg, query) => {
     var q = !msg.reply_message.message ? query[1] : msg.reply_message.message
     if (q && (q.startsWith('l') || q.includes('youtu'))) return;
    if (!q) return await msg.sendReply("*Need instagram link*")
    if (q.includes("stories")) return await msg.sendReply("*Use .story command!*")
    if (q && !q.includes('instagram.com')) return await msg.client.sendMessage(msg.jid, {
        text: need
    }, {
        quoted: msg.data
    })
    var getid = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|reel|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/
    var url = getid.exec(q)
    if (url != null) {
        var res = await downloadGram(url[0])
        if (res == false) return await msg.sendReply("*Download failed*");
        var quoted = msg.reply_message ? msg.quoted : msg.data
        for (var i in res) {
        await msg.client.sendMessage(msg.jid,{[res[i].includes("jpg")?'image':'video']:{url:res[i]}},{quoted})
        };
    }
}));
Module({
    pattern: 'fb ?(.*)',
    fromMe: jsl,
    desc: 'Facebook video downloader',
    usage: 'fb link or reply to a link',
    use: 'download'
}, (async (msg, query) => {
     var q = !msg.reply_message.message ? query[1] : msg.reply_message.message
     if (/\bhttps?:\/\/\S+/gi.test(q)) q = q.match(/\bhttps?:\/\/\S+/gi)[0]
     if (!q) return await msg.sendReply("*Need fb link*")
     var res = await fb(q);
     var video = await getBuffer(res.link_high);
     await msg.sendVideoTemplate(video,"*Facebook Downloader*","Click here to download HD video",
     [{urlButton: {displayText: 'HD Video',url: res.link_normal}}])
        }));
Module({
    pattern: 'ig ?(.*)',
    fromMe: jsl,
    desc: 'Gets account info from instagram',
    usage: 'ig username',
    use: 'search'
}, (async (msg, query) => {
    if (query[1] === 'dl') return; 
    if (query[1] === '') return await msg.client.sendMessage(msg.jid, {
        text: need_acc
    }, {
        quoted: msg.data
    })
    var res = await getStalk(query[1])
    if (res === "false") return await msg.client.sendMessage(msg.jid, {
        text: "*_Username invalid!_*"
    }, {
        quoted: msg.data
    })
    var buffer = await getBuffer(res.hd_profile_pic_url_info.url)
    await msg.client.sendMessage(msg.jid, {
        image: buffer,
        caption: '_*Name:*_ ' + `${res.fullname}` + '\n _*Bio:*_ ' + `${res.biography}` + '\n _*Private account:*_ ' + `${res.is_private} ` + '\n _*Followers:*_ ' + `${res.followers}` + '\n _*Following:*_ ' + `${res.following}` + '\n _*Posts:*_ ' + `${res.post_count}` + '\n _*Verified:*_ ' + `${res.is_verified} ` + '\n _*IGTV videos:*_ ' + `${res.total_igtv_videos}`
    }, {
        quoted: msg.data
    });
}));
Module({
    pattern: 'story ?(.*)',
    fromMe: jsl,
    desc: 'Instagram stories downloader',
    usage: '.story username or link',
    use: 'download'
}, (async (msg, query) => {
    var user = query[1] !== '' ? query[1] : msg.reply_message.text;
    if (user && user.includes("/reel/") || user.includes("/tv/") || user.includes("/p/")) return;
    if (!user) return await msg.sendReply(need_acc_s);
    if (/\bhttps?:\/\/\S+/gi.test(user)) user = user.match(/\bhttps?:\/\/\S+/gi)[0]
    var unam = user.startsWith('https') ? user.split('/')[4] : user
    try { var res = await story(user) } catch {return await msg.sendReply("*Sorry, server error*")}
    var StoryData = []
  
    for (var i in res){
    StoryData.push({
      title: "Story "+Math.floor(parseInt(i)+1),
      description: "Type: "+res[i].type,
      rowId: "igs "+msg.myjid+" "+user+" "+i
  })
  }
  const sections = [{
      title: "Click and send to download.",
      rows: StoryData
  }];
  const listMessage = {
      text: "_Account:_ "+unam,
      footer: "_Total stories: " + res.length+"_",
      title: "_Download your stories_",
      buttonText: "View all",
      sections
  }
  await msg.client.sendMessage(msg.jid, listMessage)
}));
Module({
    pattern: 'pin ?(.*)',
    fromMe: jsl,
    desc: 'Pinterest downloader',
    usage: '.pin reply or link',
    use: 'download'
}, (async (msg, query) => {
    var user = query[1] !== '' ? query[1] : msg.reply_message.text;
    if (user === 'g') return;
    if (!user) return await msg.sendReply("*Need url*");
    if (/\bhttps?:\/\/\S+/gi.test(user)) user = user.match(/\bhttps?:\/\/\S+/gi)[0]
    try { var res = await pin(user) } catch {return await msg.sendReply("*Server error*")}
    await msg.sendMessage('_Downloading ' + res.data.length + ' medias_');
    var quoted = msg.reply_message ? msg.quoted : msg.data
    for (var i of res.data){
        var type = i.url.includes("mp4") ? "video" : "image"
        await msg.client.sendMessage(msg.jid,{[type]:{url:i.url }},{quoted})
    }
}));
Module({
    pattern: 'tiktok ?(.*)',
    fromMe: jsl,
    desc: 'tiktok downloader',
    usage: '.tiktok reply or link',
    use: 'download'
}, (async (msg, query) => {
    var link = query[1] !== '' ? query[1] : msg.reply_message.text;
    if (!link) return await msg.sendReply("*Need a tiktok url*");
    link = link.match(/\bhttps?:\/\/\S+/gi)[0]
    try { var res = await tiktok(link) } catch {return await msg.sendReply("*Server error*")}
    var buttons = [{
        quickReplyButton: {
            displayText: 'No WM',
            id: 'tktk nowm '+msg.myjid+' '+res.nowm
        }
    }, {
        quickReplyButton: {
            displayText: 'With WM',
            id: 'tktk wm '+msg.myjid+' '+res.wm
        }  
    }]
    await msg.sendImageTemplate(await getBuffer("https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2018/10/tiktok.jpeg"),"*TikTok video downloader*","Choose your format:",buttons);
    }));
    Module({
        on: 'button',
        fromMe: jsl
    }, (async (msg) => {
        if (msg.list && msg.list.startsWith("igs") && msg.list.split(" ").includes(msg.myjid)){
            var username = msg.list.split(" ")[2];
            var count = parseInt(msg.list.split(" ")[3]);
            try { var res = await story(username) } catch {return await msg.sendReply("*Sorry, server error*")}
            return await msg.sendReply({url: res[count].url},res[count].type)
        }
        if (msg.button && msg.button.startsWith("tktk") && msg.button.includes(msg.myjid)){
        if (msg.button.includes("nowm")){
        return await msg.sendReply({url: msg.button.split(" ")[3]},'video')
        }
           if (msg.button.split(" ")[1] === "wm"){
                return await msg.sendReply({url: msg.button.split(" ")[3]},'video')
                }
                if (msg.button.includes("aud")){
                    return await msg.sendReply({url: msg.button.split(" ")[3]},'audio')
                    }     
        }
        }));
    
