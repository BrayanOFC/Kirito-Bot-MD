const normas = `
┏━━━━━━━━━━━━━━━┓
┃  📜 *NORMAS DE USO* 📜  
┗━━━━━━━━━━━━━━━┛

🔹 *1. Respeto y Buen Uso:*  
Evita insultos, acoso o cualquier actitud ofensiva hacia otros usuarios.  

🔹 *2. No al Spam:*  
No abuses de los comandos en poco tiempo para evitar saturar el bot.  

🔹 *3. Contenido Permitido:*  
No compartas información ilegal, ofensiva o con derechos de autor.  

🔹 *4. Uso Responsable:*  
Kirito Bot es una herramienta de asistencia y entretenimiento, no un soporte oficial.  

🔹 *5. Seguridad y Ética:*  
No intentes explotar, hackear o modificar el bot sin autorización.  

🔹 *6. Restricciones de Uso:*  
El bot puede limitar funciones si detecta abusos.  

🔹 *7. Cierre de Acceso:*  
El incumplimiento de las normas puede llevar a bloqueos sin previo aviso.  

🔹 *📌 Nota:*  
El uso del bot implica la aceptación de estas normas.
`;

const imagenNormas = 'https://files.catbox.moe/7czphn.jpg';

// Comando 'norma' que envía las normas de uso
export async function normasHandler(m, { command, conn }) {
    if (command === 'norma') {
        await conn.sendMessage(m.chat, { image: { url: imagenNormas }, caption: normas }, { quoted: m });
    }
}

normasHandler.help = ['norma'];
normasHandler.tags = ['grupo'];
normasHandler.command = ['norma'];

export default handler;