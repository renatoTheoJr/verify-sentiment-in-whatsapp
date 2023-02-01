import { Chat } from "../entities/Chat";
import { ICreateChatDTO } from "../dtos/ICreateChatDTO";
interface IChat {
    create (data: ICreateChatDTO): Chat;
    findByPhone(phone: string): Chat;
    updateChat(message?: string, send_by?: string, finisih?: boolean) : Chat;
}