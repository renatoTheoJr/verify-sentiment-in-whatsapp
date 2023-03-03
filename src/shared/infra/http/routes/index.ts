import {Router} from "express"
import { whatsappRoutes } from "./whatsapp.routes";
import { telegramRoutes } from "./telegram.routes";

const router = Router();

router.use("/whatsapp",whatsappRoutes);
router.use("/telegram", telegramRoutes)
export{router}