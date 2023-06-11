"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
// import * as bodyParser from "body-parser";
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes/");
const config_json_1 = __importDefault(require("./config.json"));
const adminVideoRouter_1 = require("./routes/adminVideoRouter");
let cors = require("cors");
const app = (0, express_1.default)();
dotenv.config();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cors());
app.use("/nodeapi/channel", routes_1.channelRouter);
app.use("/nodeapi/adminvideo", adminVideoRouter_1.adminVideoRouter);
config_json_1.default;
app.listen(config_json_1.default.app.port, () => {
    console.log(`app is running at http://${process.env.HOST}:${config_json_1.default.app.port}`);
});
// app.listen(config.app.port, () => {
//     console.log(`Node server started running on port : ${config.app.port}`);
// });
