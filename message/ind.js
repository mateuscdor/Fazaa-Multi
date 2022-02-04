exports.wait = () => {
   return ("Mohon tunggu sebentar~")
}

exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*
1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*
2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*
3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*
Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

*Note:* Bot Masih Dalam Program Beta. Jika Bot Tidak Merespon Di Grup Silahkan Gunakan Di Private Chat!
    `
}

exports.wrongFormat = (prefix) => {
    return `Format salah ‼️ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.rent = () => {
    return `*「 S E W A 」*
Sebelum melakukan pembayaran, hubungi dahulu owner https://wa.me/62895379169488
    
┌──「 *ADD GROUP* 」
├ *1 Minggu:* Rp.5.000
├ *1 Bulan:* Rp.10.000
│
├「 *Premium* 」
├ *1 Bulan*: Rp.5.000
│
└──「 *FazaBot - Multi Device* 」 
    
┌──「 *P A Y M E N T* 」
│
├ *Dana:* 0895379169488
├ *Gopay:* 0895379169488
├ *Pulsa:* 0895379169488 (+5k)
│
└──「 *FazaBot - Multi Device* 」 
    
*NOTE:* Untuk Pulsa Akan Dikenakan Tambahan Rp.5.000`
}
exports.donate = () => {
return `┌──「 *D O N A T E* 」
│
├ Beri Semangat Owner!
│
├ *Dana:* 0895379169488
├ *Gopay:* 0895379169488
├ *Pulsa:* 0895379169488
│
└──「 *FazaBot - Multi Device* 」 `

}
exports.menu = (prefix, salam, time) => {
return `        *「 INFO BOT 」*
🤖 _*Bot Name : FazaBot - Multi Device*_
🗄️ _*Library : Baileys-Md*_
🌎 _*Language : Javascript - Nodejs*_

        *「 INFO OWNER 」*
👑 _*Creator : Fadly ID*_
👸 _*Pacar : Fafa Kawaii*_
👶 _*Anak:v : Faza*_

        *「 TO DAY 」*
*Selamat ${salam}*
⏰ *${time}*

        *「 ABOUT-MENU 」*
き⃟🐣 ${prefix}owner
き⃟🐣 ${prefix}rules
き⃟🐣 ${prefix}donate
き⃟🐣 ${prefix}sewa

        *「 OWNER-MENU 」*
き⃟🌹 >
き⃟🌹 $
き⃟🌹 ${prefix}join
き⃟🌹 ${prefix}leave
き⃟🌹 ${prefix}setppbot

        *「 SYSTEM-MENU 」*
き⃟❄️ ${prefix}allmenu
き⃟❄️ ${prefix}delete
き⃟❄️ ${prefix}runtime

        *「 GROUP-MENU 」*
き⃟🍁 ${prefix}revoke
き⃟🍁 ${prefix}add
き⃟🍁 ${prefix}kick
き⃟🍁 ${prefix}promote
き⃟🍁 ${prefix}demote
き⃟🍁 ${prefix}leave
き⃟🍁 ${prefix}group
き⃟🍁 ${prefix}hidetag

        *「 ANIME-MENU 」*
き⃟🍀 ${prefix}anime
き⃟🍀 ${prefix}manga
き⃟🍀 ${prefix}character
き⃟🍀 ${prefix}waifu

        *「 SEARCH-MENU 」*
き⃟✨ ${prefix}film
き⃟✨ ${prefix}lirik
き⃟✨ ${prefix}wattpad
き⃟✨ ${prefix}webtoons
き⃟✨ ${prefix}drakor
き⃟✨ ${prefix}pinterest
き⃟✨ ${prefix}gcsearch
き⃟✨ ${prefix}igstalk

        *「 MEDIA-MENU 」*
き⃟🌪️ ${prefix}toimg
き⃟🌪️ ${prefix}tomp3
き⃟🌪️ ${prefix}sticker
き⃟🌪️ ${prefix}ocr

        *「 MAKER-MENU 」*
き⃟🐦 ${prefix}carbon

        *「 DOWNLOADER-MENU 」*
き⃟☕ ${prefix}tiktok
き⃟☕ ${prefix}ytmp3
き⃟☕ ${prefix}ytmp4
き⃟☕ ${prefix}play
き⃟☕ ${prefix}facebook
き⃟☕ ${prefix}twitter
き⃟☕ ${prefix}instagram

        *「 INFO-MENU 」*
き⃟ℹ️ ${prefix}translate
き⃟ℹ️ ${prefix}gempa

        *「 THANKS TO 」*
> Allah SWT (GOD)
> FZDEVELOPER
> Fadly ID
> Fafa Kawai
> Penyedia Module
> Adiwajsing/Baileys`

}


exports.getGroupAdmins = function(participants){
    let admins  = []
	for (let i of participants) {
		i.admin  !== null ? admins.push(i.id) : ''
	}
	return admins
}

exports.groupOnly = function(){
    return "Perintah Ini Hanya Bisa Digunakan di Group!"
}

exports.adminsOnly = function(){
    return "Perintah Ini Hanya Bisa Digunakan Admin Group!"
}

exports.err = (cmd, err) => {
    return `Error ${cmd}: ${err}`
}

exports.noUrl = () => {
    return "Input Harus Berupa Url!"
}