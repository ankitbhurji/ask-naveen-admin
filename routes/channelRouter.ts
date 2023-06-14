import express, {Request, Response, response} from "express";
import {channelModel} from "../models/channelModel";
const channelRouter = express.Router();
const chModel = new channelModel();

channelRouter.get('/', async(req:Request, res:Response)=>{
  const {pageInfo} = req.query
  if(pageInfo){
    try {
      const pageInfoJSON = JSON.parse(`${pageInfo}`)
      const channelRes = await chModel.findByLimit(pageInfoJSON)
      res.status(200).json({'data':channelRes})
    } catch (error) {
      console.error('error: ', error);
      res.status(400).json({"data": error});
    }
  }else{
    res.send('params missing.')
  }
})
channelRouter.get('/:id', async(req:Request, res:Response)=>{
  try {
    const {id} = req.params
    const channelRes = await chModel.findOne(+id)
    res.status(200).json({'data':channelRes})
  } catch (error) {
    console.error('error: ', error);
    res.status(400).json({"data": error});
  }
})
channelRouter.post('/updateone', async(req:Request, res:Response)=>{
  try {
    const channelDetails = req.body
    const channelRes = await chModel.updateOne(channelDetails)
  } catch (error) {
    console.error('error: ', error);
    res.status(400).json({"data": error});
  }
})
channelRouter.get('/length/:status', async(req:Request, res:Response)=>{
  const {status} = req.params
  try {
    const channelRes = await chModel.findDataLength(status)
    res.status(200).send({'length':channelRes})
  } catch (error) {
    console.error('error: ', error);
    res.status(400).json({"data": error});
  }
})
channelRouter.get('/search/:searchField', async(req:Request, res:Response)=>{
  try {
  const {searchField} = req.params
    const channelRes = await chModel.findSearch(searchField)
    res.status(200).send({"data": channelRes})
  } catch (error) {
    console.error('error: ', error);
    res.status(400).json({"data": error});
  }
})

// channelRouter.get("/", async (req: Request, res: Response) => {
//   try{
//     const channelRes = await chModel.findAll();
//     res.status(200).json({"data": channelRes});
//   }catch (error) {
//     console.error('error: ', error);
//     res.status(400).json({"data": error});
//   }
// });

// channelRouter.post("/", async (req: Request, res: Response) => {
//   const newOrder: BasicOrder = req.body;
//   orderModel.create(newOrder, (err: Error, orderId: number) => {
//     if (err) {
//       return res.status(500).json({"message": err.message});
//     }

//     res.status(200).json({"orderId": orderId});
//   });
// });

// channelRouter.get("/:channel", async (req: Request, res: Response) => {
//   const {channel} = req.params;
//   try{
//     const channelRes = await chModel.findOne(channel);
//     res.status(200).json({"data": channelRes});
//   }catch (error) {
//     console.error('error: ', error);
//     res.status(400).json({"data": error});
//   }
// });

export {channelRouter};