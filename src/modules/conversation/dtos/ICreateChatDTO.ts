interface ICreateChatDTO{
    id?: string;
    message: string;
    send_by: string;
    phone?: string;
}

export {ICreateChatDTO}