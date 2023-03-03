import { ICreateChatDTO } from "../dtos/ICreateChatDTO";
import { Chat } from "../entities/Chat";
import { Message } from "../entities/Message";
import { IChatRepository } from "./IChatRepository";

class ChatRepository implements IChatRepository{
    private static INSTANCE: ChatRepository;
    private chats: Chat[];
    private inicialTexts = ["Olá", "Seja bem vindo", "Como vai?", "Eai?", "Converse comigo", "Está tudo bem?"]
    private secondTexts = ["Que bom que você voltou", "Entendi", "Vou tentar te entender", "Faz sentido", "Ok, entendi", "Hmm, entendi o que você quis dizer"];

    private constructor() {
        this.chats = [];

      }
    
    
      public static getInstance(): ChatRepository {
        if (!ChatRepository.INSTANCE) {
            ChatRepository.INSTANCE = new ChatRepository();
        }
    
        return ChatRepository.INSTANCE;
    }


    create({text, send_by, phone}: ICreateChatDTO): Message {
        console.log("teste")
        const chat = new Chat();
        const message = new Message();
        Object.assign(message, {
            text,
            send_by,
            hour: new Date(),
        })
        const messages: Message[] = [];
        messages.push(message);
        Object.assign(chat,{
            messages, send_by, phone,
            created_at: new Date(),
            updated_at: new Date(),
            finish: false
        })
        const num = Math.floor(Math.random() * 6);
        const newMessage = new Message();
        
        newMessage.message =this.inicialTexts[num];
        newMessage.hour = new Date();
        newMessage.send_by = "BOT";
        chat.messages.push(newMessage);
        chat.update_at = new Date();
        this.chats.push(chat);
        return newMessage;
    }

    findOpenByPhone(phone: string): Chat | undefined {
        const chat = this.chats.find((chat) => chat.phone === phone && chat.finisih === false)
        return chat;
    }

    updateChat(phone: string, text?: string | undefined, send_by?: string | undefined, finisih?: boolean | undefined): Message {
        const chat = this.chats.find((chat) => chat.phone === phone && chat.finisih === false)
        if(!chat){
            throw new Error("Must created a chat first");
        }
        const message = new Message();
        Object.assign(message, {
            text,
            send_by,
            hour: new Date(),
        })
        chat.messages.push(message)
        const num = Math.floor(Math.random() * 6);
        const newMessage = new Message();
        
        newMessage.message =this.secondTexts[num];
        newMessage.hour = new Date();
        newMessage.send_by = "BOT";
        chat.messages.push(newMessage);
        chat.update_at = new Date();
        this.chats.push(chat);
        return newMessage;
    }

}

export {ChatRepository}