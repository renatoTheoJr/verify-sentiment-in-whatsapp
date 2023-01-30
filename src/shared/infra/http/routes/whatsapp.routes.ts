import { Router } from "express";
import twilio from "twilio"
import 'dotenv/config'


const cl = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const MessagingResponse = twilio.twiml.MessagingResponse;
const whatsappRoutes = Router();

interface Conversation{
    number: string;
    name: string;
}

const converstations: Conversation[] = [];
const inicialTexts = ["Olá", "Seja bem vindo", "Como vai?", "Eai?", "Converser comigo", "Está tudo bem?"]
const secondTexts = ["Entendi", "Compreendo", "Hmm, interessante", "Ok então", "Faz sentido"]

whatsappRoutes.post("/", (request, response) => { 
    const {WaId, ProfileName} = request.body;
    const twiml = new MessagingResponse();
    console.log(request.body)
    //console.log(`Incoming message from ${request.body.From}: ${request.body.Body}`);
    const alreadExist = converstations.find((number) => number.number == WaId )
    const num = Math.floor(Math.random() * 6);

    if(alreadExist){
        twiml.message(alreadExist.name + " " +  secondTexts[num]);
    }else{
        converstations.push({number: WaId, name: ProfileName});
        twiml.message(inicialTexts[num]);

    }
  
    response.writeHead(200, {'Content-Type': 'text/xml'});
    response.end(twiml.toString());   
})

export{whatsappRoutes}