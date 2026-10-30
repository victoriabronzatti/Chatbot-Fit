const TelegramBot = require('node-telegram-bot-api'); 

// replace the value below with the Telegram token you receive from @BotFather
const token = '9007037292:AAG1AHaFsG7fasnrzrQa72uUlVxai7W0paA';

const bot = new TelegramBot(token, { polling: true });