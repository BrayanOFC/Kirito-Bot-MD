let handler = async (m, { conn, usedPrefix, command, args }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🔴 *¡ESTE CHAT NO ESTÁ REGISTRADO!*', m, fake)

let chat = global.db.data.chats[m.chat]

if (command === 'bot') {
if (args.length === 0) {
const estado = chat.isBanned ? '⚠️ *DESACTIVADO*' : '✅ *ACTIVADO*'
const info = `🤖 *KIRITO-BOT CONTROL*  
╭──────────────╮  
│ *📌 COMANDOS DISPONIBLES:*  
│ *${usedPrefix}bot on* – 🟢 Activar  
│ *${usedPrefix}bot off* – 🔴 Desactivar  
╰──────────────╯  
🎭 *Estado actual:* ${estado}`

return conn.reply(m.chat, info, m, fake)
}

if (args[0] === 'off') {
if (chat.isBanned) return conn.reply(m.chat, '⭕ *¡KIRITO-BOT YA ESTABA DESACTIVADO!*', m, fake)
chat.isBanned = true
return conn.reply(m.chat, '⚠️ *¡KIRITO-BOT HA SIDO DESACTIVADO EN ESTE CHAT!*', m, fake)
} else if (args[0] === 'on') {
if (!chat.isBanned) return conn.reply(m.chat, '⭕ *¡KIRITO-BOT YA ESTABA ACTIVADO!*', m, fake)
chat.isBanned = false
return conn.reply(m.chat, '✅ *¡KIRITO-BOT HA SIDO ACTIVADO EN ESTE CHAT!*', m, fake)
}
}
}

handler.help = ['bot']
handler.tags = ['grupo']
handler.command = ['kirito']
handler.admin = true

export default handler