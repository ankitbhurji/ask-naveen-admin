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
exports.settingRouter = void 0;
const express_1 = __importDefault(require("express"));
const settingModel_1 = require("../models/settingModel");
const settingRouter = express_1.default.Router();
exports.settingRouter = settingRouter;
const stModel = new settingModel_1.settingModel();
settingRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {page, pagelimit} = req.params
    // const settingRes  = await stModel.findByLimit(page, pagelimit)
    // res.send({'data':settingRes})
    const tableSetting = req.body;
    try {
        const adminVideoRes = yield stModel.findByLimit(tableSetting);
        res.status(200).json({ "data": adminVideoRes });
    }
    catch (err) {
        res.status(400).json({ 'data': err });
    }
}));
settingRouter.get('/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const settingRes = yield stModel.findOne(id);
    res.status(200).json({ 'data': settingRes });
}));
settingRouter.post('/updateone', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const settingDetails = req.body;
    const settingRes = yield stModel.updateOne(settingDetails);
    res.status(200).json({ 'data': settingRes });
}));
settingRouter.get('/length', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const settingRes = yield stModel.findDataLength();
    res.status(200).send({ 'length': settingRes });
}));
settingRouter.get('/:settingkey', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { settingkey } = req.params;
    const settingRes = yield stModel.findSettingValue(settingkey);
    res.send(settingRes);
}));
settingRouter.get('/search/:searchField', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchField } = req.params;
    const settingRes = yield stModel.findSearch(searchField);
    res.status(200).json({ 'data': settingRes });
}));
