
let { WAhexaection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,client,id) => {
    hexa = new WAhexaection()
    hexa.logger.level = 'warn'
    hexa.version = [2, 2123, 8]
    hexa.browserDescription = [ 'jadibot', '', '3.0' ]
    hexa.on('qr', async qr => {
	let bot = await qrcode.toDataURL(qr, { scale: 8 })
	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
        bot = await client.sendMessage(id,buffer,MessageType.image,{caption:'Scan QR Untuk menjadi bot\n*Rules:*\nQR akan diganti setiap 30 detik'})
	setTimeout(() => {
        client.deleteMessage(id, bot.key)
       },30000)
    })
    hexa.on('hexaecting', () => {
    })
    hexa.on('open', () => {
	reply(`Sukses Jadi BOT\n\n*Device*:\n\n ${JSON.stringify(hexa.user,null,2)}`)
    })
    await hexa.hexaect({timeoutMs: 30 * 1000})
    listjadibot.push(hexa.user)
    hexa.on('chat-update', async (message) => {
        require('../index.js')(hexa, message)
    })
}

const stopjadibot = (reply) => {
    hexa = new WAhexaection();
    hexa.close()
    reply('Sukses stop jadibot')
}

module.exports = {
    jadibot,
    stopjadibot,
    listjadibot
}