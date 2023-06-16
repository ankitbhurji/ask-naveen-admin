"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRouter = void 0;
const express_1 = __importDefault(require("express"));
const videoModel_1 = require("../models/videoModel");
const videoRouter = express_1.default.Router();
exports.videoRouter = videoRouter;
const vModel = new videoModel_1.videoModel();
videoRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tableSetting } = req.query;
    if (tableSetting) {
        try {
            const tableSettingJSON = JSON.parse(`${tableSetting}`);
            const videoRes = yield vModel.findByLimit(tableSettingJSON);
            res.status(200).json({ 'data': videoRes });
        }
        catch (error) {
            console.log('error', error);
            res.status(400).json({ 'data': error });
        }
    }
}));
videoRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const videoRes = yield vModel.findOne(+id);
        res.status(200).json({ 'data': videoRes });
    }
    catch (error) {
        console.error('error: ', error);
        res.status(400).json({ "data": error });
    }
}));
videoRouter.put('/updateone', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const channelDetails = req.body;
        const videoRes = yield vModel.updateOne(channelDetails);
        res.status(200).send(`update ${videoRes} record`);
    }
    catch (error) {
        console.error('error: ', error);
        res.status(400).json({ "data": error });
    }
}));
videoRouter.get('/length/:status', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status } = req.params;
    try {
        const videoRes = yield vModel.findDataLength(status);
        res.status(200).send({ 'length': videoRes });
    }
    catch (error) {
        console.error('error: ', error);
        res.status(400).json({ "data": error });
    }
}));
