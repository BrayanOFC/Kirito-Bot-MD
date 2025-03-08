const politica = `
┏━━━━━━━━━━━━━━━┓
┃  🔒 *POLÍTICA DE PRIVACIDAD* 🔒  
┗━━━━━━━━━━━━━━━┛

📌 *1. Recopilación de Datos:*  
El bot almacena información básica (número, comandos usados) solo para mejorar su funcionamiento.  

📌 *2. Uso de la Información:*  
Los datos se utilizan exclusivamente para optimizar la experiencia del usuario y detectar abusos.  

📌 *3. Protección de Datos:*  
Se aplican medidas de seguridad, pero la protección absoluta no está garantizada en Internet.  

📌 *4. Eliminación de Datos:*  
Puedes solicitar la eliminación de tu información contactando al administrador.  

📌 *5. Cambios en la Política:*  
Esta política puede actualizarse en cualquier momento. Se notificará si hay cambios importantes.  

🔹 *📌 Nota:*  
Al usar Kirito Bot, aceptas estas condiciones.
`;

const imagenPolitica = 'https://files.catbox.moe/da62mt.jpg';

// Comando 'política' que envía la política de privacidad
export async function politicaHandler(m, { command, conn }) {
    if (command === 'política') {
        await conn.sendMessage(m.chat, { image: { url: imagenPolitica }, caption: politica }, { quoted: m });
    }
}

politicaHandler.help = ['política'];
politicaHandler.tags = ['grupo'];
politicaHandler.command = ['política'];

export { politica, imagenPolitica };