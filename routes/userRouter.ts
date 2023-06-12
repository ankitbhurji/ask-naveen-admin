import express, {Request, Response} from "express";
import jwt from 'jsonwebtoken';
import config from '../config/index';
import {userModel} from "../models/userModel";
import{IUserType,IUserPutPostDataType} from '../interfaces/IUserType';
import { ValidationHelper } from "../helpers/validationHelper";
import moment from 'moment';
const userRouter = express.Router();
const userModelObj = new userModel();
const vh = ValidationHelper.singleton;

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

userRouter.post("/registration", async (req: Request, res: Response) => {
  const validationResult = vh.userPostPutRequest(req.body,"body");
  if(validationResult.invalid){
    const reason = validationResult.reason[0];
    return res.status(417).json({status:"ValidationFailure",message:reason});
  }
  const newUser = validationResult.data;
  const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm'; 
  newUser.addDateTime = String(moment(new Date(), DATE_TIME_FORMAT));
  newUser.addIpAddress = req.ip;
  try{
    const userId = await userModelObj.create(newUser);
    return res.status(200).json({status:"success","message": "Registration successfully."});
  }catch{
    return res.status(500).json({status:"fail","message": "something went wrong"});
  }
    
});

userRouter.post("/login", async (req: Request, res: Response) => {
  const validationResult = vh.userloginRequest(req.body,"body");
  if(validationResult.invalid){
    const reason = validationResult.reason[0];
    return res.status(417).json({status:"ValidationFailure",message:reason});
  }
  const {email,otp} = validationResult.data;
  const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm'; 
  //newUser.addDateTime = String(moment(new Date(), DATE_TIME_FORMAT));
  //newUser.addIpAddress = req.ip;
  try{
    const user = await userModelObj.login(email,otp);
    const token = await jwt.sign({id:3443,email:'gdfgfd'},config.jwt.secret);
    return res.status(200).json({status:"success","message": "Registration successfully."});
  }catch{
    return res.status(500).json({status:"fail","message": "something went wrong"});
  }
    
});

userRouter.post("/getotp", async (req: Request, res: Response) => {
  /*const validationResult = vh.userPostPutRequest(req.body,"body");
  if(validationResult.invalid){
    const reason = validationResult.reason[0];
    return res.status(417).json({status:"ValidationFailure",message:reason});
  }
  const newUser = validationResult.data;
  const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm'; 
  newUser.addDateTime = String(moment(new Date(), DATE_TIME_FORMAT));
  newUser.addIpAddress = req.ip;
  try{
    const userId = await userModelObj.create(newUser);
    return res.status(200).json({status:"success","message": "Registration successfully."});
  }catch{
    return res.status(500).json({status:"fail","message": "something went wrong"});
  }*/
    
})

export {userRouter};