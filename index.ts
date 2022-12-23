import express, { Express } from 'express';

import cors from "cors";
import path from "path"

import corsConfiguration from "./configuration/corsConfiguration"

import apiApp from './src/api';
import webApp from './src/web';

import dotenv from 'dotenv';
import vhost from "vhost"

dotenv.config();

const defPort = "8080"
const app: Express = express();

app.use(cors(corsConfiguration));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(vhost("*.*", apiApp));
app.use(vhost("*", webApp));

app.listen(parseInt(process.env.PORT ?? defPort), () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT ?? defPort}`);
});