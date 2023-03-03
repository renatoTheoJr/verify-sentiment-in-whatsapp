import { Chat } from "../entities/Chat";
import { ICreateChatDTO } from "../dtos/ICreateChatDTO";
import { Message } from "../entities/Message";
interface IChatRepository {
    create ({send_by, text, phone}: ICreateChatDTO): Message;
    findOpenByPhone(phone: string): Chat | undefined;
    updateChat(phone: string, text?: string, send_by?: string, finisih?: boolean) : Message;
}

export {IChatRepository}