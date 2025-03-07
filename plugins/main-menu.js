import { promises as fs } from 'fs';
import { join } from 'path';
import fetch from 'node-fetch';
import { xpRange } from '../lib/levelling.js';

const categorias = {
  'anime': '🌸 ANIME',
  'main': '📌 INFO',
  'search': '🔍 BÚSQUEDA',
  'game': '🎮 JUEGOS',
  'serbot': '🤖 SUB BOTS',
  'rpg': '⚔️ RPG',
  'sticker': '🎭 STICKERS',
  'group': '👥 GRUPOS',
  'premium': '💎 PREMIUM',
  'downloader': '📥 DESCARGAS',
  'tools': '🛠️ HERRAMIENTAS',
  'fun': '🎉 DIVERSIÓN',
  'nsfw': '🔞 NSFW',
  'cmd': '📂 BASE DE DATOS',
  'owner': '👑 ADMIN',
  'audio': '🎵 AUDIOS',
  'advanced': '🚀 AVANZADO',
  'rcanal': '📺 R-CANAL',
  'ia': '🌟 IA',
};

const emojisCategorias = {
  'anime': '🎴',
  'main': '📌',
  'search': '🔎',
  'game': '🕹️',
  'serbot': '🤖',
  'rpg': '⚔️',
  'sticker': '🎭',
  'group': '👥',
  'premium': '💎',
  'downloader': '📥',
  'tools': '🛠️',
  'fun': '🎉',
  'nsfw': '🔞',
  'cmd': '📂',
  'owner': '👑',
  'audio': '🎶',
  'advanced': '🚀',
  'rcanal': '📺',
  'ia': '🌟',
};

const generarSaludo = () => {
  const hora = new Date().getHours();
  if (hora >= 5 && hora < 12) return '🌞 ¡Buenos días!';
  if (hora >= 12 && hora < 18) return '🌤 ¡Buenas tardes!';
  return '🌙 ¡Buenas noches!';
};

const formatoMenu = {
  antes: `✧*̥₊˚‧☆ﾐ｡彡✧*̥₊˚‧☆ﾐ｡彡✧*̥₊˚‧☆ﾐ｡彡
╔══════════════════╗
   Bienvenido a KIRITO-BOT
╚══════════════════╝

╔═══════ೋೋ═══════☾ 
║┏◆━━━━━━◆❃◆━━━━━━◆ 
║┃ 🤖 *Bot:* KIRITO-BOT
║┃ 🎮 *Nivel:* %level
║┃ 🌟 *Rango:* %role
║┃ 💎 *Estrellas:* %estrellas
║┗◆━━━━━━◆❃◆━━━━━━◆
╚═══════════════════☾
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎`,
  header: '╔═══════ %category ══════╗',
  body: '┃%emoji » %cmd',
  footer: '╚══════════════════════╝',
  after: `Powered by Kirito-Bot`,
};

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await fs.readFile(join(__dirname, '../package.json')).catch(() => ({}))) || {};
    let { exp, estrellas, level, role } = global.db.data.users[m.sender];
    let { min, xp, max } = xpRange(level, global.multiplier);
    let name = await conn.getName(m.sender);
    exp = exp || 'Desconocida';
    role = role || 'Aldeano';

    const d = new Date(new Date() + 3600000);
    const locale = 'es';
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    let _uptime = process.uptime() * 1000;
    let _muptime;
    if (process.send) {
      process.send('uptime');
      _muptime = await new Promise(resolve => {
        process.once('message', resolve);
        setTimeout(resolve, 1000);
      }) * 1000;
    }
    let muptime = clockString(_muptime);
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;

    let help = Object.values(global.plugins)
      .filter(plugin => !plugin.disabled)
      .map(plugin => {
        return {
          help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
          tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
          prefix: 'customPrefix' in plugin,
          estrellas: plugin.estrellas,
          premium: plugin.premium,
          enabled: !plugin.disabled,
        };
      });

    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in categorias) && tag) categorias[tag] = tag;

    conn.menu = conn.menu ? conn.menu : {};
    let before = conn.menu.before || formatoMenu.antes;
    let header = conn.menu.header || formatoMenu.header;
    let body = conn.menu.body || formatoMenu.body;
    let footer = conn.menu.footer || formatoMenu.footer;
    let after = conn.menu.after || formatoMenu.after;

    let _text = [
      before,
      ...Object.keys(categorias).map(tag => {
        let cmds = help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help);
        if (!cmds.length) return '';
        let categoryText = header.replace(/%category/g, categorias[tag]) + '\n' +
          cmds.map(menu => {
            return menu.help.map(cmd => {
              return body.replace(/%cmd/g, menu.prefix ? cmd : '%p' + cmd)
                         .replace(/%emoji/g, emojisCategorias[tag] || '❓')
                         .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                         .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                         .trim();
            }).join('\n');
          }).join('\n') +
          '\n' + footer;
        return categoryText;
      }),
      after,
    ].join('\n');

    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : '';

    let replace = {
      '%': '%',
      p: _p,
      uptime,
      muptime,
      me: conn.getName(conn.user.jid),
      taguser: '@' + m.sender.split('@s.whatsapp.net')[0],
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      botofc: `💛 Bot Oficial`,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      greeting: generarSaludo(),
      level,
      estrellas,
      name,
      time,
      totalreg,
    };

    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join('|')})`, 'g'), (_, name) => '' + replace[name]);

    // Definir botones interactivos
    const buttons = [
      { buttonId: '.help', buttonText: { displayText: 'Ayuda' }, type: 1 },
      { buttonId: '.donar', buttonText: { displayText: 'Donar' }, type: 1 },
      { buttonId: '.infobot', buttonText: { displayText: 'Info Bot' }, type: 1 }
    ];

    await m.react('👑');

    await conn.sendMessage(m.chat, { 
      video: { url: 'https://qu.ax/FBjYO.mp4' }, 
      caption: text.trim(), 
      gifPlayback: true,
      buttons, // botones interactivos
      headerType: 4
    }, { quoted: m });

  } catch (e) {
    conn.reply(m.chat, `❌️ Lo sentimos, el menú tiene un error: ${e.message}`, m);
    throw e;
  }
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'help', 'menú', 'Menú', 'Menu', 'menucompleto'];

export default handler;

function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}