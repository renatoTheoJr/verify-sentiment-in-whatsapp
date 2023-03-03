import {app} from "./app"
import TelegramBot from "node-telegram-bot-api";
const token = process.env.TELEGRAM_TOKEN + ''
const bot = new TelegramBot(token);
const url = 'https://ab79-177-215-71-135.sa.ngrok.io'
bot.setWebHook(`${url}/telegram/bot${token}`);
app.listen(3333, () => console.log("Server is running in 3333"));
