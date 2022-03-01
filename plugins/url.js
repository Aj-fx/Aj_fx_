const skl = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

let sk = Config.WORKTYPE == 'public' ? false : true
skl.addCommand({pattern: 'url ?(.*)', fromMe: sk}, async (message, match) => {

    await message.sendMessage('Error 🔌')

        });
