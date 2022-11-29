import express, { Express } from 'express';

import cors from "cors";
import path from "path"

import apiRouter from "./routes/api"
import webRouter from "./routes/web"

import corsConfiguration from "./configuration/corsConfiguration"

import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();

app.use(cors(corsConfiguration));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);
app.use("/", webRouter);

app.listen(parseInt(process.env.PORT ?? "8080"), () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT ?? "8080"}`);
});