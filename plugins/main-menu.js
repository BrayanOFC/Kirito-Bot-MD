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
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎

𝑳 𝑰 𝑺 𝑻 𝑨 𝑫𝑬 𝑪 𝑶 𝑴 𝑨 𝑵 𝑫 𝑶 𝑺

┏━━━━▣━━⌬〘 𝐀𝐍𝐈𝐌𝐄 🔥 〙
┃〘  🔥 𝐀𝐧𝐠𝐫𝐲/𝐄𝐧𝐨𝐣𝐚𝐝𝐨 @tag
┃〘  🌟 𝐁𝐚𝐭𝐡/𝐁𝐚ñ𝐚𝐫𝐬𝐞 @tag
┃〘  🔥 𝐁𝐢𝐭𝐞/𝐌𝐨𝐫𝐝𝐞𝐫 @tag
┃〘  🌟 𝐁𝐥𝐞𝐡/𝐋𝐞𝐧𝐠𝐮𝐚 @tag
┃〘  ⚡ 𝐁𝐥𝐮𝐬𝐡/𝐒𝐨𝐧𝐫𝐨𝐣𝐚𝐫𝐬𝐞 @tag
┃〘  ⚡ 𝐁𝐨𝐫𝐞𝐝/𝐀𝐛𝐮𝐫𝐫𝐢𝐝𝐨 @tag
┃〘  ⚡ 𝐂𝐨𝐟𝐟𝐞/𝐂𝐚𝐟𝐞 @tag
┃〘  🔥 𝐂𝐫𝐲/𝐋𝐥𝐨𝐫𝐚𝐫 @tag
┃〘  ⚡ 𝐂𝐮𝐝𝐝𝐥𝐞/𝐀𝐜𝐮𝐫𝐫𝐮𝐜𝐚𝐫𝐬𝐞 @tag
┃〘  🔥 𝐃𝐚𝐧𝐜𝐞/𝐁𝐚𝐢𝐥𝐚𝐫 @tag
┃〘  🌟 𝐃𝐫𝐮𝐧𝐤/𝐁𝐨𝐫𝐫𝐚𝐜𝐡𝐨 @tag
┃〘  🌟 𝐅𝐚𝐜𝐞𝐩𝐚𝐥𝐦/𝐏𝐚𝐥𝐦𝐚𝐝𝐚 @tag
┃〘  ⚡ 𝐇𝐚𝐩𝐩𝐲/𝐅𝐞𝐥𝐢𝐳 @tag
┃〘  ⚡ 𝐇𝐞𝐥𝐥𝐨/𝐇𝐨𝐥𝐚 @tag
┃〘  ⚡ 𝐇𝐮𝐠/𝐀𝐛𝐫𝐚𝐳𝐚𝐫 @tag
┃〘  🌟 𝐊𝐢𝐥𝐥/𝐌𝐚𝐭𝐚𝐫 @tag
┃〘  🌟 𝐊𝐢𝐬𝐬/𝐁𝐞𝐬𝐚𝐫 @tag
┃〘  🔥 𝐊𝐢𝐬𝐬𝟐/𝐁𝐞𝐬𝐚𝐫𝟐 @tag
┃〘  👑 𝐋𝐚𝐮𝐠𝐡/𝐑𝐞𝐢𝐫𝐬𝐞 @tag
┃〘  👑 𝐋𝐢𝐜𝐤/𝐋𝐚𝐦𝐞𝐫 @tag
┃〘  🔥 𝐋𝐨𝐯𝐞𝟐/𝐄𝐧𝐚𝐦𝐨𝐫𝐚𝐝𝐚 @tag
┃〘  🌟 𝐏𝐚𝐭𝐭/𝐀𝐜𝐚𝐫𝐢𝐜𝐢𝐚𝐫 @tag
┃〘  🌟 𝐏𝐨𝐤𝐞/𝐏𝐢𝐜𝐚𝐫 @tag
┃〘  👑 𝐏𝐨𝐮𝐭/𝐏𝐮𝐜𝐡𝐞𝐫𝐨𝐬 @tag
┃〘  🔥 𝐏𝐩𝐜𝐨𝐮𝐩𝐥𝐞
┃〘  👑 𝐏𝐫𝐞𝐠𝐠/𝐄𝐦𝐛𝐚𝐫𝐚𝐳𝐚𝐫 @tag
┃〘  ⚡ 𝐏𝐮𝐧𝐜𝐡/𝐆𝐨𝐥𝐩𝐞𝐚𝐫 @tag
┃〘  🔥 𝐑𝐮𝐧/𝐂𝐨𝐫𝐫𝐞𝐫 @tag
┃〘  👑 𝐒𝐚𝐝/𝐓𝐫𝐢𝐬𝐭𝐞 @tag
┃〘  👑 𝐒𝐜𝐚𝐫𝐞𝐝/𝐀𝐬𝐮𝐬𝐭𝐚𝐝𝐚 @tag
┃〘  🌟 𝐒𝐞𝐝𝐮𝐜𝐞/𝐒𝐞𝐝𝐮𝐜𝐢𝐫 @tag
┃〘  🌟 𝐒𝐡𝐲/𝐓𝐢𝐦𝐢𝐝𝐚 @tag
┃〘  ⚡ 𝐒𝐥𝐚𝐩/𝐁𝐨𝐟𝐞𝐭𝐚𝐝𝐚 @tag
┃〘  ⚡ 𝐒𝐥𝐞𝐞𝐩/𝐃𝐨𝐫𝐦𝐢𝐫 @tag
┃〘  ⚡ 𝐒𝐦𝐨𝐤𝐞/𝐅𝐮𝐦𝐚𝐫 @tag
┃〘  ⚡ 𝐓𝐡𝐢𝐧𝐤/𝐏𝐞𝐧𝐬𝐚𝐧𝐝𝐨 @tag
┃〘  👑 𝐔𝐧𝐝𝐫𝐞𝐬𝐬/𝐄𝐧𝐜𝐮𝐞𝐫𝐚𝐫 @tag
┃〘  🔥 𝐖𝐚𝐢𝐟𝐮
┃〘  🌟 𝐈𝐧𝐟𝐨𝐀𝐧𝐢𝐦𝐞
┃〘  🔥 𝐇𝐚𝐫𝐞𝐦 [@𝐮𝐬𝐮𝐚𝐫𝐢𝐨] [𝐩𝐚𝐠𝐢𝐧𝐚]
┃〘  🌟 𝐑𝐞𝐠𝐚𝐥𝐚𝐫 <𝐧𝐨𝐦𝐛𝐫𝐞> @𝐮𝐬𝐮𝐚𝐫𝐢𝐨
┃〘  🌟 𝐓𝐨𝐩𝐖𝐚𝐢𝐟𝐮𝐬 [𝐩𝐚𝐠𝐢𝐧𝐚]
┃〘  ⚡ 𝐕𝐨𝐭𝐞 <𝐧𝐨𝐦𝐛𝐫𝐞>
┃〘  👑 𝐖𝐯𝐢𝐝𝐞𝐨 <𝐧𝐨𝐦𝐛𝐫𝐞>
┃〘  🌟 𝐖𝐢𝐦𝐚𝐠𝐞 <𝐧𝐨𝐦𝐛𝐫𝐞>
┃〘  👑 𝐂𝐡𝐚𝐫𝐈𝐧𝐟𝐨 <𝐧𝐨𝐦𝐛𝐫𝐞>
┃〘  🌟 𝐖𝐢𝐧𝐟𝐨 <𝐧𝐨𝐦𝐛𝐫𝐞>
┃〘  🌟 𝐖𝐚𝐢𝐟𝐮𝐈𝐧𝐟𝐨 <𝐧𝐨𝐦𝐛𝐫𝐞>
┗━━━━━━━━━━━━➤
┏━━━━▣━━⌬〘 𝐈𝐍𝐅𝐎 🌟 〙
┃〘  👑 𝐚𝐟𝐤 [alasan]
┃〘  ⚡ 𝐨𝐰𝐧𝐞𝐫
┃〘  🔥 𝐭𝐨𝐭𝐚𝐥𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐞𝐬
┃〘  👑 𝐚𝐥𝐥𝐦𝐞𝐧𝐮
┃〘  🔥 𝐦𝐨𝐝𝐬
┃〘  👑 𝐫𝐮𝐧𝐭𝐢𝐦𝐞
┃〘  🌟 𝐬𝐜𝐫𝐢𝐩𝐭
┃〘  🔥 𝐬𝐭𝐚𝐟𝐟
┃〘  🔥 𝐛𝐥𝐨𝐜𝐤𝐥𝐢𝐬𝐭
┗━━━━━━━━━━━➤

┏━━━━▣━━⌬〘 𝐆𝐀𝐌𝐄 👑 〙
┃〘  ⚡ 𝐚𝐡𝐨𝐫𝐜𝐚𝐝𝐨
┃〘  🌟 𝐝𝐞𝐥𝐭𝐭
┃〘  👑 𝐦𝐚𝐭𝐡 <𝐦𝐨𝐝𝐞>
┃〘  ⚡ 𝐬𝐨𝐩𝐚
┃〘  ⚡ 𝐛𝐮𝐬𝐜𝐚𝐩𝐚𝐥𝐚𝐛𝐫𝐚𝐬
┗━━━━━━━━━━━➤

┏━━━━▣━━⌬〘 𝐒𝐔𝐁 𝐁𝐎𝐓𝐒 ⚡ 〙
┃〘  👑 𝐬𝐞𝐫𝐛𝐨𝐭
┃〘  ⚡ 𝐬𝐞𝐫𝐛𝐨𝐭 𝐜𝐨𝐝𝐞
┃〘  👑 𝐭𝐨𝐤𝐞𝐧
┃〘  🌟 𝐬𝐨𝐜𝐤𝐞𝐭𝐬
┃〘  ⚡ 𝐝𝐞𝐥𝐞𝐭𝐞𝐬𝐞𝐬𝐢𝐨𝐧
┃〘  🔥 𝐩𝐚𝐮𝐬𝐚𝐫𝐚𝐢
┗━━━━━━━━━━━➤

┏━━━━▣━━⌬〘 𝐑𝐏𝐆 🔥 〙
┃〘  ⚡ 𝐥𝐛
┃〘  🔥 𝐥𝐞𝐯𝐞𝐥𝐮𝐩
┃〘  🌟 𝐚𝐯𝐞𝐧𝐭𝐮𝐫𝐚
┃〘  🌟 𝐚𝐝𝐯𝐞𝐧𝐭𝐮𝐫𝐞
┃〘  👑 𝐛𝐚𝐥𝐭𝐨𝐩
┃〘  👑 𝐛𝐞𝐫𝐛𝐮𝐫𝐮
┃〘  🌟 𝐜𝐨𝐟𝐫𝐞
┃〘  ⚡ 𝐝𝐚𝐢𝐥𝐲
┃〘  👑 𝐜𝐥𝐚𝐢𝐦
┃〘  🌟 𝐝𝐞𝐩𝐨𝐬𝐢𝐭𝐚𝐫
┃〘  ⚡ 𝐞𝐱𝐩𝐥𝐨𝐫𝐚𝐫
┃〘  🔥 𝐠𝐫𝐞𝐦𝐢𝐨
┃〘  🌟 𝐡𝐚𝐥𝐥𝐨𝐰𝐞𝐞𝐧
┃〘  🔥 𝐡𝐞𝐚𝐥
┃〘  🌟 𝐢𝐧𝐯𝐞𝐧𝐭𝐚𝐫𝐢𝐨
┃〘  🔥 𝐢𝐧𝐯
┃〘  ⚡ 𝐞𝐱𝐩𝐥𝐨𝐫𝐚𝐫
┃〘  👑 𝐦𝐨𝐧𝐭𝐥𝐲
┃〘  👑 𝐧𝐚𝐯𝐢𝐝𝐚𝐝
┃〘  ⚡ 𝐜𝐡𝐫𝐢𝐬𝐭𝐦𝐚𝐬
┃〘  🌟 𝐫𝐞𝐭𝐢𝐫𝐚𝐫
┃〘  🔥 𝐫𝐨𝐛
┃〘  🔥 𝐬𝐥𝐮𝐭
┃〘  🔥 𝐩𝐚𝐲
┃〘  ⚡ 𝐰𝐞𝐞𝐥𝐲
┗━━━━━━━━━━━➤
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