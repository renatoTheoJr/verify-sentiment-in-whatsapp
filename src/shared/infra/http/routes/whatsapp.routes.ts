import { Router } from "express";
import { recieveMessageController } from "../../../../modules/conversation/useCases/recieveMessage/";



const whatsappRoutes = Router();


whatsappRoutes.post("/", (request, response) => {
    recieveMessageController.handle(request, response);
});

export{whatsappRoutes}