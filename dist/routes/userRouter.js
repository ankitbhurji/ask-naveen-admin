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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userModel_1 = require("../models/userModel");
const validationHelper_1 = require("../helpers/validationHelper");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const userModelObj = new userModel_1.userModel();
const vh = validationHelper_1.ValidationHelper.singleton;
// userRouter.get("/", async (req: Request, res: Response) => {
//   try{
//     const channelRes = await chModel.findAll();
//     res.status(200).json({"data": channelRes});
//   }catch (error) {
//     console.error('error: ', error);
//     res.status(400).json({"data": error});
//   }
// });
// userRouter.post("/", async (req: Request, res: Response) => {
//   const newOrder: BasicOrder = req.body;
//   orderModel.create(newOrder, (err: Error, orderId: number) => {
//     if (err) {
//       return res.status(500).json({"message": err.message});
//     }
//     res.status(200).json({"orderId": orderId});
//   });
// });
// userRouter.get("/:channel", async (req: Request, res: Response) => {
//   const {channel} = req.params;
//   try{
//     const channelRes = await chModel.findOne(channel);
//     res.status(200).json({"data": channelRes});
//   }catch (error) {
//     console.error('error: ', error);
//     res.status(400).json({"data": error});
//   }
//});
userRouter.post("/registration", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validationResult = vh.userPostPutRequest(req.body, "body");
    if (validationResult.invalid) {
        const reason = validationResult.reason[0];
        res.status(417).send({ status: "ValidationFailure", message: reason });
    }
    const newUser = validationResult.data;
    try {
        const userId = yield userModelObj.create(newUser);
        res.status(200).json({ "orderId": userId });
    }
    catch (_a) {
        return res.status(500).json({ "message": "something went wrong" });
    }
}));
