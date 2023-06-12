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
exports.adminVideoRouter = void 0;
const express_1 = __importDefault(require("express"));
const adminVideoRouter = express_1.default.Router();
exports.adminVideoRouter = adminVideoRouter;
const adminVideoModel_1 = require("../models/adminVideoModel");
const avModel = new adminVideoModel_1.adminVideoModel();
adminVideoRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tableSetting = req.body;
    try {
        const adminVideoRes = yield avModel.findByLimit(tableSetting);
        res.status(200).json({ "data": adminVideoRes });
    }
    catch (err) {
        console.log("error:", err);
        res.status(400).json({ 'data': err });
    }
}));
adminVideoRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const adminVideoRes = yield avModel.findOne(id);
        res.status(200).json({ 'data': adminVideoRes });
    }
    catch (err) {
        console.log('error:', err);
        res.status(400).json({ 'data': err });
    }
}));
adminVideoRouter.post('/updateone', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adminVideoDetails = req.body;
    try {
        const adminVideoRes = yield avModel.updateOne(adminVideoDetails);
        res.status(200).json({ 'data': adminVideoRes });
    }
    catch (err) {
        console.log('error', err);
        res.status(400).json({ "data": err });
    }
}));
adminVideoRouter.get('/length/:status', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status } = req.params;
    try {
        const adminvideoRes = yield avModel.findDataLength(status);
        res.status(200).send({ 'length': adminvideoRes });
    }
    catch (err) {
        console.log('error:', err);
        res.status(400).json({ "data": err });
    }
}));
adminVideoRouter.post('/insertone', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const details = req.body;
    try {
        const adminVideoRes = yield avModel.createOne(details);
        res.status(200).send(`${adminVideoRes}th record created`);
    }
    catch (err) {
        console.log("error:", err);
        res.status(400).json({ 'data': err });
    }
}));
adminVideoRouter.put('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const adminVideoRes = yield avModel.delete(id);
        res.status(200).send(adminVideoRes);
    }
    catch (err) {
        console.log("error:", err);
        res.status(400).json({ "data": err });
    }
}));
adminVideoRouter.delete('/remove/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const adminVideoRes = yield avModel.remove(id);
        res.status(200).send(adminVideoRes);
    }
    catch (err) {
        console.log("error:", err);
        res.status(400).json({ "data": err });
    }
}));
adminVideoRouter.get('/search/:searchField', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchField } = req.params;
    try {
        const adminVideoRes = yield avModel.findSearch(searchField);
        res.status(200).json({ "data": adminVideoRes });
    }
    catch (err) {
        console.log("error:", err);
        res.status(400).json({ "data": err });
    }
}));
