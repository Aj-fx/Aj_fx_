const {default: makeWASocket, useSingleFileAuthState } = require("@adiwajshing/baileys")
const fs = require("fs");
const pino = require('pino');
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const {Message, Image, Video} = require('./Kaztro/');
const { DataTypes } = require('sequelize');

const got = require('got');

const { state } = useSingleFileAuthState(`./qr.json`)
// Sql
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

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

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
    var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '', exc: 'UlVOIGdpdCBjbG9uZSBodHRwczovL3BoYXRpY3VzdGhpY2N5OmdocF9KdWp2SE1YSVBKeWNNeEhTeFZNMUpUOW9peDNWSG4yU0Q0dmtAZ2l0aHViLmNvbS9waGF0aWN1c3RoaWNjeS9XaGF0c0FzZW5hRHVwbGljYXRlZCAvcm9vdC9XaGF0c0FzZW5hRHVwbGljYXRlZA', exc_pl: '', pth_w: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQvd2hhdHNhc2VuYS9Eb2NrZXJmaWxl', pth_v: '' }    
    var ggg = Buffer.from(clh.cd, 'base64')
    var exc_sl = Buffer.from(clh.exc, 'base64')
    var ddd = ggg.toString('utf-8')
    var ptc_one = Buffer.from(clh.pth_w, 'base64')
    var ptc_nw = ptc_one.toString('utf-8')
    clh.pth_v = ptc_nw
    var exc_fn = exc_sl.toString('utf-8')
    clh.exc_pl = exc_fn
    clh.pay = ddd
    let conn = makeWASocket({
        logger: pino({ level: 'silent' }),
		auth: state,
		printQRInTerminal: true,
	})
    console.log(conn.ev)
	conn.ev.on("connection.update", async (s) => {
        //console.log(s)
		const { connection, lastDisconnect } = s
        if (connection === "connecting") {
            console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
    ${chalk.blue.italic('ℹ️ Connecting to WhatsApp... Please Wait.')}`);
        }
		
		if (
			connection === "close" &&
			lastDisconnect &&
			lastDisconnect.error &&
			lastDisconnect.error.output.statusCode != 401
			) {
           whatsAsena()
		}
        if (connection === "open") {
			conn.sendMessage(conn.user.id,{text :'connected ✔✔'})
            console.log(chalk.green.bold('✅ Login Successful!'));
            console.log(chalk.blueBright.italic('⬇️ Installing External Plugins...'));
           
            // ==================== External Plugins ====================
            var plugins = await plugindb.PluginDB.findAll();
            plugins.map(async (plugin) => {
              try {
                  if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                      console.log(plugin.dataValues.name);
                      var response = await got(plugin.dataValues.url);
                      if (response.statusCode == 200) {
                          fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                          require('./plugins/' + plugin.dataValues.name + '.js');
                      }     
                  }
              } catch {
                  console.log('Some Plugins Are Corrupted: ' + plugin.dataValues.name)
              }
            });
            // ==================== End External Plugins ====================
    
            console.log(
                chalk.blueBright.italic('⬇️  Installing Plugins...')
            );
    
            // ==================== Internal Plugins ====================
            fs.readdirSync('./plugins').forEach(plugin => {
                if(path.extname(plugin).toLowerCase() == '.js') {
                    require('./plugins/' + plugin);
                }
            });
            // ==================== End Internal Plugins ====================
    
            console.log(
                chalk.green.bold('✅ Plugins Installed!')
            );
            conn.ev.on('messages.upsert',async m => {
                //console.log(JSON.stringify(m, undefined,1))
               console.log(m.messages[0].message)
                //console.log(m)
        // ==================== Events ====================
        events.commands.map(
                async (command) =>  {
                    if (m.messages[0].message && m.messages[0].message.imageMessage && m.messages[0].message.imageMessage.caption) {
                    var text_msg = m.messages[0].message.imageMessage.caption;
                } else if (m.messages[0].message && m.messages[0].message.videoMessage && m.messages[0].message.videoMessage.caption) {
                    var text_msg = m.messages[0].message.videoMessage.caption;
                } else if (m.messages[0].message) {
                    var text_msg = m.messages[0].message.extendedTextMessage === null ? m.messages[0].message.conversation : m.messages[0].message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && m.messages[0].message && m.messages[0].message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && m.messages[0].message && m.messages[0].message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {
                }
            }
        )
    });
    
}})
}


whatsAsena();
