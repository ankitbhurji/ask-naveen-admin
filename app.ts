import * as dotenv from "dotenv";
import express from "express";
// import * as bodyParser from "body-parser";
import bodyParser from 'body-parser'
import {channelRouter} from "./routes/";
import config from './config.json';
import { adminVideoRouter } from "./routes/adminVideoRouter";
let cors = require("cors");

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.use("/nodeapi/channel", channelRouter);
app.use("/nodeapi/adminvideo", adminVideoRouter )
config


app.listen(config.app.port, () => {
    console.log(`app is running at http://${process.env.HOST}:${config.app.port}`);
});

// app.listen(config.app.port, () => {
//     console.log(`Node server started running on port : ${config.app.port}`);
// });