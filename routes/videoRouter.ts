import express, {Request, Response, response} from "express";
import { videoModel } from "../models/videoModel";
const videoRouter = express.Router();

videoRouter.get('/', async(req:Request, res:Response)=>{
    res.send('testing video.')
})



export {videoRouter}