import { Request, Response } from "express";
import {RecieveMessageUseCase} from "./RecieveMessageUseCase"
import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config'
const token = process.env.TELEGRAM_TOKEN + ''
const bot = new TelegramBot(token);



class RecieveMessageController{
    
    constructor(private recieveMessageUseCase: RecieveMessageUseCase){}
    handle(request: Request, response: Response): Response{
        bot.processUpdate(request.body);
       // console.log(request.body)
        const {id, first_name, last_name, username} = request.body.message.chat
        const {text} = request.body.message
        const phone = username
        const send_by  = first_name + ' ' + last_name
        try{
            console.log(text, send_by, phone, this.recieveMessageUseCase)
            const message = this.recieveMessageUseCase.execute({text: '123', send_by: 'te', phone: '33232'})
            bot.sendMessage(id, message.toString());
            console.log(id, message);

            response.send()   
            return response;
        } catch( err: any ) {
            console.log(err)
            return response.status(400).json({
                error: err.message
            })
        }
    }
}
export {RecieveMessageController}