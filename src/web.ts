import express from "express"
import webRouter from "./routes/web"

const webApp = express();

webApp.use("/", express.static("public/web"));
webApp.use("/", webRouter)

export default webApp