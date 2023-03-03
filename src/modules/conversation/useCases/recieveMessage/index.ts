import { ChatRepository } from "../../repositories/ChatRepository";
import { RecieveMessageUseCase } from "./RecieveMessageUseCase";
import { RecieveMessageController } from "./RecieveMessageController";

const chatsRepository = ChatRepository.getInstance();
const recieveMessageUseCase = new RecieveMessageUseCase(chatsRepository);
const recieveMessageController = new RecieveMessageController(recieveMessageUseCase);

export {recieveMessageController}