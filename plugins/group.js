const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'group', fromMe: true, desc: 'shows the detail of bot group'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        if (Config.GROUP == 'default') {
            await message.client.sendMessage(message.jid,'*Kaztroser by Ajayan*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.GROUP + '\n\n➠', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Julie.addCommand({pattern: 'group', fromMe: false, desc: 'shows the detail of bot group'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        if (Config.GROUP == 'default') {
            await message.client.sendMessage(message.jid,'*Kaztroser by Ajayan*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.GROUP + '\n\n➠', MessageType.text);
        }
    }));
}
