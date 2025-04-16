async function handler(m, { conn, orgs, participants, groupMetadata }) {
  let group = m.chat;
  let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
  conn.reply(m.chat, `☆ 𝐂𝐨𝐦𝐩𝐚𝐫𝐭𝐞 ☆\n\n𝐠𝐫𝐮𝐩𝐨: ${groupMetadata.subject}\n\n${link}`, m, { detectLink: true });
}

handler.help = ['link'];
handler.tags = ['grupo'];
handler.command = ['link', 'enlace'];
handler.group = true;
handler.botAdmin = true;

export default handler;