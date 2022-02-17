/*Copyright (C) 2021 Aj fx.                        
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Kaztroser */


const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'noorin', fromMe: true, desc: 'random noorin images'}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.imgur.com/ALf7jzE.jpeg";

r_text[1] = "https://i.imgur.com/NQF2MyB.jpeg";

r_text[2] = "https://i.imgur.com/dIxIWQd.jpeg";

r_text[3] = "https://i.imgur.com/dzvwwa3.jpeg";

r_text[4] = "https://i.imgur.com/VHzLQ0X.jpeg";

r_text[5] = "https://i.imgur.com/Geaj1E4.jpeg";

r_text[6] = "https://i.imgur.com/LiLEebj.jpeg";

r_text[7] = "https://i.imgur.com/10PU6Yw.jpeg";

r_text[8] = "https://i.imgur.com/IDAYADO.jpeg";

r_text[9] = "https://i.imgur.com/s8uvksZ.jpeg";

r_text[10] = "https://i.imgur.com/NGKOl2j.jpeg";

r_text[11] = "https://i.imgur.com/emHNZZc.jpeg";

r_text[12] = "https://i.imgur.com/vOEYtXm.jpeg";

r_text[13] = "https://i.imgur.com/3mKth6K.jpeg";

r_text[14] = "https://i.imgur.com/fQiIll6.jpeg";

r_text[15] = "https://i.imgur.com/jTUpA46.jpeg";


var i = Math.floor(15*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.SED})

    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'noorin', fromMe: false, desc:'random noorin images '}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.imgur.com/Xz22Yny.jpeg";

r_text[1] = "https://i.imgur.com/qZpPcvS.jpeg";

r_text[2] = "https://i.imgur.com/jPrcbLd.jpeg";

r_text[3] = "https://i.imgur.com/C7ytHY9.jpeg";

r_text[4] = "https://i.imgur.com/qsHK1oS.jpeg";

r_text[5] = "https://i.imgur.com/KOwQjfD.jpeg";

r_text[6] = "https://i.imgur.com/4Bd8niN.jpeg";

r_text[7] = "https://i.imgur.com/NsVQ8aW.jpeg";

r_text[8] = "https://i.imgur.com/uLEKAuV.jpeg";

r_text[9] = "https://i.imgur.com/nAdTzae.jpeg";

r_text[10] = "https://i.imgur.com/9y1iC5B.jpeg";

r_text[11] = "https://i.imgur.com/9y1iC5B.jpeg";

r_text[12] = "https://i.imgur.com/NjjgmNe.jpeg";

r_text[13] = "https://i.imgur.com/ZpdgBiA.jpeg";

r_text[14] = "https://i.imgur.com/P845ILU.jpeg";

r_text[15] = "https://i.imgur.com/2lmQYQw.jpeg";


    var i = Math.floor(15*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.SED})

    }));

}

// thanks to :- Ajayan
