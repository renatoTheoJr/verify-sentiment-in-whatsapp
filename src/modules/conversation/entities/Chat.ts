import {v4 as uuidv4} from "uuid"
import { Message } from "./Message";

class Chat{
    id?: string;
    created_at?: Date;
    update_at?: Date;
    messages: Message[];
    phone?: string;
    finisih?: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
            this.finisih = false;
        }
    }
}

export {Chat}