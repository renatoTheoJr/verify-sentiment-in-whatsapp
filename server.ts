import express from "express"
import twilio from "twilio"
import http from "http"
import 'dotenv/config'
import { urlencoded } from "body-parser";


const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client= twilio(accountSid, authToken);
const MessagingResponse = twilio.twiml.MessagingResponse;
const app = express()
app.use(urlencoded({ extended: false }));



const messages = ["Olá", "Seja bem vindo", "Como vai?", "Eai?", "Converser comigo", "Está tudo bem?"]

app.post("/sms", (request, response) => { 
    const twiml = new MessagingResponse();
   
    console.log(`Incoming message from ${request.body.From}: ${request.body.Body}`);
    const num = Math.floor(Math.random() * 6);

    twiml.message(messages[num]);
  
    response.writeHead(200, {'Content-Type': 'text/xml'});
    response.end(twiml.toString());   
})

app.get("/recieve", (request, response) => {
    console.log("teste", request)
    return response.send()
})

http.createServer(app).listen(3333, () => {
    console.log('Express server listening on port 3333');
  });