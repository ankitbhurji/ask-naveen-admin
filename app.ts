import * as dotenv from "dotenv";
import express from "express";
// import * as bodyParser from "body-parser";
import bodyParser from 'body-parser'
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import {channelRouter} from "./routes/";
import { adminVideoRouter } from "./routes/adminVideoRouter";
import { settingRouter } from "./routes/settingRouter";
import config from './config/index';
//Middleware
import { authorize } from "./middlewares/jwtMiddleware";

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));


app.use("/nodeapi/channel", channelRouter);
app.use("/nodeapi/adminvideo", adminVideoRouter)
app.use('/nodeapi/setting', settingRouter)
config


app.listen(config.port, () => {
    console.log(`Node server started running on port : ${config.port}`);
});