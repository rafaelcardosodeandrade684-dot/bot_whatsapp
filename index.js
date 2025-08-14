const venom = require('venom-bot');
const chromePath = '/usr/bin/google-chrome-stable'; // Caminho do Chrome no Render

venom
  .create({
    session: 'whatsapp-bot',
    multidevice: true,
    headless: true,
    browserPathExecutable: chromePath,
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
  .catch((error) => console.error('Erro ao iniciar o bot:', error));

function start(client) {
  client.onMessage((message) => {
    const msg = message.body.trim().toLowerCase();

    switch (msg) {
      case 'oi':
      case 'olá':
        client.sendText(message.from,
          '👋 Olá! Seja bem-vindo(a) ao atendimento.
\nDigite o número da opção desejada:
1️⃣ - Conferir serviços
2️⃣ - Falar com atendimento
3️⃣ - Horário de funcionamento'
        );
        break;
      case '1':
        client.sendText(message.from, '📋 Confira nosso catálogo de serviços: https://catalogodeservicoslimpabc.my.canva.site/catalogo');
        break;
      case '2':
        client.sendText(message.from, '📞 Um atendente entrará em contato com você em instantes.');
        break;
      case '3':
        client.sendText(message.from, '🕒 Funcionamos de segunda a sábado, das 08h às 18h.');
        break;
      default:
        // Mensagem fora do menu
        if (!msg.startsWith('/')) {
          client.sendText(message.from, '❓ Não entendi. Digite "oi" para ver o menu.');
        }
        break;
    }
  });
}
