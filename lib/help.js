const fs = require('fs-extra')

const help = (prefix, cts, pendaftar) => {
    return `
╔══✪〘 INFORMATION 〙✪══
║╔═════════════════════════
║║❖ IKKYH BOT
║║❖ Version 2.1
║║❖ OWNER : RICKY IYEEGAHHH
║║❖ _Contact Me_ wa.me/628886600839
║║❖ ${pendaftar.length} User Registered
║║❖ User free akan dibatasi untuk beberapa fitur
║║	❖ Beli premium? hubungi nomor diatas
║╚══════════════════════════
║
║╔══✪〘 LIST MENU 〙✪═════
║╠➣ *${prefix}profile*
║╠➣ *${prefix}ownermenu*
║╠➣ *${prefix}adminmenu*
║╠➣ *${prefix}groupmenu*
║╠➣ *${prefix}muslimmenu*
║╠➣ *${prefix}nsfwmenu*
║╠➣ *${prefix}funmenu*
║╠➣ *${prefix}mediamenu*
║╠➣ *${prefix}animemenu*
║╠➣ *${prefix}kerangmenu*
║╠➣ *${prefix}downloadmenu*
║╠➣ *${prefix}othermenu*
║╠➣ *${prefix}carijodoh (New)*
║╚══════════════════════════
║
║╔═✪〘 OTHER 〙✪══════════
║╠➣ *cekpprefix*
║╠➣ *${prefix}setprefix*
║╠➣ *${prefix}daftar |nama|umur*
║╠➣ *${prefix}bugreport [teks]*
║╠➣ *${prefix}listblock*
║╠➣ *${prefix}listbanned*
║╠➣ *${prefix}listgroup*
║╠➣ *${prefix}runtime*
║╠➣ *${prefix}limit*
║╠➣ *${prefix}snk*
║╠➣ *${prefix}readme*
║╠➣ *${prefix}donate*
║╠➣ *${prefix}ping*
║╠➣ *${prefix}owner*
║╚══════════════════════════
║
║╔══✪〘 RUNTIME 〙✪════════
║║
║╠➣ WAKTU AKTIF :
║╠➣ ${cts}
║╚══════════════════════════
║Dont know indonesian? use ${prefix}translate en [text]
║Join Grup Anime Bot 
║ ➣https://chat.whatsapp.com/JNVCNa8Uf8Z6NRehnZeqmX
╚═〘 IKKYH BOT 〙
`
}
exports.help = help
const carijodoh = (prefix) => {
    return `
╔══✪〘 CARI JODOH 〙✪══
║
╠➣ *${prefix}regcj-cowo - Pendaftaran Khusus cowo*
╠➣ *${prefix}regcj-cewe - Pendaftaran Khusus cewe*
╠➣ *${prefix}cjcowo - Kalau mau cari cowo*
╠➣ *${prefix}cjcewe - Kalau mau cari cewe*
╠➣ *${prefix}snk-cj - WAJIB BACA!!!*
║
╚═〘 IKKYH BOT 〙`
}
exports.carijodoh = carijodoh
const snkcj = (prefix) => {
    return `*Syarat dan Ketentuan Cari Jodoh :*
1. Harap isi gender dengan benar lainnya terserah kalau mau palsu
2. Isi Gender palsu? Gwe banned permanen!!!
3. Jangan lupa kasih pj ke owner kalo jadian, klo lanjut nikah undang gwe :v
4. Kalau sudah nemu doi harap hubungi wa.me/628886600839 agar data dihapus dari database
5. Owner bot tidak akan bertanggung jawab apababila :
	-Anda di PHP-in
	-Diputusin karena cewe bosen (biasa ini mah)
	-Disakitin ssama cewe
	-Diselingkuhin, dll

Sekian, terima kasih. Kalo ngeue jan lupa kirim videonya ke Owner Bot !`
}
exports.snkcj = snkcj
const ownercmd = (prefix) => {
    return `
╔══✪〘 OWNER 〙✪══
║
╠➣ *${prefix}block 62858xxxxx*
╠➣ *${prefix}unblock 62858xxxxx*
╠➣ *${prefix}addadmin @tagmember*
╠➣ *${prefix}deladmin @tagmember*
╠➣ *${prefix}restart*
╠➣ *${prefix}ekickall*
╠➣ *${prefix}banchat*
╠➣ *${prefix}unbanchat*
╠➣ *${prefix}setname [teks]*
╠➣ *${prefix}setstatus [teks]*
╠➣ *${prefix}setprofilepic*
╠➣ *${prefix}eval [kode JavaScript]*
║
╚═〘 IKKYH BOT 〙`
}
exports.ownercmd = ownercmd
const admincmd = (prefix) => {
    return `
╔══✪〘 ADMIN 〙✪══
║
╠➣ *${prefix}mute*
╠➣ *${prefix}unmute*
╠➣ *${prefix}ban @tagmember*
╠➣ *${prefix}gift @tagmember jumlah*
╠➣ *${prefix}unban @tagmember*
╠➣ *${prefix}daftarulang @tagmember umur*
╠➣ *${prefix}spamcall [81273xxxx]*
╠➣ *${prefix}addbadword [text]*
╠➣ *${prefix}delbadword [text]*
╠➣ *${prefix}listbadword [text]*
╠➣ *${prefix}resetsticker @tagmember*
╠➣ *${prefix}resetbadword @tagmember*
╠➣ *${prefix}oleave*
╠➣ *${prefix}opromote*
╠➣ *${prefix}odemote*
╠➣ *${prefix}odelete*
╠➣ *${prefix}oadd 62813xxxxx*
╠➣ *${prefix}otagall*
║
╚═〘 IKKYH BOT 〙`
}
exports.admincmd = admincmd
const nsfwcmd = (prefix) => {
    return `
╔══✪〘 NSFW 〙✪══
║
╠➣ *${prefix}randombokep*
╠➣ *${prefix}randomhentai*
╠➣ *${prefix}randomnsfwneko*
╠➣ *${prefix}randomtrapnime*
╠➣ *${prefix}nhentai [kode]*
╠➣ *${prefix}nhder [kode]*
╠➣ *${prefix}xnxx [linkXnxx]*
║
╚═〘 IKKYH BOT 〙`
}
exports.nsfwcmd = nsfwcmd
const praycmd = (prefix) => {
    return `
╔══✪〘 MUSLIM 〙✪══
║
╠➣ *${prefix}quran [urutan surah]*
╠➣ *${prefix}infosurah [nama surah]*
╠➣ *${prefix}tafsir [nama surah] [ayat]*
╠➣ *${prefix}jadwalsholat [daerah]*
╠➣ *${prefix}listsurah*
╠➣ *${prefix}listdaerah*
║
╚═〘 IKKYH BOT 〙`
}
exports.praycmd = praycmd
const kerangcmd = (prefix) => {
    return `
╔══✪〘 KERANG 〙✪══
║
╠➣ *${prefix}apakah [optional]*
╠➣ *${prefix}rate* [optional]*
╠➣ *${prefix}bisakah* [optional]*
╠➣ *${prefix}kapankah* [optional]*
║
╚═〘 IKKYH BOT 〙`
}
exports.kerangcmd = kerangcmd
const funcmd = (prefix) => {
    return `
╔══✪〘 FUN 〙✪══
║
╠➣ *${prefix}caklontong*
╠➣ *${prefix}family100*
╠➣ *${prefix}tebakgambar*
╠➣ *${prefix}cerpen*
╠➣ *${prefix}puisi1*
╠➣ *${prefix}puisi2*
╠➣ *${prefix}puisi3*
╠➣ *${prefix}glitch [|teks1|teks2]*
╠➣ *${prefix}lovemessage [teks]*
╠➣ *${prefix}romance [teks]*
╠➣ *${prefix}party [teks]*
╠➣ *${prefix}silk [teks]*
╠➣ *${prefix}thunder [teks]*
╠➣ *${prefix}blackpink [teks]*
╠➣ *${prefix}pornhub [|teks1|teks2]*
╠➣ *${prefix}ramalpasangan [kamu|pasangan]*
╠➣ *${prefix}zodiak* [zodiak kamu]
╠➣ *${prefix}artinama [nama]*
╠➣ *${prefix}artinama [nama]*
╠➣ *${prefix}artimimpi [mimpi]*
╠➣ *${prefix}heroml [nama hero]*
╠➣ *${prefix}nulis [teks]*
╠➣ *${prefix}sandwriting [teks]*
╠➣ *${prefix}tahta [teks]*
╠➣ *${prefix}quotemaker [|teks|author|theme]*
║
╚═〘 IKKYH BOT 〙
`
}
exports.funcmd = funcmd
const mediacmd = (prefix) => {
    return `
╔══✪〘 MEDIA 〙✪══
║
╠➣ *${prefix}newstickerline*
╠➣ *${prefix}news*
╠➣ *${prefix}jadwalbola [query]*
╠➣ *${prefix}distance [query]*
╠➣ *${prefix}covid [negara]*
╠➣ *${prefix}jadwalTv [channel]*
╠➣ *${prefix}cuaca [tempat]*
╠➣ *${prefix}resepmasakan [optional]*
╠➣ *${prefix}tts [kode bhs] [teks]*
╠➣ *${prefix}igstalk [@username]*
╠➣ *${prefix}tiktokstalk [@username]*
╠➣ *${prefix}smulestalk [@username]*
╠➣ *${prefix}kbbi [query]*
╠➣ *${prefix}wiki [query]*
╠➣ *${prefix}shopee [query]*
╠➣ *${prefix}google [query]*
╠➣ *${prefix}pint [query]*
╠➣ *${prefix}playstore [query]*
╠➣ *${prefix}googleimage [query]*
╠➣ *${prefix}brainlysearch [query]*
╠➣ *${prefix}ytsearch [query]*
╠➣ *${prefix}translate [bahasa] [teks]*
╠➣ *${prefix}brainly [pertanyaan] [.jumlah]*
╠➣ *${prefix}lirik [optional]*
╠➣ *${prefix}chord [optional]*
╠➣ *${prefix}qrcode [optional]*
╠➣ *${prefix}maps [optional]*
╠➣ *${prefix}textmaker [teks1|teks2]*
╠➣ *${prefix}checkip [ipaddress]*
╠➣ *${prefix}ssweb [linkWeb]*
╠➣ *${prefix}shorturl [linkWeb]*
║
╚═〘 IKKYH BOT 〙`
}
exports.mediacmd = mediacmd
const animecmd = (prefix) => {
    return `
╔══✪〘 ANIME 〙✪══
║
╠➣ *${prefix}loli*
╠➣ *${prefix}shota*
╠➣ *${prefix}waifu*
╠➣ *${prefix}husbu*
╠➣ *${prefix}randomNekoNime*
╠➣ *${prefix}randomTrapNime*
╠➣ *${prefix}randomAnime*
╠➣ *${prefix}quotesnime*
╠➣ *${prefix}wait*
╠➣ *${prefix}koin*
╠➣ *${prefix}maluser [username]*
╠➣ *${prefix}malanime [query]*
╠➣ *${prefix}malcharacter [query]*
╠➣ *${prefix}kusonime [query]*
╠➣ *${prefix}neonime [query]*
╠➣ *${prefix}dewabatch [query]*
╠➣ *${prefix}komiku [query]*
╠➣ *${prefix}animesearch [query]*
║
╚═〘 IKKYH BOT 〙`
}
exports.animecmd = animecmd
const othercmd = (prefix) => {
    return `
╔══✪〘 OTHER 〙✪══
║
╠➣ *${prefix}bahasa*
╠➣ *${prefix}sticker*
╠➣ *${prefix}stickergif*
╠➣ *${prefix}sfire*
╠➣ *${prefix}slightning*
╠➣ *${prefix}ttp [teks]*
╠➣ *${prefix}stickertoimg*
╠➣ *${prefix}neko*
╠➣ *${prefix}pokemon*
╠➣ *${prefix}inu*
╠➣ *${prefix}infoGempa*
╠➣ *${prefix}quotes*
╠➣ *${prefix}ptl*
╠➣ *${prefix}dadu*
╠➣ *${prefix}koin*
╠➣ *${prefix}quoterandom*
╠➣ *${prefix}wa.me*
║
╚═〘 IKKYH BOT 〙`
}
exports.othercmd = othercmd
const downloadcmd = (prefix) => {
    return `
╔══✪〘 DOWNLOADER 〙✪══
║
╠➣ *${prefix}gdrive [linkGDrive]*
╠➣ *${prefix}ytmp3 [linkYt]*
╠➣ *${prefix}ytmp4 [linkYt]*
╠➣ *${prefix}ig [linkIg]*
╠➣ *${prefix}fb [linkFb]*
╠➣ *${prefix}twitter [linkTwitter]*
╠➣ *${prefix}smule [linkSmule]*
╠➣ *${prefix}tiktok [linkTiktok]*
╠➣ *${prefix}starmaker [linkStarmaker]*
╠➣ *${prefix}xnxx [linkXnxx]*
╠➣ *${prefix}nhder [kodeNuclear]*
╠➣ *${prefix}joox [lagu]*
╠➣ *${prefix}play [lagu]*
╠➣ *${prefix}music [lagu]*
╠➣ *${prefix}getmusic [IdDownload]*
╠➣ *${prefix}video [video]*
╠➣ *${prefix}getvideo [IdDownload]*
║
╚═〘 IKKYH BOT 〙`
}
exports.downloadcmd = downloadcmd
const groupcmd = (prefix) => {
    return `
╔══✪〘 GROUP 〙✪══
║
╠➣ *${prefix}snk*
╠➣ *${prefix}wame*
╠➣ *${prefix}groupinfo*
╠➣ *${prefix}add 62858xxxxx*
╠➣ *${prefix}kick @tagmember*
╠➣ *${prefix}promote @tagmember*
╠➣ *${prefix}demote @tagadmin*
╠➣ *${prefix}tagall*
╠➣ *${prefix}adminList*
╠➣ *${prefix}ownerGroup*
╠➣ *${prefix}leave*
╠➣ *${prefix}delete [replyChatBot]*
╠➣ *${prefix}kickAll*
╠➣ *${prefix}group [open|close]*
╠➣ *${prefix}NSFW [enable|disable]*
╠➣ *${prefix}left [enable|disable]*
╠➣ *${prefix}welcome [enable|disable]*
╠➣ *${prefix}simi [enable|disable]*
╠➣ *${prefix}antisticker [enable|disable]*
╠➣ *${prefix}antilink [enable|disable]*
╠➣ *${prefix}antibadword [enable|disable]*
║
╚═〘 IKKYH BOT 〙`
}
exports.groupcmd = groupcmd
const readme = (prefix) => {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch kenapa ricky keren*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${prefix}tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *${prefix}checkip 182.0.144.145*`
}
exports.readme = readme
const snk = () => {
    return `Syarat dan Ketentuan Bot *IKKYH*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk
const sumbang = () => {
    return `
╔══✪〘 DONATE 〙✪══
║
╠➣ *DONASI BISA MELALUI :*
╠➣ *Ovo : 0895605488485*
╠➣ *DANA : 082241923753*
╠➣ *Gopay : 0895605488485*
╠➣ *Pulsa  : 0895605488485*
╠➣ *LOPYU BUAT YANG SUDAH MAU DONASI*
║
╚═〘 IKKYH BOT 〙
`
}
exports.sumbang = sumbang
const listChannel = () => {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel
const bahasalist = () => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist
