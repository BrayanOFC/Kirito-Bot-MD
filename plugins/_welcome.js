import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/56el7x.jpg')
  let img = await (await fetch(`${pp}`)).buffer()

  if (chat.welcome) {
    let messageOptions = { image: img, mentions: [who], ...m.fake } // Agrega m.fake a los mensajes

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let bienvenida = `┏━━━━━━━━━━━━━━━━┅┈
┃      🄱🄸🄴🄽🅅🄴🄽🄸🄳🄾
┣━━━━━━━━━━━━━━━━┅┈
┃ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼: ${taguser}
┃ 
┃ 𝗚𝗿𝘂𝗽𝗼: ${groupMetadata.subject} 
┃
┃ 
┗━━━━━━━━━━━━━━━━┅┈`
      await conn.sendMessage(m.chat, { ...messageOptions, caption: bienvenida })
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
      let bye = `┏━━━━━━━━━━━━━━━━┅┈
┃       🄱.    🄰.    🅈.
┣━━━━━━━━━━━━━━━━┅┈
┃ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼: ${taguser}
┃ 
┃ 𝗚𝗿𝘂𝗽𝗼: ${groupMetadata.subject} 
┃
┃ 
┗━━━━━━━━━━━━━━━━┅┈`
      await conn.sendMessage(m.chat, { ...messageOptions, caption: bye })
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) { 
      let kick = `┏━━━━━━━━━━━━━━━━┅┈
┃       🄱.    🄰.    🅈.
┣━━━━━━━━━━━━━━━━┅┈
┃ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼: ${taguser}
┃ 
┃ 𝗚𝗿𝘂𝗽𝗼: ${groupMetadata.subject} 
┃
┃ 
┗━━━━━━━━━━━━━━━━┅┈`
      await conn.sendMessage(m.chat, { ...messageOptions, caption: kick })
    }
  }
}