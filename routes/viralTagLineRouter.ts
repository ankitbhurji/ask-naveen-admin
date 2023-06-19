import express, {Request, Response, response} from "express";
const viralTagLineRouter = express.Router();
import { viralTagLineModel } from "../models/viralTagLineModel"; 
const vtlModel = new viralTagLineModel

viralTagLineRouter.post('/insertone', async(req:Request, res:Response)=>{
    try{
        const details = req.body
        const viralTagLineRes = await vtlModel.createOne(details)
        res.status(200).send(`${viralTagLineRes}th record created`)   
    }catch (err) {
        console.log("error:", err);
        res.status(400).json({'data':err})
    }
})

viralTagLineRouter.get('/', async(req:Request, res:Response)=>{
    try {
        const {tableSetting} = req.query
        const tableSettingJSON = JSON.parse(`${tableSetting}`)
        const viralTagLineRes = await vtlModel.findByLimit(tableSettingJSON)
        res.status(200).json({'data':viralTagLineRes})
    }catch (error) {
        console.error('error: ', error);
        res.status(400).json({"data": error});
    }
})

export {viralTagLineRouter}
