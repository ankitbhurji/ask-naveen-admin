import express, {Request, Response, response} from "express";
import { videoModel } from "../models/videoModel";
const videoRouter = express.Router();
const vModel = new videoModel()


videoRouter.get('/', async(req:Request, res:Response)=>{
    const {tableSetting} = req.query
    if(tableSetting){
        try {
            const tableSettingJSON = JSON.parse(`${tableSetting}`)
            const videoRes = await vModel.findByLimit(tableSettingJSON)
            res.status(200).json({'data':videoRes})
        } catch (error) {
            console.log('error', error);
            res.status(400).json({'data':error})
        }
    }
})



export {videoRouter}