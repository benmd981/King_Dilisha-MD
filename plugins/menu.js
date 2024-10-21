const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
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
┃▢│ Prefix : ${menu.prefix}
┃▢│ download : ${menu.download}
┃▢│ Bot : KING_DILISHA-MD
┃▢│ Owner : ${menu.pushname}
┃▢│ Date : ${menu.date}
┃▢│ Time : ${menu.time}
┃▢│ Plugins : ${menu.plugins}
┃▢│ Version : {menu.v2.0}
┃▢│ Ram : ${menu.ram}
┃▢│ Uptime : ${menu.uptime}
┃▢│ group : ${menu.group}  
┃▢│ search : ${menu.search}
┃▢│ convert : ${menu.convert}
┃▢╰─────────────┈
╰══════════════════─❃```

    
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
