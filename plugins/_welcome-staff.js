import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  if (m.chat !== '120363416711925079@g.us') return !0; 

  let who = m.messageStubParameters[0];
  let taguser = `@${who.split('@')[0]}`;
  let totalMembers = participants.length;
  let date = new Date().toLocaleString('es-ES', { timeZone: 'America/Mexico_City' });

  let frasesBienvenida = [
    "¡Bienvenido al equipo de élite de Vegeta-Bot! Tu aporte será clave para nuestro crecimiento.",
    "Un nuevo guerrero se une a la batalla. ¡Demos lo mejor para mejorar Vegeta-Bot!",
    "Tu experiencia y habilidades ahora forman parte de nuestro equipo. ¡Bienvenido!",
    "¡Atención equipo! Un nuevo miembro ha llegado para fortalecer nuestra comunidad.",
    "Unir fuerzas nos hace más fuertes. Bienvenido al equipo de Vegeta-Bot, juntos somos imparables."
  ];

  let frasesDespedida = [
    "Gracias por tu tiempo y dedicación al equipo. Te deseamos éxito en tus futuros proyectos.",
    "Se cierra un ciclo, pero tu legado en Vegeta-Bot queda marcado. ¡Mucho éxito!",
    "Nos despedimos con gratitud. ¡Siempre serás parte de esta familia!",
    "El equipo pierde a un gran miembro, pero la puerta queda abierta para tu regreso. ¡Hasta pronto!",
    "Toda historia tiene un final, pero siempre serás parte del staff de Vegeta-Bot. ¡Éxito en todo!"
  ];

  let fraseRandomBienvenida = frasesBienvenida[Math.floor(Math.random() * frasesBienvenida.length)];
  let fraseRandomDespedida = frasesDespedida[Math.floor(Math.random() * frasesDespedida.length)];

  let imageUrlBienvenida = 'https://files.catbox.moe/yjyska.jpg'; 
  let imageUrlDespedida = 'https://files.catbox.moe/sdblhp.jpg';


  if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    let bienvenida = `┏━━━━━━━━━━━━━━━━┅┈
┃    STAFF   VEGETA BOT2.0
┣━━━━━━━━━━━━━━━━┅┈
┃ ➤ 𝗡𝘂𝗲𝘃𝗼 𝗺𝗶𝗲𝗺𝗯𝗿𝗼: ${taguser}
┃ ➤ 𝗚𝗿𝘂𝗽𝗼: ${groupMetadata.subject}
┃ ➤ 𝗘𝗾𝘂𝗶𝗽𝗼 𝘁𝗼𝘁𝗮𝗹: ${totalMembers + 1}
┃ ➤ 𝗙𝗲𝗰𝗵𝗮: ${date}
┗━━━━━━━━━━━━━━━━┅┈
> ${fraseRandomBienvenida}`;

    await conn.sendMessage(m.chat, { image: { url: imageUrlBienvenida }, caption: bienvenida, mentions: [who] });
  }

  if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE ||
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
    let despedida = `┏━━━━━━━━━━━━━━━━┅┈
┃     STAFF  VEGETA-BOT2.0
┣━━━━━━━━━━━━━━━━┅┈
┃ ➤ 𝗠𝗶𝗲𝗺𝗯𝗿𝗼 𝗦𝗮𝗹𝗶𝗲𝗻𝘁𝗲: ${taguser}
┃ ➤ 𝗚𝗿𝘂𝗽𝗼: ${groupMetadata.subject}
┃ ➤ 𝗘𝗾𝘂𝗶𝗽𝗼 𝘁𝗼𝘁𝗮𝗹: ${totalMembers - 1}
┃ ➤ 𝗙𝗲𝗰𝗵𝗮: ${date}
┗━━━━━━━━━━━━━━━━┅┈
> ${fraseRandomDespedida}`;

    await conn.sendMessage(m.chat, { image: { url: imageUrlDespedida }, caption: despedida, mentions: [who] });
  }
}