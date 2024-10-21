const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `{config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = ` 
  ╭════ DILISHA ════─❃
┃▢╭─────────────┈
┃▢│ Prefix : .
┃▢│ download : menu down
┃▢│ Bot : KING_DILISHA-MD
┃▢│ Owner : ${menu.pushname}
┃▢│ Date : today
┃▢│ Time : time now
┃▢│ Plugins : 300
┃▢│ Version : v2
┃▢│ Ram : 6GB
┃▢│ Uptime : ${menu.uptime}
┃▢│ group : down row 
┃▢│ search : down
┃▢│ convert : transate
┃▢╰─────────────┈
╰══════════════════─❃


┌─⊰ 💻 CORE 💻
│⊳ alive
│⊳ help
│⊳ listmenu
│⊳ plugins
│⊳ install
│⊳ delplugin
│⊳ pluginstore
│⊳ support
│⊳ request
│⊳ report
│⊳ uptime
│⊳ buttons
│⊳ restart
│⊳ setreply
│⊳ setmenu  ⌈number⌋
│⊳ setlist  ⌈number⌋
│⊳ setalive  ⌈number⌋
│⊳ setgreetings  ⌈number⌋
│⊳ setytsmsg
│⊳ prefix
│⊳ mode
│⊳ setcmd  ⌈media⌋
│⊳ delcmd  ⌈media⌋
│⊳ lockcmd  ⌈media⌋
│⊳ unlockcmd
│⊳ listcmd
│⊳ owner
└───────────────┈⊰

┌─⊰ 👮🏻‍♂️ ADMINS 👮🏻‍♂️
│⊳ add  ⌈user⌋
│⊳ remove  ⌈user⌋
│⊳ invite  ⌈user⌋
│⊳ gcrequest
│⊳ acceptall
│⊳ rejectall
│⊳ promote  ⌈user⌋
│⊳ demote  ⌈user⌋
│⊳ tagall  ⌈text⌋
│⊳ hidetag  ⌈text⌋
│⊳ delete2
│⊳ gclink
│⊳ group
│⊳ gcpp
│⊳ gcregister
│⊳ agerestriction
│⊳ setagelimit  ⌈number⌋
│⊳ enable  ⌈options⌋
│⊳ disable  ⌈options⌋
└───────────────┈⊰

┌─⊰ 🤖 AI 🤖
│⊳ gpt4  ⌈text⌋
│⊳ aiart  ⌈text⌋
│⊳ pixabay  ⌈text⌋
│⊳ bingchat  ⌈text⌋
│⊳ bingimg  ⌈query⌋
│⊳ brainshop  ⌈text⌋
│⊳ blackbox  ⌈text⌋
└───────────────┈⊰

┌─⊰ 🧩 OWNER 🧩
│⊳ bcaud  ⌈audio⌋
│⊳ bcvn  ⌈voicenote⌋
│⊳ bcvid  ⌈video⌋
│⊳ bcimg  ⌈image⌋
│⊳ bctext  ⌈text⌋
│⊳ block  ⌈user⌋
│⊳ unblock  ⌈user⌋
│⊳ setpp  ⌈image⌋
│⊳ ban  ⌈user⌋
│⊳ unban  ⌈user⌋
│⊳ addmod  ⌈user⌋
│⊳ delmod  ⌈user⌋
│⊳ leavegc
│⊳ join  ⌈url⌋
│⊳ edit  ⌈text⌋
│
│⊳ setbio  ⌈text⌋
│⊳ autoreply
│⊳ chatbot
│⊳ cooldown
│⊳ autobio
│⊳ autoblock
│⊳ onlypm
│⊳ antipm
│⊳ autoread
│⊳ autotyping
│⊳ welcome
│⊳ goodbye
│⊳ pdm
│⊳ gcm
│⊳ antionce
│⊳ reactcmd
│⊳ reactmsg
│⊳ autostatus
│⊳ addwarn  ⌈user⌋
│⊳ delwarn  ⌈user⌋
│⊳ resetwarn  ⌈user⌋
│⊳ antiwords  ⌈words⌋
│⊳ delword  ⌈words⌋
│⊳ listword  ⌈words⌋
│⊳ antifake
│⊳ addantifake  ⌈numbers⌋
│⊳ delantifake  ⌈numbers⌋
└───────────────┈⊰

┌─⊰ ♻️ CONVERT ♻️
│⊳ toimg  ⌈image⌋
│⊳ loaud  ⌈vn/video⌋
│⊳ tovn  ⌈audio/video⌋
│⊳ vv  ⌈onceview⌋
│⊳ tempurl  ⌈media⌋
│⊳ sticker  ⌈media⌋
└───────────────┈⊰

┌─⊰ 📂 DOWNLOAD 📂
│⊳ pinterest  ⌈query⌋
│⊳ pinturl  ⌈url⌋
│⊳ ringtone  ⌈text⌋
│⊳ mediafire  ⌈url⌋
│⊳ igdl  ⌈url⌋
│⊳ igs  ⌈username⌋
│⊳ twitterdl  ⌈url⌋
│⊳ facebook  ⌈url⌋
│⊳ gitclone  ⌈url⌋
│⊳ youtube  ⌈query⌋
└───────────────┈⊰

┌─⊰ 😂 FUN 😂
│⊳ couple
│⊳ fact
│⊳ flirt
│⊳ quote
│⊳ gaycheck  ⌈user⌋
│⊳ cutecheck  ⌈user⌋
│⊳ lesbicheck  ⌈user⌋
│⊳ hornycheck  ⌈user⌋
│⊳ prettycheck  ⌈user⌋
│⊳ lovelycheck  ⌈user⌋
│⊳ uglycheck  ⌈user⌋
│⊳ handsomecheck  ⌈user⌋
│⊳ smartcheck  ⌈user⌋
│⊳ dumbcheck  ⌈user⌋
│⊳ strongcheck  ⌈user⌋
│⊳ weakcheck  ⌈user⌋
│⊳ perfectcheck  ⌈user⌋
│⊳ flirtycheck  ⌈user⌋
│⊳ simpcheck  ⌈user⌋
│⊳ genzcheck  ⌈user⌋
│⊳ sigmacheck  ⌈user⌋
│⊳ rizzcheck  ⌈user⌋
│⊳ maturecheck  ⌈user⌋
│⊳ vibeycheck  ⌈user⌋
│⊳ wholesomecheck  ⌈user⌋
│⊳ toxiccheck  ⌈user⌋
│⊳ dripcheck  ⌈user⌋
│⊳ savagecheck  ⌈user⌋
│⊳ cringecheck  ⌈user⌋
│⊳ edgycheck  ⌈user⌋
│⊳ nerdcheck  ⌈user⌋
│⊳ chadcheck  ⌈user⌋
│⊳ goblincheck  ⌈user⌋
│⊳ lgigaChadcheck  ⌈user⌋
│⊳ sturdycheck  ⌈user⌋
│⊳ wokecheck  ⌈user⌋
│⊳ basiccheck  ⌈user⌋
│⊳ suscheck  ⌈user⌋
│⊳ basedcheck  ⌈user⌋
│⊳ kingcheck  ⌈user⌋
│⊳ queencheck  ⌈user⌋
│⊳ lgbtqcheck  ⌈user⌋
│⊳ beautifulcheck  ⌈user⌋
│⊳ charactercheck  ⌈user⌋
└───────────────┈⊰

┌─⊰ _*🃏 GAMES 🃏*_
│⊳ dare
│⊳ truth
│⊳ tictactoe
│⊳ detictactoe
└───────────────┈⊰

┌─⊰ 🧧 GENERAL 🧧
│⊳ listgc
│⊳ listpc
│⊳ modlist
│⊳ couplepp
│⊳ admins  ⌈text⌋
│⊳ tts  ⌈text⌋
│⊳ getbio  
│⊳ getpp  ⌈user⌋
│⊳ ping
│⊳ setresname  ⌈name⌋
│⊳ setresage  ⌈number⌋
│⊳ setresgender
│⊳ setresstate  ⌈name⌋
└───────────────┈⊰

┌─⊰ 🍜 MAKER 🍜
│⊳ meme  ⌈image⌋
│⊳ remini  ⌈image⌋
└───────────────┈⊰

┌─⊰ 🌟 RELIGIOUS 🌟
│⊳ islamicwall
│⊳ ganpatiwall
│⊳ shreeram
└───────────────┈⊰

┌─⊰ 🕵🏻‍♂️ SEARCH 🕵🏻‍♂️
│⊳ wikipedia  ⌈query⌋
│⊳ konachan  ⌈query⌋
│⊳ an1  ⌈query⌋
│⊳ happymod  ⌈query⌋
│⊳ webtoons  ⌈query⌋
│⊳ tth  ⌈query⌋
│⊳ wattpad  ⌈query⌋
│⊳ steam  ⌈query⌋
│⊳ soundcloud  ⌈query⌋
│⊳ playstore  ⌈query⌋
│⊳ wikimedia  ⌈query⌋
│⊳ lyrics  ⌈query⌋
│⊳ npm  ⌈query⌋
│⊳ imdb  ⌈query⌋
│⊳ weather  ⌈query⌋
│⊳ search  ⌈query⌋
│⊳ gimg  ⌈query⌋
└───────────────┈⊰

┌─⊰ 🛸 STALKER 🛸
│⊳ igstalk  ⌈username⌋
│⊳ gcinfo  ⌈url⌋
│⊳ gitstalk  ⌈username⌋
└───────────────┈⊰

┌─⊰ 🍜 STICKER 🍜
│⊳ quotely  ⌈text⌋
│⊳ smeme  ⌈image⌋
│⊳ ttp  ⌈text⌋
└───────────────┈⊰

┌─⊰ 👨🏻‍🔧 TOOLS 👨🏻‍🔧
│⊳ translate
│⊳ readmore  ⌈text⌋
│⊳ fliptxt  ⌈text⌋
│⊳ ss  ⌈url⌋
│⊳ ss2  ⌈url⌋
│⊳ ss3  ⌈url⌋
│⊳ take  ⌈media⌋
│⊳ tinyurl  ⌈url⌋
│⊳ fancy  ⌈text⌋
└───────────────┈⊰
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e);
reply(`${e}`)
}
})
