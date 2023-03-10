import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let wibb = `${wktuwib}`

let info = 
`
Belum Tau Mau Jual Apa:)
`
  /*  {title: "ð HEMAT", rowId: '.order *Paket:* HEMAT â¢ Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "ð NORMAL", rowId: '.order *Paket:* NORMAL â¢ Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "ð STANDAR", rowId: '.order *Paket:* STANDAR â¢ Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "ð PRO", rowId: '.order *Paket:* PRO â¢ Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "ð VIP", rowId: '.order *Paket:* VIP â¢ Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `â¥ââ¢â¨ Sá´á´¡á´ Bá´á´ â©â£ââ¤`,
rows: [
{title: "â£â¨ HEMAT â©â¢",
rowId: '.store sewabottt 7 Hari',
description: 'PÊÉªá´á´ Sá´á´¡á´ 5 á´ : 7 Há´ÊÉª' },
{title: "â£â¨ NORMAL â©â¢",
rowId: '.store sewabottt 15 Hari',
description: 'PÊÉªá´á´ Sá´á´¡á´ 10 á´ : 15 Há´ÊÉª' },
{title: "â£â¨ STANDAR â©â¢",
rowId: '.store sewabottt 30 hari',
description: 'PÊÉªá´á´ Sá´á´¡á´ 20 á´ : 30 Há´ÊÉª' },
{title: "â£â¨ PRO â©â¢",
rowId: '.store sewabottt 40 hari',
description: 'PÊÉªá´á´ Sá´á´¡á´ 25 á´ : 40 Há´ÊÉª' },
]},
{
title: `${htjava} PREMIUM â¦-------`,
rows: [
{title: "ð HEMAT", 
rowId: '.order *Paket:* HEMAT â¢ Premium', 
description: 'PRICE: ' + ph + 'k (1 minggu)' },
]},
]
title: `â¥ââ¢â¨ ððððððð ðð â©â£ââ¤
rows: [
{title: "50 ð«ð°ð¨ð´ð¶ðµð«",
rowId: 'order Paket: HEMAT | Diamond Free Fire',
description: 'PÊÉªá´á´ ð«ð°ð¨ð´ð¶ðµð« 8á´  : 50 Diamond' },
{title: "70 ð«ð°ð¨ð´ð¶ðµð«",
rowId: 'order Paket: HEMAT | Diamond Free Fire',
description: 'PÊÉªá´á´ ð«ð°ð¨ð´ð¶ðµð« 10á´  : 70 Diamond' },
{title: "100 ð«ð°ð¨ð´ð¶ðµð«",
rowID: 'order Paket: HEMAT | Diamond Free Fire',
description: 'PÊÉªá´á´ ð«ð°ð¨ð´ð¶ðµð« 15á´  : 100 Diamond' },
{title: "140 ð«ð°ð¨ð´ð¶ðµð«",
rowId: 'order Paket: HEMAT | Diamond Free Fire',
description: 'PÊÉªá´á´ ð«ð°ð¨ð´ð¶ðµð« 20á´  : 140 Diamond' },
{title: "150 ð«ð°ð¨ð´ð¶ðµð«",
rowId: 'order Paket: HEMAT | Diamond Free Fire',
description: 'PÊÉªá´á´ ð«ð°ð¨ð´ð¶ðµð« 22á´  : 150 Diamond' },
{title: "210 ð«ð°ð¨ð´ð¶ðµð«"
rowId: 'order Paket: HEMAT | Diamond Free Fire',
description: 'PÊÉªá´á´ ð«ð°ð¨ð´ð¶ðµð« 30á´  : 210 Diamond' },
{title: "280 ð«ð°ð¨ð´ð¶ðµð«",
rowId: 'order Paket: HEMAT | Diamond Free Fire',
description: 'PÊÉªá´á´ ð«ð°ð¨ð´ð¶ðµð« 8á´  : 50 Diamond' },

const listMessage = {
  text: info,
  footer:  `Há´ÊÊá´ Wá´Êá´á´á´á´ Tá´ MÊ Bá´á´ Sá´á´Êá´ ${name}\nð : ${week} ${weton} ${date}\nâ: ${wibb}`,
  title: 'â¬ ââââ¢â¨ *MÊ LÉªsá´ Sá´á´Êá´* â©â£âââ â¬',
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'sewabottt': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\nð® : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   m.reply('âï¸ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
  break
  case 'aa': {
  m.reply('Êá´Êá´:á´ ')
  }
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
  /* m.reply('âï¸ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
}

handler.help = ['store']
handler.tags = ['main']
handler.command = /^(store)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? ð¥±"
  if (time >= 4) {
    res = "Pagi Lord ð"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak âï¸"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak ð"
  }
  if (time >= 18) {
    res = "Malam Kak ð"
  }
  return res
}