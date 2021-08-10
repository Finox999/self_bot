// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
//   -    y    -    \\
//--Recode By Fino--\\
//--Thanks to Hexagonz--\\
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const hx = require('hxz-api');
const tod = require('tod-api');
const ra = require('ra-api');
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const antilink = JSON.parse(fs.readFileSync('./lib/antilink.json'))
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const vcard = 'BEGIN:VCARD\n' //jangan ganti eror jngn nyesel
            + 'VERSION:3.0\n' //biarin aja eror jngn nyesel
            + 'FN:Mr F\n' //ganti aja 
            + 'ORG: Fino julyan Anggara\n' //ganti aja
            + 'TEL;type=CELL;type=VOICE;waid=6288210864298:+6288210864298\n'  //ganti nomor lu
            + 'END:VCARD' //jangan ganti eror jangan nyesel
            
banChats = true
offline = false
targetpc = '6288210964298'
owner = '6288210864298'
fake = '𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺'
numbernye = '0'
waktu = '-'
alasan = '-'
namabot = '𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺'
lolkey = 'Isi_Apikey_lolhuman'
nama = `𝑖𝑎𝑚 𝑓𝑖𝑛𝑜 菲诺𝟗𝟗𝟗`
nama2 = `Fino Julyan Anggara`
baterai = {
    baterai: 0,
    cas: false
}
//=================================================//
module.exports = hexa = async (hexa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		
hexa.on('CB:action,,battery', json => {
	const a = json[2][0][1].value
	const b = json[2][0][1].live
	baterai.baterai = a
	baterai.cas = b
})

	//Function waktu
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var thexal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilThexa = "" + hari + ", " + thexal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";
            
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        	body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		

			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
  
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
  const isAntiLink = isGroup ? antilink.includes(from) : false
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
const id = '6288210864298d@s.whatsapp.net' 
const hariRaya = new Date('mei 3, 2022 07:00:00')
const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
       var ase = new Date();
      var waktoo = ase.getHours();
      const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = hexa.user.phone
      var tampilHari = "" + waktoo;
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'


        //MESS
		mess = {
			wait: '𝙾𝚃𝚆 𝚃𝚄𝙽𝙶𝚄 𝙱𝙽𝚃𝚁',
			success: '𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻',
			wrongFormat: '𝙵𝙾𝚁𝙼𝙰𝚃 𝚂𝙰𝙻𝙰𝙷',
			error: {
				stick: '𝙸𝚃𝚄 𝙱𝚄𝙺𝙰𝙽 𝚂𝚃𝙸𝙲𝙺𝙴 𝙰𝚂𝚄',
				Iv: '𝙻𝙸𝙽𝙺𝙽𝚈𝙰𝚂𝙰𝙻𝙰𝙷'
			},
			only: {
				group: 'Khusus grup ngab',
				admin: 'Khusus admin bang',
				botadmin: 'Jadiin 𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺 admin',
				}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:ftoko})
        }

        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: ftroli, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:ftoko,caption:yes})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
//FAKEREPLY PRODUCT
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`) //Gambarnye
					},
					"title": " 𝑖 𝑎 𝑚 𝑓 𝑖 𝑛 𝑜 菲诺 ", //Kasih namalu 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "9999999999999999999",
					"retailerId": "*[𝒾𝒶𝓂𝒻𝒾𝓃𝑜𝒙菲诺 ]*",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//FAKEREPLY TROLI
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999999999999,
                            status: 1,
                            surface : 9999999999999,
                            message:`𝑖𝑎𝑚 𝑓𝑖𝑛𝑜 菲诺𝟗𝟗𝟗`, //Kasih namalu
                            orderTitle: '𝚝𝚑𝚒𝚜𝚒𝚜𝚗𝚘𝚝𝚋𝚄𝚐',
                            thumbnail: fs.readFileSync('./stik/thumb.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//FAKEREPLY LOCATION
const flokasi = { key : { participant : '0@s.whatsapp.net'}, message: {locationMessage: {name: 'Russia',jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`)}}}
                          
                       
                      
//FAKEREPLY DOCUMENT
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: '𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺', 
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
//FAKEREPLY VIDEO
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '9999999999999', 
                 'caption': '𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺',
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  }
//FAKEREPLY GROUPINVITE
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "953962993692",
			"groupName": "Bokep Hot", 
            "caption": "𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺", 
            'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
		}
	}
}
//FAKEREPLY GIF
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'gifPlayback': 'true', 
                 'caption': '菲诺',
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  } 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "extendedTextMessage": {"text":"hallo bang","title": `Hmm`, 'jpegThumbnail': fs.readFileSync(`./stik/thumb.jpeg`)}}}
                     
//FAKEREPLY VN
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                 }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffm${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:ftoko})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: ftroli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
               	       if (budy.match("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        hexa.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Antilink di grup ini on, siap siap kamu di kick`)
		        setTimeout( () => {
			        hexa.groupRemove(from, [kic]).catch((e)=>{reply(`*BOT~ HARUS JADI ADMIN—*`)})
		        }, 1000)
		        setTimeout( () => {
			        hexa.updatePresence(from, Presence.composing)
			        reply("Bye Bye tod ${pushname}")
		        }, 0)
		  }

            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 
//Auto Respon 
if (budy.match(`Hai`,'hai',`hi`,`Hi`,`Hay`,`hay`,`hy`)) {
reply(`Hai juga ${pushname}`) 
}
if (budy.match(`Salken`,`salken`,`Slkn`,`slkn`,`Slknn`,`slknn`)) {
reply(`Salken juga ${pushname} `) 
}


if (!mek.key.fromMe && banChats === true) return


switch (command) {
    case 'menu':
    case 'help':

     nomor = `6288210864298@s.whatsapp.net`
      run = process.uptime()
     menu = `❏ *𝙿𝚈𝚃𝙷𝙾𝙽-𝚂𝙴𝙻𝙵𝙱𝙾𝚃菲诺* ❏
┏━━━[ 𝚂𝙴𝙻𝙵𝙱𝙾𝚃 ]
┃     [ 𝑖𝑎𝑚 𝑓𝑖𝑛𝑜 𝟗𝟗𝟗菲诺 ]
┠❑ Hai kak ${pushname} 👋
┣➣Prefix : *[ 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 ]*
┣➣WAConecction : *[ 𝙱𝙰𝙸𝙻𝙴𝚈𝚂 ]*
┣➣Baileys Version : *[  3.5.1  ]*
┣➣Run with : *[  𝚃𝙴𝚁𝙼𝚄𝚇  ]*
┣➣Browser : *[ 𝙵𝙸𝚁𝙴𝙵𝙾𝚇 ]*
┣➣Status : *[ ${banChats} ]*
┣➣Activate : *[ ${kyun(run)} ]*
┣━━━━ ❒ *[ 𝙳𝙴𝚅𝙸𝙲𝙴 𝙸𝙽𝙵𝙾 ]*
┣➣Baterai : *[ ${baterai.baterai}% ]*
┣➣Charge : *[ ${baterai.cas === 'true' ? 'Di cas'
: 'Ga di cas'} ]*
┣➣Device : ${device_manufacturer}
┣➣Versi OS : ${os_version}
┣➣Versi Device : ${device_model}
┣➣RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┣➣MCC : ${mcc} 
┣➣MNC : ${mnc} 
┣➣Versi Wa : ${hexa.user.phone.wa_version}
┣━━━━ ❒ *[ 𝚆𝙰𝙺𝚃𝚄 ]*
┣➣Hari : ${tampilHari}
┣➣Jam : *[ ${time} WIB ]*
┣➣Jam : *[ ${wit} WIT ] *
┣➣Jam : *[ ${wita} WITA ]*
┣━━━━ ❒ *[ 𝙸𝙽𝙵𝙾 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 ]*
┣➣More Info: https://FinoxAnggara.finxtxt.repl.co
┣➣Name : [ 𝙵𝙸𝙽𝙾 𝙹𝚄𝙻𝚈𝙰𝙽 𝙰𝙽𝙶𝙶𝙰𝚁𝙰 ]
┣➣Age : [ - ]
┣➣Class : [ - ]
┣➣From : [ 𝙱𝙴𝙺𝙰𝚂𝙸 - 𝙹𝙰𝙺𝙰𝚁𝚃𝙰 ]
┣➣Instagram : [ instagram.com/finoooooo_ ]
┣➣Recode By : @${nomor.split('@')[0]} 
┣➣Creator : @${nomor.split('@')[0]} 
┃
┗━━━ [ 𝙱𝙰𝙸𝙻𝙴𝚈𝚂 𝚂𝙴𝙻𝙵𝙱𝙾𝚃 ]

❑ ━━━━━━ *[ SELF BOT DALAM TAHAP PEBGEMBANGAN ]* ━━━━━━ ❑ 

📍 *[ NOTE ]* :
*[ 𝚂𝙴𝙼𝚄𝙰 𝙵𝙸𝚃𝚄𝚁 𝚆𝙾𝚁𝙺 𝙺𝙰𝙻𝙾 𝙰𝙿𝙸𝙺𝙴𝚈 𝙾𝙽 ]*

      *[ 𝙼𝙰𝙺𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}sticker_
┣ ◩ _${prefix}swm_ <author|packname>
┣ ◩ _${prefix}take_ <author|packname>
┣ ◩ _${prefix}fdeface_
┣ ◩ _${prefix}ttp_
┣ ◩ _${prefix}ttp2
┣ ◩ _${prefix}ttp3_
┣ ◩ _${prefix}ttp4_
┣ ◩ _${prefix}fakedonald_
┣ ◩ _${prefix}ktpmaker_
┣ ◩ _${prefix}smoji_ <emoji>
┣ ◩ _${prefix}smoji2_ <emoji>
┣ ◩ _${prefix}wasted_ 
┣ ◩ _${prefix}triggered_
┗━━━━━━━━ ❑


     *[ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}toimg_
┣ ◩ _${prefix}tomp3_
┣ ◩ _${prefix}tomp4_
┣ ◩ _${prefix}slow_
┣ ◩ _${prefix}fast_
┣ ◩ _${prefix}reverse_
┣ ◩ _${prefix}tourl_
┗━━━━━━━━ ❑


     *[ 𝟏𝟖+ 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}xhamster_
┣ ◩ _${prefix}xhamstersearch_ <query>
┣ ◩ _${prefix}xnxx_
┣ ◩ _${prefix}xnxxsearch_ <query>
┣ ◩ _${prefix}nhentai_
┣ ◩ _${prefix}nhentaisearch_ < kode >
┣ ◩ _${prefix}nhentaipdf_
┣ ◩ _${prefix}nekopoi_
┣ ◩ _${prefix}nekopoisearch_ <query>
┗━━━━━━━━ ❑


     *[ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}character_
┣ ◩ _${prefix}manga_
┣ ◩ _${prefix}kusonime_
┣ ◩ _${prefix}kusonimesearch_ <query>
┣ ◩ _${prefix}otakudesu_
┣ ◩ _${prefix}otakudesusearch_ <query>
┣ ◩ _${prefix}anime_
┣ ◩ _${prefix}pixiv_
┣ ◩ _${prefix}pixivdl_
┗━━━━━━━━ ❑


      *[ 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}shopee_
┣ ◩ _${prefix}infofilm_
┣ ◩ _${prefix}lk21_
┣ ◩ _${prefix}ssweb_
┣ ◩ _${prefix}shortlink_
┣ ◩ _${prefix}ssweb2_
┣ ◩ _${prefix}ceritahoror_ <random>
┣ ◩ _${prefix}wattpad_
┣ ◩ _${prefix}wattpadsearch_ <query>
┣ ◩ _${prefix}drakorongoing_
┣ ◩ _${prefix}covidindo_
┣ ◩ _${prefix}covidglobal_
┣ ◩ _${prefix}asupan_ <random>
┣ ◩ _${prefix}wancak_
┣ ◩ _${prefix}faketoko_
┣ ◩ _${prefix}cuaca_
┣ ◩ _${prefix}infogempa_
┣ ◩ _${prefix}cnninternasional_
┣ ◩ _${prefix}cnnnasional_
┣ ◩ _${prefix}cnnindonesia_
┣ ◩ _${prefix}newsinfo_
┣ ◩ _${prefix}cerpen_
┣ ◩ _${prefix}stickerwa_ <query>
┣ ◩ _${prefix}google_ <query
┣ ◩ _${prefix}lirik_
┣ ◩ _${prefix}kbbi_
┣ ◩ _${prefix}wikipedia_
┣ ◩ _${prefix}jadwaltv_
┣ ◩ _${prefix}jadwaltvnow_
┣ ◩ _${prefix}jadwalbola_
┣ ◩ _${prefix}kodepos_ <query>
┣ ◩ _${prefix}telesticker_
┗━━━━━━━━ ❑


     *[ 𝙶𝚁𝙾𝚄𝙿 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}add_
┣ ◩ _${prefix}kick_
┣ ◩ _${prefix}demote_
┣ ◩ _${prefix}promote_
┣ ◩ _${prefix}add2_
┣ ◩ _${prefix}kick2_
┣ ◩ _${prefix}demote2_
┣ ◩ _${prefix}promote2_
┣ ◩ _${prefix}tagall_
┣ ◩ _${prefix}tagall2_
┣ ◩ _${prefix}tagall3_
┣ ◩ _${prefix}tagall4_
┣ ◩ _${prefix}tagall5_
┣ ◩ _${prefix}hidetag_
┗━━━━━━━━ ❑

    *[ 𝙸𝚂𝙻𝙰𝙼 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}asmaulhusna_ <query>
┣ ◩ _${prefix}kisahnabi_ <query>
┣ ◩ _${prefix}jadwalsholat_ <query>
┣ ◩ _${prefix}alquran_
┣ ◩ _${prefix}alquranaudio_
┣ ◩ _${prefix}listsurah_
┗━━━━━━━━ ❑


    *[ 𝚄𝙿𝚂𝚆 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}upswteks_
┣ ◩ _${prefix}upswimage_
┣ ◩ _${prefix}upswvideo_
┣ ◩ _${prefix}upswlokasi_
┣ ◩ _${prefix}upswaudio_
┣ ◩ _${prefix}upswvoice_
┣ ◩ _${prefix}upswsticker_
┗━━━━━━━━ ❑

    *[ 𝙵𝚄𝙽 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}fitnah_
┣ ◩ _${prefix}fitnahpc_
┣ ◩ _${prefix}kontak_
┗━━━━━━━━ ❑

    *[ 𝚃𝙰𝙶 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}kontag_
┣ ◩ _${prefix}sticktag_
┣ ◩ _${prefix}totag_
┗━━━━━━━━ ❑

  *[ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igstalk_ <query>
┣ ◩ _${prefix}tiktokstalk_ <query>
┣ ◩ _${prefix}githubstalk_ <query>
┣ ◩ _${prefix}twitterstalk_ <query>
┗━━━━━━━━ ❑

     *[ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}ytsearch_ <query>
┣ ◩ _${prefix}play_ <query>
┣ ◩ _${prefix}spotify_ <quert>
┣ ◩ _${prefix}spotifysearch_ <query>
┣ ◩ _${prefix}joox_ <query>
┣ ◩ _${prefix}jooxsearch_ <query>
┣ ◩ _${prefix}video_ <query>
┣ ◩ _${prefix}ytmp3_ <link>
┣ ◩ _${prefix}igvideo_ <link>
┣ ◩ _${prefix}igdl_ <link>
┣ ◩ _${prefix}igdl2_ <link>
┣ ◩ _${prefix}igstory_ <username>
┣ ◩ _${prefix}igimage_ <link>
┣ ◩ _${prefix}igaudio_ <link>
┣ ◩ _${prefix}ytmp4_ <link>
┣ ◩ _${prefix}ig_ <link>
┣ ◩ _${prefix}pinterest_
┣ ◩ _${prefix}pinterest2_
┣ ◩ _${prefix}pinterestdl_
┣ ◩ _${prefix}twitter_ <link>
┣ ◩ _${prefix}twtdl_
┣ ◩ _${prefix}tiktok_ <link>
┣ ◩ _${prefix}tiktokvideo_ <link>
┣ ◩ _${prefix}tiktokaudio_ <link>
┣ ◩ _${prefix}fb_ <link>
┣ ◩ _${prefix}brainly_ <query>
┣ ◩ _${prefix}image_ <query>
┣ ◩ _${prefix}anime_ <random>
┗━━━━━━━━ ❑

    *[ 𝙾𝚆𝙽𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}spamsms_
┣ ◩ _${prefix}sendbug_
┣ ◩ _${prefix}sendbug2_
┣ ◩ _${prefix}buggc_
┣ ◩ _${prefix}owner_
┣ ◩ _${prefix}stat_ 
┣ ◩ _${prefix}off_
┣ ◩ _${prefix}on_
┣ ◩ _${prefix}status_
┣ ◩ _${prefix}self_
┣ ◩ _${prefix}public_
┣ ◩ _${prefix}setthumb_
┣ ◩ _${prefix}settarget_
┣ ◩ _${prefix}setfakeimg_
┣ ◩ _${prefix}setreply_
┣ ◩ _${prefix}ping_
┣ ◩ _${prefix}inspect_
┣ ◩ _${prefix}join_
┣ ◩ _${prefix}get_
┣ ◩ _${prefix}term_ <code>
┣ ◩ _x_ < java script code >
┗━━━━━━━━ ❑
*[ 𝚃𝙷𝙰𝙽𝙺𝚂𝚃𝙾 ]*
-𝙷𝙴𝚇𝙰(base)
-𝙱𝙰𝙸𝙻𝙴𝚈𝚂
-𝚂𝙰𝚈𝙰 𝚂𝙴𝙽𝙳𝙸𝚁𝙸
-𝚃𝙴𝙼𝙰𝙽-𝚃𝙴𝙼𝙰𝙽 𝚂𝙰𝚈𝙰
-𝙼𝙾𝙽𝙰𝚁𝙸𝙾𝚂
-𝙷𝙰𝙽𝚂 𝙵𝚇𝙲7
-𝙰𝙶𝚄𝙽𝙶 𝙺𝙾𝙽𝚃𝙾𝙻 + 𝙶𝙰𝚈
-𝙷𝙰𝙽𝚂 𝙷𝙻𝚇
-𝙳𝙴𝚂𝚃𝙾𝙳
-𝙲𝚁𝙴𝙰𝚃𝙾𝚁 𝙻𝙰𝙸𝙽

❏ *𝙿𝚈𝚃𝙷𝙾𝙽-𝚂𝙴𝙻𝙵𝙱𝙾𝚃菲诺* ❏`
      hexa.sendMessage(from, menu, text, {quoted:ftoko})
      break

    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ``ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '>𝙾𝙽𝙵𝙻𝙸𝙽𝙴' : '> 𝙾𝙽𝙻𝙸𝙽𝙴'}\n${banChats ? '>𝚂𝙴𝙻𝙵 - 𝙼𝙾𝙳𝙴' : '>𝙿𝚄𝙱𝙻𝙸𝙲 - 𝙼𝙾𝙳𝙴'}`)
            break
    case 'off':
     case 'afk':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:ftoko,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `FiΠo`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `+62 882 1086 4298
+7 747 976 5137
+994 40 274 87 69`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
			
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
if (!mek.key.fromMe) return fakestatus('*Owner Only!!!*')
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: ftroli })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: ftroli })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *𝙿𝚄𝙱𝙻𝙸𝙲 𝙼𝙾𝙳𝙴* 」`)
          	break

	case 'self':
          	if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *𝚂𝙴𝙻𝙵 - 𝙼𝙾𝙳𝙴* 」`)
          	break
 	case 'hidetag':

			
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: ftroli
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:ftoko})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		hexa.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:ftoko,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		hexa.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:ftoko})
		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:ftoko,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    hexa.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:ftoko,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            hexa.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:ftoko,caption:'Nih'})
	    }
            }
	    })
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case 'runtime':
    case 'test':
     case 'hidup':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
	 case 'kecepatan':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
     case 'tovid':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hexa.sendMessage(from,par,text,{quoted:ftoko,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
case 'kick2':
case 'hedcot':
    if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupRemove(from, mems_ids)
                           
					} else {
                                
					hexa.groupRemove(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupRemove(from, [entah])
                        
					}
                        
					break
case 'add2':
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupAdd(from, mems_ids)
                           
					} else {
                                
					hexa.groupAdd(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupAdd(from, [entah])
                        
					}
                        
					break
case 'promote2':
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupMakeAdmin(from, mems_ids)
                           
					} else {
                                
					hexa.groupMakeAdmin(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupMakeAdmin(from, [entah])
                        
					}
                        
					break
case 'demote2':
      if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupDemoteAdmin(from, mems_ids)
                           
					} else {
                                
					hexa.groupDemoteAdmin(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupDemoteAdmin(from, [entah])
                        
					}
                        
					break
case 'pino' :
 case 'fino':
  case 'ganteng':
 var bitch = hexa.prepareMessageFromContent(from, {
				"listMessage":{
			  "title": `Fino ganteng ga?`,
			  "description": `Pilih ya`,
			  "buttonText": "Pilih cok",
			  "listType": "SINGLE_SELECT",
			  "sections": [
			     {
			        "rows": [
			           {
			              "title": "Ganteng",
			              "rowId": "Teken"
			           },
			           {
			              "title": "Ganteng banget",
			              "rowId": "Teken"
			           },
			           {
			              "title": "Ganteng parah",
			              "rowId": "Teken"
			           },
			                         {
			              "title": "Gak",
			              "rowId": "Teken"
			           },
			           {
			              "title": "Bacot",
			              "rowId": "Makasih",

			           },
			           {
			              "title": "1,2,3 Bener",
			              "rowId": "Teken"
			           }
			        ]
			     }]}}, {}) 
			hexa.relayWAMessage(bitch)
case 'antilink':
		
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('UDAH NYALA KAK')
						antilink.push(from)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
						hexa.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = antilink.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

case 'hidetag':
        if (!mek.key.fromMe) return reply('SELF-BOT')
                var value = body.slice(8)
                var group = await hexa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
                }
                hexa.sendMessage(from, options, text)
                await limitAdd(sender)
                break
case 'demote':
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						hexa.groupDemoteAdmin(from, mentioned)
					}
					break
			case 'promote':
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						hexa.groupMakeAdmin(from, mentioned)
					}
					break
case 'kick':
 if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `╭────────────────⊱
║> *_ASEK DAPAT JATAH OPEN BO.KICK_*
╰────────────────⊱
 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupRemove(from, mentioned)
					} else {
						mentions(`╭────────────────⊱
║> *_ASEK DAPAT JATAH OPEN BO.KICK_*
╰────────────────⊱
 @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						hexa.groupRemove(from, mentioned)
					}
					break
case 'add':
  if (!mek.key.fromMe) return reply('SELF-BOT')
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						hexa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
case 'igvideo':
			case 'ig':
			


			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CQpUpGvAhWq/?utm_source=ig_web_copy_link`) 
			linkkkkk = body.slice(9) 
			try {
			const yes = await hx.igdl(q) 
			console.log(yes)
			haloo = `${yes[0].downloadUrl}`
			gayyyyy = await getBuffer(haloo) 
			hexa.sendMessage(from, gayyyyy, video, {mimetype: 'video/mp4', filename: `PythonBot.mp4`, quoted: ftroli, caption: 'Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_'}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender) 
			break
			case 'igaudio':
			


			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CQpUpGvAhWq/?utm_source=ig_web_copy_link`) 
			try {
			const yes = await hx.igdl(q) 
			console.log(yes)
			himya = `${yes[0].downloadUrl}`
			knom = await getBuffer(himya) 
			hexa.sendMessage(from, knom, audio, {mimetype: 'audio/mp4', filename: `HansBot.mp3`, quoted: ftroli}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender) 
			break
			case 'igimage':
			


			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CQXahxwlK_A/?utm_medium=copy_link`)
			try {
			const yes = await hx.igdl(q) 
			console.log(yes)
			haloo = `${yes[0].downloadUrl}`
			oper = await getBuffer(haloo) 
			captiony = `Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_`
			hexa.sendMessage(from, oper, image, {quoted: ftroli, caption: captiony}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
			case 'igstory':
			


			if (args.length == 0) return reply(`Contoh : ${prefix + command} jokowi`) 
			jokooooooo = body.slice(9) 
			try {
			const yes = await hx.igstory(`${jokooooooo}`) 
			jokowi = `${yes[0].downloadUrl}`
			reply(jokowi) 
			buper = await getBuffer(jokowi) 
			ini_yyyy = `Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_`
			hexa.sendMessage(from, buper, video, {mimetype: 'video/mp4', filename: `PythonBot.mp4`, quoted: ftroli, caption: ini_yyyy}) 
			console.log(yes)
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
			case 'tiktokvideo':
			case 'ttvideo':
	
			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`) 
			try {
			const yes = await hx.ttdownloader(q) 
			console.log(yes)
			Ini_video = await getBuffer(yes.nowm) 
			yyyy = `Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_`
			hexa.sendMessage(from, Ini_video, video, {mimetype: 'video/mp4', filename: `PythonBot.mp4`, quoted: ftroli, caption: yyyy}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
case 'd':
case 'del':
case 'delete':
  if (!mek.key.fromMe) return reply('SELF-BOT')
hexa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		break
case 'carigrup':
try {
const yes = await hx.linkwa(' ${body.slice(10) ');
console.log(yes)
teks = `*• Group :* ${yes[0].nama}\n*• Link :* ${yes[0].link}`
reply(teks) 
} catch (error) {
console.log(error)
}
break
//-- owner bot
case 'owner':
    nomor = '6288210964298@s.whatsapp.net'
    owner = await fs.readFileSync('./stik/thumb.jpeg').toString('base64')
    capt = "Owner HayaBot\nIG : finoooooo_a\nWhatsapp BOT : hexa Bot"
    const been = {
    text: `@${nomor.split("@")[0]} Nih Owner ku, chat aja kalo ada perlu`,
  contextInfo: {
mentionedJid: [nomor]
  }
}
reply(been, text, capt, owner)
break
case 'tagall':
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `*•* @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		mentions('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - 〙', members_id, true)
		await limitAdd(sender)
		break
case 'tagall2':
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ ${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		hexa.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - 〙', text, {quoted: ftoko})
		await limitAdd(sender)
		break
		case 'tagall3':
		
		

		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		hexa.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙', text, {detectLinks: false, quoted: ftoko})
		await limitAdd(sender)
		break
		case 'tagall4':
		
		

		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
		members_id.push(mem.jid)
		}
		hexa.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙', text, {quoted: ftoko})
		await limitAdd(sender)
		break
		case 'tagall5':
		
		

		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
		members_id.push(mem.jid)
		}
		reply('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙')
		await limitAdd(sender)
		break
case 'githubstalk':
		
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					hexa.sendMessage(from, buffer, image, {quoted: ftroli, caption: txt})
					break
		case 'tiktokstalk':

			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					hexa.sendMessage(from, buffer, image, {quoted: ftroli, caption: txt})
					break
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  hexa.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: ftroli})
                  hexa.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: ftroli} )
case 'stat':
 
 if (!mek.key.fromMe) return reply('SELF-BOT')
 anu = process.uptime()
 menu =`      ❐ *𝙿𝚈𝚃𝙷𝙾𝙽 𝚂𝚃𝙰𝚃* ❐
┏━━━━━━━ ❒
┣➣Prefix : *[ 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 ]*
┣➣WAConection : *[ 𝙱𝙰𝙸𝙻𝙴𝚈𝚂 ]*
┣➣Baileys Version : *[ 3.4.1 ]*
┣➣Run with : *[𝚃𝙴𝚁𝙼𝚄𝚇]*
┣➣Termux version : *[ 0.1.0.1 ]*
┣➣Browser : *[ 𝙵𝙸𝚁𝙴𝙵𝙾𝚇 ]*
┣➣Baterai : *[ ${baterai.baterai}% ]*
┣➣Charge : *[ ${baterai.cas === 'true' ? 'Ya' : 'Tidak'} ]*
┣➣Status : *[ ${banChats} ]*
┣➣Device : *[ ${device_manufacturer} ]*
┣➣Versi OS : *[ ${os_version} ]*
┣➣Versi Device : *[ ${device_model} ]*
┣➣RAM : *[ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB ]*
┣➣MCC : *[ ${mcc} ]*
┣➣MNC : *[ ${mnc} ]*
┣➣Versi Wa : *[ ${hexa.user.phone.wa_version} ]*
┣➣Runtime :  ${kyun(anu)} 
┗━━━━━━━━ ❑`

hexa.sendMessage(from, menu, text, {quoted:fvideo}) 
break
case 'waktu':
case 'hari' :
 case 'Jam':
  case 'jamberapa':
 waktu = `┏━━━ ❒ *[ 𝚆𝙰𝙺𝚃𝚄 ]*
┣➣Hari : *[ ${tampilHari} ]*
┣➣Jam : *[ ${time} WIB ]*
┣➣Jam : *[ ${wit} WIT ]*
┣➣Jam : *[ ${wita} WITA ]*
┗━━━━━━━━ ❑`
hexa.sendMessage(from, waktu, text, {quoted:fvideo})
break

case 'upswteks':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    hexa.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    hexa.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`crewbot`}, MessageType.location)
                    reply(`Sukses upload lokasi kek status:\n${teks}`)
                    break	
                 case 'upswsticker':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						hexa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker kek status whatsapp`)
                    break
                     case 'upswaudio':
                      
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						hexa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio kek status whatsapp`)
						break
						case 'upswvoice':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						hexa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice kek status whatsapp`)
						break
case 'upswvideo':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await hexa.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    hexa.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video kek status whatsapp:\n${konti}`)
                        break
                           case 'upswgif':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (!isOwner) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(enmedia)
                    
                    hexa.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif kek status whatsapp:\n${konti}`)
                        break
                        case 'upswimage':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    hexa.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftoko, caption: `${teksyy}`})
                    reply(`Sukses upload image kek status whatsapp:\n${teksyy}`)
                       break
                       case 'tes':
const rows = [
 {title: 'Menu', description: "", rowId:"Tes"},
 {title: 'Owner', description: "", rowId:"Tes"}
]

const sections = [{title: "*SELF BOT MADE IN FINO*", rows: rows}]

const button = {
 buttonText: 'mau liat apa cok? fitur nya blm jadi:v',
 description: `Hi sir *${pushname}* Iam *${namabot}*`,
 sections: sections,
 listType: 1
}

const sendMsg = await hexa.sendMessage(from, button, MessageType.listMessage)
break 

              case 'helo':
                        {
                            let img = await hexa.prepareMessage('0@s.whatsapp.net', fs.readFileSync('./stik/thumb.jpeg'), MessageType.image);
                            img.message.imageMessage.jpegThumbnail = fs.readFileSync('./stik/thumb.jpeg', { encoding: 'base64' })
                            const teks = {
                                imageMessage: img.message.imageMessage,
                                contentText: tes(prefix),
                                footerText: 'Kaguya SelfBot ⬩ Made by FaizBastomi',
                                headerType: 'IMAGE',
                                buttons: [
                                    { buttonText: { displayText: 'SC BOT' }, type: 1, buttonId: 'a1' },
                                    { buttonText: { displayText: 'PROFILE' }, type: 1, buttonId: 'a2' },
                                ],
                                contextInfo: {
                                    participant: '0@s.whatsapp.net',
                                    remoteJid: 'status@broadcast',
                                    quotedMessage: {
                                        viewOnceMessage: {
                                            message: {
                                                videoMessage: {
                                                    mimetype: 'video/mp4',
                                                    viewOnce: true
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            hexa.sendMessage(from, teks, buttonsMessage);
                        }
                        break
case 'hemlo':
 case 'fino':
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: ' Ganteng '}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Bacot'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Kontol'}, type: 1}
]

const buttonMessage = {
    contentText: "Fino ganteng ga?",
    footerText: 'pilih satu jing',
    buttons: buttons,
    headerType: 1
}
var idButton = type === "buttonsResponseMessage" ? lin.message.buttonsResponseMessage.selectedButtonId: ""
    var idButton = `${idButton}`
const sendMessage = await hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
break
case 'sendbug':

if (!q) return reply(`Penggunaan:\n${prefix}sendbug 0@c.us (Untuk Kontak)\n${prefix}sendbug 0@g.us (Untuk Grup)`)
reply(`Sedang Diproses....`)
hexa.sendMessage(q, '𝕷𝖀⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢𝕱𝕴 4000 4001', text, {quoted : { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) }, message: { orderMessage:{ orderId: '155157279766079', itemCount: '999999999999999999999', status: 'INQUIRY', surface:  'CATALOG', message: '*Cuman Trolli*', jpegthumnail: fs.readFileSync('./stik/thumb.jpeg'), orderTitle: 'Cuih', sellerJid: '0@s.whatsapp.net', token: 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==' }}}})
reply(`Sukses Mengirim Bug`)
break
case 'buggc':
await hexa.toggleDisappearingMessages(from)
reply("⤳𝙓ͯ𝙘ͨ𝙤ͦ𝙙ͩ𝙚ͤ 𝙬ⷠ𝙖ⷠ𝙨ⷠ 𝙝𝙚𝙧𝙚")
break
case 'sendbug2':
if (!q) return reply(`Penggunaan:\n${prefix}sendbug 0@c.us (Untuk Kontak)\n${prefix}sendbug 0@g.us (Untuk Grup)`)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await hexa.toggleDisappearingMessages(from, q)
}
reply('Sukses Send Bug Sebanyak '+args.join(' '))
					break
			case 'creategrup': 
			 case 'creategroup': 
			  case 'createg':
			   case 'create':
				argz = args.join('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hexa.groupCreate(argz[0], mentioned)
					.then((res) => mek.FtroliForwarded(from, JSON.stringify(res, null, 2).toString(), fake))
					.catch((err) => console.log(err))
				} else {
					mek.reply(from, `Penggunaan ${prefix}creategrup namagrup|@tag`, mek)
				}
				break
                case 'fakedonald':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${lolkey}&text=${ini_txt}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'xhamstersearch':


                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':


                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'xnxxsearch':


                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':


                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'nhentai':


                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':


                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await hexa.sendMessage(from, ini_buffer, document, { quoted: ftroli, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':


                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':


                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'nekopoisearch':


                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    await hexa.sendMessage(from, ini_buffer, sticker, { quoted: ftoko })
                    break
                case 'twtdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    await hexa.sendMessage(from, ini_buffer, video, { quoted: ftroli })
                    break
       case 'jooxplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await hexa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: ftroli })
                    break   
                case 'spotify':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await hexa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftoko})
                    break
                case 'spotifysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'character':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break

                case 'kusonime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'kusonimesearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'otakudesu':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
           case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Thexal : ${get_result.thexal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
                 // Islami //
                case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
                    await hexa.sendMessage(from, ini_buffer, audio, { quoted: flokasi, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
case 'infofilm':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break
        case 'shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ssweb':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${ini_link}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'ssweb2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${lolkey}&url=${ini_link}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case 'spamsms':
                 if (mek.key.fromMe)return reply ('owner only!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
                    reply("Success")
                    break
                case 'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    hexa.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'faketoko':
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "LoL Human", code = "IDR", price = 1000000)
                    break
                case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'triggered':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=${lolkey}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        hexa.sendMessage(from, buff, sticker, { quoted: ftroli }).then(() => {
                            fs.unlinkSync(rano)
                        })
                    })
                    break
                case 'wasted':
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${ini_url}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'smoji':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
                    await hexa.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
                    break
                case 'smoji2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${lolkey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await hexa.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
                    break
              case 'asupan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await hexa.sendMessage(from, ini_buffer, video, { quoted: ftroli, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'wancak':
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${lolkey}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'google':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                 case 'searchsticker':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
                        await hexa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'playstore':
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'newsinfo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    await hexa.sendMessage(from, get_buffer, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'lirik':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await hexa.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftroli })
                    reply(ini_txt)
                    break
                case 'covidindo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
    case 'penetral':
     case 'v':

      p = ` .
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
.













.























.






















.

















.
















.

















Ini penetral virtex brok`
				 for (let i = 0; i < 5; i++) { 
				 }
     hexa.sendMessage(from, p, text, {quoted:ftoko})
break
                case 'telesticker':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await hexa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'pinterest':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'pinterest2':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await hexa.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'pinterestdl':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'pixiv':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${lolkey}&query=${query}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'pixivdl':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolkey}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'kbbi':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${lolkey}&query=${args.join(" ")}`)
                    lila = get_result.result
                    ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
                    ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
                    ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
                    ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
                    for (var x of lila) {
                        ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                        ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                        ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                        ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                        ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                 reply('Otw!!')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'kodepos':
                 reply('Otw!!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${lolkey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                 reply('Bentar cok..')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
   case 'youtubestalk':
    reply ('Bntr cok...')
    anu = await fetchJson(`https://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${body.slice(14)}`)
    get = await getBuffer(`anu.result.chanel_picture`)
   teks = `*Channel id* : ${anu.result.channel_id}\n *Channel name* : ${anu.result.channel_name}\n *Description* : ${anu.result.channel_about}\n *Created channel* : ${anu.result.channel_created}`
   hexa.sendMessage(from, get, image, {quoted:mek,caption:teks})
   break
   
 case 'p':
  p = `nge tes doang`
  hexa.sendMessage(from, p, text, {quoted:ftoko})
contextInfo :{ externalAdReply: { } }
  break 
                case 'igdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await hexa.sendMessage(from, ini_buffer, ini_type, { quoted: ftoko })
                    break
                case 'igdl2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${lolkey}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        await hexa.sendMessage(from, ini_buffer, ini_type, { quoted: ftoko })
                    }
                    break
  case 'lopia':         
tpoi = fs.readFileSync('./stik/thumb.jpeg')
					desco = `𝟗𝟗𝟗`
					tite = ` 𝑖 𝑎 𝑚 𝑓 𝑖 𝑛 𝑜 菲诺`
					urlo = `tes`
					 buiu = `owner bacot lu`
					var anu = {
					detectLinks: false
					}
					var mat = await hexa.generateLinkPreview(urlo)
					mat.title = tite;
					mat.description = desco;
					mat.jpegThumbnail = tpoi;
				   mat.canonicalUrl = buiu; 
					hexa.sendMessage(from, mat, MessageType.extendedText, anu, { quoted: ftoko})
					break
					case 'tester':
query = args.join(" ")
tpoi = fs.readFileSync('./stik/thumb.jpeg')
					desco = `𝟗𝟗𝟗`
					tite = `𝑖𝑎𝑚 𝑓𝑖𝑛𝑜 菲诺`
    urlo = `p`
					 buiu = `owner bacot lu`
					var anu = {
					detectLinks: false
					}
					var mat = await hexa.generateLinkPreview(urlo)
					mat.title = tite;
					mat.description = desco;
					mat.jpegThumbnail = tpoi;
				   mat.canonicalUrl = buiu; 
					hexa.sendMessage(from, mat, MessageType.extendedText, anu, { quoted: mek})
					break
					case 'myweb':
					 case 'infocreator':
					  
					 web = `Info creator/Owner bisa kunjungi web di bawah \n https://FinoxAnggara.finxtxt.repl.co`
					 hexa.sendMessage(from, web, text, {quoted:ftoko})
					 break
case 'twitter':
			case 'twitvideo':
		
			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://twitter.com/PassengersMovie/status/821025484150423557`) 
			Kontol_pino = body.slice(9) 
			try {
			const yes = await hx.twitter(`${Kontol_pino}`) 
			console.log(yes)
			okeh_vid = await getBuffer(yes.SD)
			ini_text = `*• Description :* ${yes.desc} \n\nSupport `
			hexa.sendMessage(from, okeh_vid, video, {mimetype: 'video/mp4', filename: `HansBot.mp4`, quoted: mek, caption: ini_text}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
			case 'lopia2':
tpoi = fs.readFileSync('./stik/thumb.jpeg')
					desco = `Visit Me`
					tite = `Lopia Owner Bot`
					urlo = ` Chat Ga Jelas Ke Owner Atau Min\n	https://FinoxAnggara.finxtxt.repl.coT`
					 buiu = `owner bacot lu`
					var anu = {
					detectLinks: false
					}
 					var mat = await hexa.generateLinkPreview(urlo)
					mat.title = tite;
					mat.description = desco;
					mat.jpegThumbnail = tpoi;
				   mat.canonicalUrl = buiu; 
					hexa.sendMessage(from, mat, MessageType
					.extendedText, anu, { quoted: mek})
 break
				case 'clearall':
hexa
					anu = await hexa.chats.all()
					hexa.setMaxListeners(25)
					for (let _ of anu) {
						hexa.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
hexa
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*${body.slice(4)}*`)
						}
						reply('Suksess broadcast')
					}
					break
case 'bc2':

					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, {caption: `「 Broadcast 𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 Broadcast hexa Bot 」\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break

case 'addcmd': 
			case 'setcmd':{

                  if (isQuotedSticker) {
                  if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = hexa.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                  addCmd(kodenya, q)
                  reply("_Success_")
                  } else {
                  reply('tag stickenya')
                  }
                  }
            break
            case 'delcmd':{

                  if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = hexa.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./lib/scommand.json', JSON.stringify(_scommand))
                  reply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
case 'donasi':
 case 'donate':
  donasi = `Gopay: 088210864298 \nPulsa: 088210864298 or +62 878-9444-0175`
  hexa.sendMessage(from, donasi, text, {quoted:ftoko})
  break
   //---end---\\





default:
if (budy.startsWith('x','z','$','#','+')){
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: ftoko})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
