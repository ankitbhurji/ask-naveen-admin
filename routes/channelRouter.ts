import express, {Request, Response} from "express";
import {channelModel} from "../models/channelModel";
const channelRouter = express.Router();
const chModel = new channelModel();

channelRouter.get("/", async (req: Request, res: Response) => {
  try{
    const channelRes = await chModel.findAll();
    res.status(200).json({"data": channelRes});
  }catch (error) {
    console.error('error: ', error);
    res.status(400).json({"data": error});
  }
});

// channelRouter.post("/", async (req: Request, res: Response) => {
//   const newOrder: BasicOrder = req.body;
//   orderModel.create(newOrder, (err: Error, orderId: number) => {
//     if (err) {
//       return res.status(500).json({"message": err.message});
//     }

//     res.status(200).json({"orderId": orderId});
//   });
// });

channelRouter.get("/:channel", async (req: Request, res: Response) => {
  const {channel} = req.params;
  try{
    const channelRes = await chModel.findOne(channel);
    res.status(200).json({"data": channelRes});
  }catch (error) {
    console.error('error: ', error);
    res.status(400).json({"data": error});
  }
});

export {channelRouter};