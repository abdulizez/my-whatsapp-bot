module.exports = {
  command: 'سبام',
  description: 'يرسل رسالة 50 مرة بسرعة',
  category: 'fun',
  usage: '.سبام',

  async execute(sock, msg) {
    const text ='سبام مفخخ! 🧨';
    for (let i = 0; i < 50; i++) {
      await sock.sendMessage(msg.key.remoteJid, { text });
    }
  }
};