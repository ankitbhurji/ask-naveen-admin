"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../config/index"));
const authorize = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decode = jsonwebtoken_1.default.verify(token, index_1.default.jwt.secret);
        req.body.user = decode;
    }
    catch (_a) {
        res.status(401).send({ message: "Invalid request!" });
    }
};
exports.authorize = authorize;
