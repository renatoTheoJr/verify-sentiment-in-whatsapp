import { Router} from "express";
const token = process.env.TELEGRAM_TOKEN + ''

import { recieveMessageController } from "../../../../modules/conversation/useCases/recieveMessage/";

const telegramRoutes = Router();

telegramRoutes.post(`/bot${token}`, (request, response) => {
    recieveMessageController.handle(request, response)
})


export {telegramRoutes}