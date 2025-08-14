const venom = require('venom-bot');

venom
  .create({
    session: 'whatsapp-bot',
    multidevice: true,
    headless: true, // Necessário no Render
    browserArgs: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  })
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    const msg = message.body.toLowerCase();

    if (msg === 'oi' || msg === 'olá') {
      client.sendText(
        message.from,
        '👋 Olá! Seja bem-vindo(a) ao atendimento.\n\n' +
        'Digite o número da opção desejada:\n' +
        '1️⃣ - Saber preços\n' +
        '2️⃣ - Falar com atendimento\n' +
        '3️⃣ - Horário de funcionamento'
      );
    }

    if (msg === '1') {
      client.sendText(message.from, '💰 Nossos preços variam conforme o serviço. Para mais detalhes, envie uma foto do que deseja higienizar.');
    }

    if (msg === '2') {
      client.sendText(message.from, '📞 Um atendente vai falar com você em instantes.');
    }

    if (msg === '3') {
      client.sendText(message.from, '🕒 Funcionamos de segunda a sábado, das 08h às 18h.');
    }
  });
}
