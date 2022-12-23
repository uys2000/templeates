import express from "express"
import apiRouter from "./routes/api"

const apiApp = express();

apiApp.use("/", express.static("public/api"));
apiApp.use("/", apiRouter)

export default apiApp
