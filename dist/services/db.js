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
exports.db = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const config_json_1 = __importDefault(require("../config.json"));
const env = process.env.NODE_ENV || "dev";
let dbDetail;
if (env === "prod") {
    dbDetail = config_json_1.default.dbDetail.prod;
}
else {
    dbDetail = config_json_1.default.dbDetail.dev;
}
exports.db = mysql2_1.default.createConnection({
    host: dbDetail.DB_HOST,
    user: dbDetail.DB_USER,
    password: dbDetail.DB_PWD,
    database: dbDetail.DB_NAME
});
exports.db.connect(function (err) {
    if (err)
        console.log('database not connected');
    else
        console.log('connected');
    // console.log('conected');
});
