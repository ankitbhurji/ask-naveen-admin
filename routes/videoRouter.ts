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

videoRouter.get('/:id', async(req:Request, res:Response)=>{
    try {
        const {id} = req.params
        const videoRes = await vModel.findOne(+id)
        res.status(200).json({'data':videoRes})
      } catch (error) {
        console.error('error: ', error);
        res.status(400).json({"data": error});
      }
})

videoRouter.put('/updateone', async(req:Request, res:Response)=>{
    try {
      const channelDetails = req.body
      const videoRes = await vModel.updateOne(channelDetails)
      res.status(200).send(`update ${videoRes} record`)
    } catch (error) {
      console.error('error: ', error);
      res.status(400).json({"data": error});
    }
  })

videoRouter.get('/length/:status', async(req:Request, res:Response)=>{
  try{
      const {status} = req.params
      const videoRes = await vModel.findDataLength(status) 
      res.status(200).send({'length':videoRes})
    }catch(error){
      console.error('error: ', error);
      res.status(400).json({"data": error});
    }
  })


export {videoRouter}