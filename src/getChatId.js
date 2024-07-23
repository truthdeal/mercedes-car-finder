require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log('Chat ID:', chatId);
  bot.sendMessage(chatId, `Your chat ID is: ${chatId}`);
});
