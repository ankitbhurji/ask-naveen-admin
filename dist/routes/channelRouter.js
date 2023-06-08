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
exports.channelRouter = void 0;
const express_1 = __importDefault(require("express"));
const channelModel_1 = require("../models/channelModel");
const channelRouter = express_1.default.Router();
exports.channelRouter = channelRouter;
const chModel = new channelModel_1.channelModel();
channelRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const channelRes = yield chModel.findAll();
        res.status(200).json({ "data": channelRes });
    }
    catch (error) {
        console.error('error: ', error);
        res.status(400).json({ "data": error });
    }
}));
// channelRouter.post("/", async (req: Request, res: Response) => {
//   const newOrder: BasicOrder = req.body;
//   orderModel.create(newOrder, (err: Error, orderId: number) => {
//     if (err) {
//       return res.status(500).json({"message": err.message});
//     }
//     res.status(200).json({"orderId": orderId});
//   });
// });
channelRouter.get("/:channel", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { channel } = req.params;
    try {
        const channelRes = yield chModel.findOne(channel);
        res.status(200).json({ "data": channelRes });
    }
    catch (error) {
        console.error('error: ', error);
        res.status(400).json({ "data": error });
    }
}));
