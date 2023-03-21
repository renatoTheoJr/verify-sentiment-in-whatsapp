import {app} from "./app"
import TelegramBot from "node-telegram-bot-api";
const token = process.env.TELEGRAM_TOKEN + ''
const bot = new TelegramBot(token);
const url = 'https://d17c-2804-431-cfed-7a43-51dd-464a-d7af-ac29.sa.ngrok.io'
bot.setWebHook(`${url}/telegram/bot${token}`);
app.listen(3333, () => console.log("Server is running in 3333"));
