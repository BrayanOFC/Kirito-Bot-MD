import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let user = global.db.data.users[userId];
    let name = conn.getName(userId);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;

    let txt = `
*⌬━━━━━▣━━◤⌬◢━━▣━━━━━━⌬*

Hola *@${userId.split('@')[0]}* soy *${botname}*

╔══════⌬『 𝑰 𝑵 𝑭 𝑶 』
║ ✎ Cliente: @${userId.split('@')[0]}
║ ✎ Bot: ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
║ ✎ Modo: Público
║ ✎ Usuarios » ${totalreg}
║ ✎ Tiempo ${uptime}
║ ✎ Comandos » ${totalCommands}
╚══════ ♢.✰.♢ ══════➤

*◤━━━━━ ☆. ⌬ .☆ ━━━━━◥*
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺*  

*┏━━━━━⟪🔥⟫━━━━━┓*  
       𝐀𝐍𝐈𝐌𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐒  
*┗━━━━━⟪🔥⟫━━━━━┛*  

➤  𝐀𝐧𝐠𝐫𝐲 / 𝐄𝐧𝐨𝐣𝐚𝐝𝐨 → `.angry @tag`  
➤  𝐁𝐚𝐭𝐡 / 𝐁𝐚ñ𝐚𝐫𝐬𝐞 → `.bath @tag`  
➤  𝐁𝐢𝐭𝐞 / 𝐌𝐨𝐫𝐝𝐞𝐫 → `.bite @tag`  
➤  𝐁𝐥𝐞𝐡 / 𝐋𝐞𝐧𝐠𝐮𝐚 → `.bleh @tag`  
➤  𝐁𝐥𝐮𝐬𝐡 / 𝐒𝐨𝐧𝐫𝐨𝐣𝐚𝐫𝐬𝐞 → `.blush @tag`  
➤  𝐂𝐫𝐲 / 𝐋𝐥𝐨𝐫𝐚𝐫 → `.cry @tag`  
➤  𝐂𝐮𝐝𝐝𝐥𝐞 / 𝐀𝐜𝐮𝐫𝐫𝐮𝐜𝐚𝐫𝐬𝐞 → `.cuddle @tag`  
➤  𝐃𝐚𝐧𝐜𝐞 / 𝐁𝐚𝐢𝐥𝐚𝐫 → `.dance @tag`  
➤  𝐅𝐚𝐜𝐞𝐩𝐚𝐥𝐦 / 𝐏𝐚𝐥𝐦𝐚𝐝𝐚 → `.facepalm @tag`  
➤  𝐇𝐚𝐩𝐩𝐲 / 𝐅𝐞𝐥𝐢𝐳 → `.happy @tag`  
➤  𝐇𝐞𝐥𝐥𝐨 / 𝐇𝐨𝐥𝐚 → `.hello @tag`  
➤  𝐇𝐮𝐠 / 𝐀𝐛𝐫𝐚𝐳𝐚𝐫 → `.hug @tag`  
➤  𝐊𝐢𝐥𝐥 / 𝐌𝐚𝐭𝐚𝐫 → `.kill @tag`  
➤  𝐊𝐢𝐬𝐬 / 𝐁𝐞𝐬𝐚𝐫 → `.kiss @tag`  
➤  𝐋𝐚𝐮𝐠𝐡 / 𝐑𝐞í𝐫𝐬𝐞 → `.laugh @tag`  
➤  𝐋𝐢𝐜𝐤 / 𝐋𝐚𝐦𝐞𝐫 → `.lick @tag`  
➤  𝐏𝐚𝐭𝐭 / 𝐀𝐜𝐚𝐫𝐢𝐜𝐢𝐚𝐫 → `.patt @tag`  
➤  𝐏𝐨𝐤𝐞 / 𝐏𝐢𝐜𝐚𝐫 → `.poke @tag`  
➤  𝐏𝐨𝐮𝐭 / 𝐏𝐮𝐜𝐡𝐞𝐫𝐨𝐬 → `.pout @tag`  
➤  𝐏𝐮𝐧𝐜𝐡 / 𝐆𝐨𝐥𝐩𝐞𝐚𝐫 → `.punch @tag`  
➤  𝐑𝐮𝐧 / 𝐂𝐨𝐫𝐫𝐞𝐫 → `.run @tag`  
➤  𝐒𝐚𝐝 / 𝐓𝐫𝐢𝐬𝐭𝐞 → `.sad @tag`  
➤  𝐒𝐡𝐲 / 𝐓𝐢𝐦𝐢𝐝𝐚 → `.shy @tag`  
➤  𝐒𝐥𝐚𝐩 / 𝐁𝐨𝐟𝐞𝐭𝐚𝐝𝐚 → `.slap @tag`  
➤  𝐒𝐥𝐞𝐞𝐩 / 𝐃𝐨𝐫𝐦𝐢𝐫 → `.sleep @tag`  
➤  𝐒𝐦𝐨𝐤𝐞 / 𝐅𝐮𝐦𝐚𝐫 → `.smoke @tag`  
➤  𝐓𝐡𝐢𝐧𝐤 / 𝐏𝐞𝐧𝐬𝐚𝐧𝐝𝐨 → `.think @tag`  
➤  𝐖𝐚𝐢𝐟𝐮 → `.waifu`  
➤  𝐈𝐧𝐟𝐨𝐀𝐧𝐢𝐦𝐞 → `.infoanime`  
➤  𝐇𝐚𝐫𝐞𝐦 → `.harem [@usuario] [pagina]`  
➤  𝐑𝐞𝐠𝐚𝐥𝐚𝐫 → `.regalar <nombre> @usuario`  
➤  𝐓𝐨𝐩 𝐖𝐚𝐢𝐟𝐮𝐬 → `.topwaifus [página]`  
➤  𝐕𝐨𝐭𝐞 → `.vote <nombre>`  
➤  𝐖𝐢𝐝𝐞𝐨 / 𝐕𝐢𝐝𝐞𝐨 → `.wvideo <nombre>`  
➤  𝐖𝐢𝐦𝐚𝐠𝐞 / 𝐈𝐦𝐚𝐠𝐞𝐧 → `.wimage <nombre>`  
➤  𝐂𝐡𝐚𝐫𝐈𝐧𝐟𝐨 → `.charinfo <nombre>`  
➤  𝐖𝐢𝐧𝐟𝐨 → `.winfo <nombre>`  
➤  𝐖𝐚𝐢𝐟𝐮𝐈𝐧𝐟𝐨 → `.waifuinfo <nombre>`  

*┗━━━━━━━━━━⟪🔥⟫━━━━━━━━━━┛*
*┏━━━━▣━━⌬〘 INFO 🌟 〙*
┃〘  👑 .afk [alasan]
┃〘  ⚡ .owner
┃〘  🔥 .totalfunciones
┃〘  👑 .allmenu
┃〘  🔥 .mods
┃〘  👑 .runtime
┃〘  🌟 .script
┃〘  🔥 .staff
┃〘  🔥 .blocklist
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 GAME 👑 〙*
┃〘  ⚡ .ahorcado
┃〘  🌟 .delttt
┃〘  👑 .math <mode>
┃〘  ⚡ .sopa
┃〘  ⚡ .buscarpalabras
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 SUB BOTS ⚡ 〙*
┃〘  👑 .serbot
┃〘  ⚡ .serbot code
┃〘  👑 .token
┃〘  🌟 .sockets
┃〘  ⚡ .deletesesion
┃〘  🔥 .pausarai
*┗━━━━━━━━━━━➤
*┏━━━━▣━━⌬〘 RPG 🔥 〙*
┃〘  ⚡ .lb
┃〘  🔥 .levelup
┃〘  🌟 .aventura
┃〘  🌟 .adventure
┃〘  👑 .baltop
┃〘  👑 .berburu
┃〘  🌟 .cofre
┃〘  ⚡ .daily
┃〘  👑 .claim
┃〘  🌟 .depositar
┃〘  ⚡ .explorar
┃〘  🔥 .gremio
┃〘  🌟 .halloween
┃〘  🔥 .heal
┃〘  🌟 .inventario
┃〘  🔥 .inv
┃〘  ⚡ .explorar
┃〘  👑 .monthly
┃〘  👑 .navidad
┃〘  ⚡ .christmas
┃〘  🌟 .retirar
┃〘  🔥 .rob
┃〘  🔥 .slut
┃〘  🔥 .pay
┃〘  ⚡ .weekly
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 STICKER 🔥 〙*
┃〘  🔥 .brat *<texto>*
┃〘  🔥 .emojimix *<emoji+emoji>*
┃〘  🌟 .pfp @user
┃〘  🌟 .qc
┃〘  👑 .stiker <img>
┃〘  👑 .sticker <url>
┃〘  ⚡ .toimg (reply)
┃〘  🌟 .ttp
┃〘  🌟 .attp
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 GROUPS 🔥 〙*
┃〘  ⚡ .invite *<521>*
┃〘  👑 .setemoji *<emoji>*
┃〘  🔥 .todos *<mensaje opcional>*
┃〘  🔥 .testwelcome @user
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 ON / OFF ⚡ 〙*
┃〘  🔥 .welcome
┃〘  🔥 .bv
┃〘  👑 .bienvenida
┃〘  🔥 .antiprivado
┃〘  🌟 .antipriv
┃〘  🔥 .antiprivate
┃〘  🌟 .restrict
┃〘  🔥 .restringir
┃〘  🌟 .autolevelup
┃〘  ⚡ .autonivel
┃〘  ⚡ .autosticker
┃〘  👑 .antibot
┃〘  ⚡ .antibots
┃〘  🔥 .autoaceptar
┃〘  🔥 .aceptarauto
┃〘  ⚡ .autorechazar
┃〘  🌟 .rechazarauto
┃〘  🌟 .autoresponder
┃〘  🌟 .autorespond
┃〘  🌟 .antisubbots
┃〘  ⚡ .antisub
┃〘  🌟 .antisubot
┃〘  🔥 .antibot2
┃〘  🌟 .modoadmin
┃〘  🌟 .soloadmin
┃〘  👑 .autoread
┃〘  👑 .autoleer
┃〘  🌟 .autover
┃〘  👑 .antiver
┃〘  🌟 .antiocultar
┃〘  ⚡ .antiviewonce
┃〘  ⚡ .reaction
┃〘  🔥 .reaccion
┃〘  🌟 .emojis
┃〘  👑 .nsfw
┃〘  🌟 .nsfwhot
┃〘  🌟 .nsfwhorny
┃〘  👑 .antispam
┃〘  🌟 .antiSpam
┃〘  ⚡ .antispamosos
┃〘  👑 .antidelete
┃〘  🔥 .antieliminar
┃〘  ⚡ .jadibotmd
┃〘  🔥 .modejadibot
┃〘  🔥 .subbots
┃〘  ⚡ .detect
┃〘  👑 .configuraciones
┃〘  🔥 .avisodegp
┃〘  🔥 .detect2
┃〘  🔥 .avisos
┃〘  🌟 .eventos
┃〘  🔥 .autosimi
┃〘  🌟 .simsimi
┃〘  🌟 .antilink
┃〘  🔥 .antilink2
┃〘  ⚡ .antitoxic
┃〘  🔥 .antitoxicos
┃〘  ⚡ .antitraba
┃〘  ⚡ .antitrabas
┃〘  🌟 .antifake
┃〘  🔥 .antivirtuales
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 PREMIUM ⚡ 〙*
┃〘  🔥 .comprarpremium
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 DOWNLOAD 👑 〙*
┃〘  🔥 .play
┃〘  ⚡ .play2
┃〘  🌟 .ytmp3
┃〘  🔥 .yta
┃〘  👑 .ytmp4
┃〘  👑 .ytv
┃〘  👑 .spotify
┃〘  🌟 .music
┃〘  🔥 .pl
┃〘  🌟 .pla
┃〘  🔥 .ytmp3
┃〘  👑 .yta
┃〘  🌟 .ytmp4
┃〘  🌟 .ytv
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 TOOLS 🔥 〙*
┃〘  🌟 .webinfo
┃〘  🌟 .dalle
┃〘  🔥 .imagen
┃〘  🌟 .genearimg
┃〘  ⚡ .setdespedida
┃〘  🌟 .setwelcome
┃〘  🌟 .nuevafotochannel
┃〘  ⚡ .nosilenciarcanal
┃〘  ⚡ .silenciarcanal
┃〘  🔥 .noseguircanal
┃〘  ⚡ .seguircanal
┃〘  🔥 .avisoschannel
┃〘  🌟 .resiviravisos
┃〘  🔥 .inspect
┃〘  🔥 .inspeccionar
┃〘  ⚡ .eliminarfotochannel
┃〘  🔥 .reactioneschannel
┃〘  ⚡ .reaccioneschannel
┃〘  👑 .nuevonombrecanal
┃〘  👑 .nuevadescchannel
┃〘  👑 .invite
┃〘  👑 .setcatalogo
┃〘  🌟 .setbanner
┃〘  🔥 .setcatalogo
┃〘  👑 .setmoneda
┃〘  🔥 .setname
┃〘  ⚡ .wm
┃〘  ⚡ .cal *<ecuacion>*
┃〘  🔥 .fake
┃〘  🌟 .remini
┃〘  👑 .hd
┃〘  👑 .enhance
┃〘  👑 .ver
┃〘  🌟 .whatmusic <audio/video>
┃〘  ⚡ .spamwa <number>|<mesage>|<no of messages>  ◜🪪◞
┃〘  🔥 .ssweb
┃〘  🌟 .ss
┃〘  ⚡ .tamaño *<cantidad>*
┃〘  🌟 .document *<audio/video>*
┃〘  ⚡ .wikipedia
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 FUN ⚡ 〙*
┃〘  👑 .simi
┃〘  🔥 .bot
┃〘  🔥 .amistad
┃〘  ⚡ .gay <@tag> | <nombre>
┃〘  🌟 .lesbiana <@tag> | <nombre>
┃〘  🔥 .pajero <@tag> | <nombre>
┃〘  ⚡ .pajera <@tag> | <nombre>
┃〘  🌟 .puto <@tag> | <nombre>
┃〘  ⚡ .puta <@tag> | <nombre>
┃〘  🌟 .manco <@tag> | <nombre>
┃〘  🔥 .manca <@tag> | <nombre>
┃〘  ⚡ .rata <@tag> | <nombre>
┃〘  🔥 .prostituta <@tag> | <nombre>
┃〘  👑 .prostituto <@tag> | <nombre>
┃〘  ⚡ .chiste
┃〘  🌟 .consejo
┃〘  ⚡ .doxear
┃〘  👑 .doxxing <nombre> | <@tag>
┃〘  🔥 .facto
┃〘  🌟 .formarpareja
┃〘  ⚡ .formarpareja5
┃〘  🔥 .frase
┃〘  ⚡ .huevo @user
┃〘  🌟 .iqtest
┃〘  👑 .meme
┃〘  🌟 .morse *<encode|decode>*
┃〘  👑 .nombreninja *<texto>*
┃〘  🔥 .pajeame
┃〘  👑 .personalidad
┃〘  🔥 .piropo
┃〘  🔥 .pokedex *<pokemon>*
┃〘  🌟 .pregunta
┃〘  👑 .ship
┃〘  👑 .love
┃〘  👑 .sorteo
┃〘  🔥 .top *<texto>*
┃〘  🌟 .formartrio @usuario1 @usuario2
┃〘  🔥 .zodiac *2002 02 25*
┃〘  👑 .8ball *<pregunta>*
┃〘  👑 .marry *@usuario*
┃〘  👑 .divorce
┃〘  👑 .si
┃〘  🔥 .no
┃〘  ⚡ .letra <estilo> <texto>
┃〘  🔥 .logo
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 NSFW ⚡ 〙*
┃〘  🔥 .sixnine/69 @tag
┃〘  ⚡ .anal/culiar @tag
┃〘  🔥 .blowjob/mamada @tag
┃〘  ⚡ .boobjob/rusa @tag
┃〘  ⚡ .cum/leche @tag
┃〘  ⚡ .fap/paja @tag
┃〘  🔥 .follar @tag
┃〘  🔥 .footjob/pies @tag
┃〘  ⚡ .fuck/coger @tag
┃〘  ⚡ .fuck2/coger2 @tag
┃〘  👑 .grabboobs/agarrartetas @tag
┃〘  👑 .penetrar @user
┃〘  🔥 .lickpussy/coño @tag
┃〘  🔥 .r34 <tag>
┃〘  🔥 .rule34 <tag>
┃〘  🔥 .sexo/sex @tag
┃〘  🌟 .spank/nalgada @tag
┃〘  ⚡ .suckboobs/chupartetas @tag
┃〘  🔥 .violar/perra @tag
┃〘  ⚡ .lesbianas/tijeras @tag
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 OWNER 🔥 〙*
┃〘  🌟 .addllama *<@user>*
┃〘  🔥 .addprem [@user] <days>
┃〘  ⚡ .autoadmin
┃〘  👑 .copia
┃〘  ⚡ .broadcastgroup
┃〘  ⚡ .bcgc
┃〘  🔥 .chetar *@user*
┃〘  🌟 .chetar *<número>*
┃〘  🌟 .cleanfiles *
┃〘  👑 .cleartmp
┃〘  🔥 .deletefile
┃〘  🌟 .delprem <@user>
┃〘  👑 .deschetar *@user*
┃〘  🔥 .deschetar *<número>*
┃〘  🔥 .dsowner
┃〘  🔥 .>
┃〘  🔥 .=>
┃〘  🔥 .fetch
┃〘  👑 .get
┃〘  ⚡ .getplugin
┃〘  🔥 .groups
┃〘  👑 .grouplist
┃〘  👑 .invite
┃〘  ⚡ .prefix [prefix]
┃〘  🌟 .quitarxp *<@user>*
┃〘  ⚡ .quitarllama *<@user>*
┃〘  🌟 .quitarllama all
┃〘  ⚡ .resetprefix

┃〘  🌟 .restart
┃〘  ⚡ .reunion
┃〘  👑 .meeting
┃〘  🌟 .savefile <ruta/nombre>
┃〘  👑 .saveplugin
┃〘  ⚡ .setcmd *<texto>*
┃〘  👑 .setimage
┃〘  👑 .setstatus <teks>
┃〘  👑 .spam2
┃〘  ⚡ .update
┃〘  ⚡ .actualizar
┃〘  🔥 .codigo <cantidad de llamas>
┃〘  🔥 .ip <alamat ip>
*┗━━━━━━━━━━━➤*
> © kirito-Bot by Deylin
  `.trim();

    await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help'];

export default handler;

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}