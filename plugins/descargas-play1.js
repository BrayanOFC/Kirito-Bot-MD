import fetch from "node-fetch";
import yts from 'yt-search';
import axios from "axios";

const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
const formatVideo = ['360', '480', '720', '1080', '1440', '4k'];

const ddownr = {
  download: async (url, format) => {
    if (!formatAudio.includes(format) && !formatVideo.includes(format)) {
      throw new Error('Formato no soportado, verifica la lista de formatos disponibles.');
    }

    const config = {
      method: 'GET',
      url: `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    try {
      const response = await axios.request(config);

      if (response.data && response.data.success) {
        const { id, title, info } = response.data;
        const { image } = info;
        const downloadUrl = await ddownr.cekProgress(id);

        return { id, image, title, downloadUrl };
      } else {
        throw new Error('Fallo al obtener los detalles del video.');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
  cekProgress: async (id) => {
    const config = {
      method: 'GET',
      url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    try {
      while (true) {
        const response = await axios.request(config);
        if (response.data?.success && response.data.progress === 1000) {
          return response.data.download_url;
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
};

const handler = async (m, { conn, text }) => {
  try {
    if (!text.trim()) {
      return conn.reply(m.chat, `⚠︎ Ingresa el nombre de la música a descargar.`, m);
    }

    const search = await yts(text);
    if (!search.all?.length) {
      return m.reply('⚠︎ No se encontraron resultados.');
    }

    const videoInfo = search.all[0];
    const { title, thumbnail, timestamp, views, ago, url } = videoInfo;

    const infoMessage = `★ *𝗞𝗜𝗥𝗜𝗧𝗢 - 𝗕𝗢𝗧 𝗠𝗗* ★  

✦ *Archivo encontrado:* *「 ${title} 」*  

⚔ *Canal:* » *${videoInfo.author.name || 'Desconocido'}*  
◆━━━━━━◆✦◆━━━━━━◆  
⚔ *Vistas:* » *${views}*  
◆━━━━━━◆✦◆━━━━━━◆  
⚔ *Duración:* » *${timestamp}*  
◆━━━━━━◆✦◆━━━━━━◆  
⚔ *Publicado:* » *${ago}*  
◆━━━━━━◆✦◆━━━━━━◆  
⚔ *Enlace:* » ${url}  

➤ *Selecciona una opción:*`;

    const buttons = [
      { buttonId: `.yta ${url}`, buttonText: { displayText: '🎵 Audio' }, type: 1 },
      { buttonId: `.ytv ${url}`, buttonText: { displayText: '🎥 Video' }, type: 1 },
    ];

    const message = {
      image: { url: thumbnail },
      caption: infoMessage,
      footer: 'Selecciona una opción para continuar.',
      buttons,
      headerType: 4,
    };

    await conn.sendMessage(m.chat, message, { quoted: m });
  } catch (error) {
    return m.reply(`⚠︎ Ocurrió un error: ${error.message}`);
  }
};

handler.command = handler.help = ['play', 'play2', 'ytmp3', 'yta', 'ytmp4', 'ytv'];
handler.tags = ['downloader'];
handler.group = true;

export default handler;