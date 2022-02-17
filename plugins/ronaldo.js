/*Copyright (C) 2021 Aj fx.                        
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Kaztroser */


const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'ronaldo', fromMe: true, desc: 'random ronaldo images'}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.imgur.com/vz2GUX8.jpeg";

r_text[1] = "https://i.imgur.com/qGqq8ga.jpeg";

r_text[2] = "https://i.imgur.com/SjkBsAo.jpeg";

r_text[3] = "https://i.imgur.com/8Wnk6LZ.jpeg";

r_text[4] = "https://i.imgur.com/zA5KxkJ.jpeg";

r_text[5] = "https://i.imgur.com/baXw6ln.jpeg";

r_text[6] = "https://i.imgur.com/rJ8UFuo.jpeg";

r_text[7] = "https://i.imgur.com/YRXbS3F.jpeg";

r_text[8] = "https://i.imgur.com/tZBfzA0.jpeg";

r_text[9] = "https://i.imgur.com/hcWYhxk.jpeg";

r_text[10] = "https://i.imgur.com/0TjOb8d.jpeg";

r_text[11] = "https://i.imgur.com/THd2aIF.jpeg";

r_text[12] = "https://i.imgur.com/ricd4Os.jpeg";

r_text[13] = "https://i.imgur.com/9fHdWa4.jpeg";

r_text[14] = "https://i.imgur.com/9fHdWa4.jpeg";

r_text[15] = "https://i.imgur.com/lVIEn8E.jpeg";


var i = Math.floor(15*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.SED})

    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'ronaldo', fromMe: false, desc:'random ronaldo images '}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.imgur.com/CMiV017.jpeg";

r_text[1] = "https://i.imgur.com/dbJKo6u.jpeg";

r_text[2] = "https://i.imgur.com/tV4Pr9S.jpeg";

r_text[3] = "https://i.imgur.com/Uc847yC.jpeg";

r_text[4] = "https://i.imgur.com/5gaSvpj.jpeg";

r_text[5] = "https://i.imgur.com/KdrZqcK.jpeg";

r_text[6] = "https://i.imgur.com/IAoKASV.jpeg";

r_text[7] = "https://i.imgur.com/2okCwwc.jpeg";

r_text[8] = "https://i.imgur.com/8Gi8RF1.jpeg";

r_text[9] = "https://i.imgur.com/XSnQ8RS.jpeg";

r_text[10] = "https://i.imgur.com/W71v6cw.jpeg";

r_text[11] = "https://i.imgur.com/MSUD9xd.jpeg";

r_text[12] = "https://i.imgur.com/U05Ablx.jpeg";

r_text[13] = "https://i.imgur.com/LXkVL7S.jpeg";

r_text[14] = "https://i.imgur.com/Zo8ONX9.jpeg";

r_text[15] = "https://i.imgur.com/0srhTFH.jpeg";


    var i = Math.floor(15*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.SED})

    }));

}

// thanks to :- Ajayan
