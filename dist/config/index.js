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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const prfix = "nj_";
const config = {
    jwt: {
        // The secret is used to sign and validate signatures.
        secret: process.env.JWT_SECRET || '111',
        // The audience and issuer are used for validation purposes.
        //audience: process.env.JWT_AUDIENCE,
        //issuer: process.env.JWT_ISSUER
    },
    port: process.env.PORT || 9721,
    dbDetail: {
        dev: {
            DB_HOST: "localhost",
            DB_USER: "root",
            DB_PWD: "root",
            DB_NAME: "liclic_licdb"
        },
        prod: {
            DB_HOST: "10.250.0.18",
            DB_USER: "liclicl",
            DB_PWD: "gererou^5%gfGFt8",
            DB_NAME: "liclic_licdb"
        },
        local: {
            DB_HOST: 'localhost',
            DB_USER: 'root',
            DB_PWD: '',
            DB_NAME: 'asknaveen'
        }
    },
    tablenames: {
        channel: prfix + "channel",
        channelHistory: prfix + "channel_history",
        user: prfix + "users"
    }
};
// Make our confirmation object available to the rest of our code.
exports.default = config;
