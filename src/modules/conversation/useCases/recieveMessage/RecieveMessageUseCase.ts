import { IChatRepository } from "../../repositories/IChatRepository";


interface IRequest{
    text: string;
    send_by: string;
    phone: string;
}

class RecieveMessageUseCase{
    constructor( 
        private chatsRepository: IChatRepository
    ){}
    execute({text, send_by, phone}: IRequest): String{
        console.log("aaaaaa");
        const chat = this.chatsRepository.findOpenByPhone(phone)
        if(!chat ){
            const message = this.chatsRepository.create({send_by, text, phone});
            console.log(message);
            return message.message;
        }else{
            const message = this.chatsRepository.updateChat(phone, text, send_by);
            return message.message;
        }
    }
}

export {RecieveMessageUseCase};