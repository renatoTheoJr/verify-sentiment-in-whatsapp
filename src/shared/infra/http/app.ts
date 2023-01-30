import express from "express"
import { router } from "./routes"
import { urlencoded } from "body-parser";



const app = express()
app.use(urlencoded({ extended: false }));
app.use(router)

export { app }