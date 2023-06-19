import express, {Request, Response, response} from "express";
const adminVideoRouter = express.Router();
import { adminVideoModel } from "../models/adminVideoModel";
const avModel = new adminVideoModel()


adminVideoRouter.post('/insertone', async(req:Request, res:Response)=>{
    const details = req.body
    try{
        const adminVideoRes = await avModel.createOne(details)
        res.status(200).send(`${adminVideoRes}th record created`)   
    }catch (err) {
        console.log("error:", err);
        res.status(400).json({'data':err})
    }
})
adminVideoRouter.get('/', async(req, res)=>{ 
    const {tableSetting} = req.query
    if(tableSetting){
        try {
            const pageInfoJSON = JSON.parse(`${tableSetting}`)
            const adminVideoRes = await avModel.findByLimit(pageInfoJSON)
            res.status(200).json({'data':adminVideoRes})
        }catch (error) {
            console.error('error: ', error);
            res.status(400).json({"data": error});
        }
    }
    // const tableSetting = req.body
    // try{
    //     const adminVideoRes = await avModel.findByLimit(tableSetting)
    //     res.status(200).json({"data":adminVideoRes})
    // }catch(err){
    //     res.status(400).json({'data': err})
    // }
})
adminVideoRouter.get('/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const adminVideoRes = await avModel.findOne(id)
        res.status(200).json({'data':adminVideoRes})
    }catch(err){
        console.log('error:',err);
        res.status(400).json({'data':err})
    }
})
adminVideoRouter.post('/updateone', async(req, res)=>{
    const adminVideoDetails = req.body
    try{
        const adminVideoRes = await avModel.updateOne(adminVideoDetails)
        res.status(200).json({'data':adminVideoRes})
    }catch(err){
        console.log('error', err);
        res.status(400).json({"data":err})
    }
})
adminVideoRouter.get('/length/:status', async(req, res)=>{
    const {status} = req.params
    try{
        const adminvideoRes = await avModel.findDataLength(status)
        res.status(200).send({'length':adminvideoRes})
    }catch(err){
        console.log('error:', err);
        res.status(400).json({"data":err})
    }

    // const {tableSetting} = req.query 
    // const tableSettingJSON = JSON.parse(`${tableSetting}`)
    // try{
    //     const adminVideoRes = await avModel.findDataLength(tableSettingJSON)
    //     res.status(200).send({'length':adminVideoRes})
    // }catch(err){
    //     console.log(err);
    // }
})
adminVideoRouter.put('/delete/:id', async(req:Request, res:Response)=>{
    const {id} = req.params
    try{
        const adminVideoRes = await avModel.delete(id)
        res.status(200).send(adminVideoRes)
    }catch(err){
        console.log("error:", err);
        res.status(400).json({"data":err})
    }
})
adminVideoRouter.delete('/remove/:id', async(req:Request, res:Response)=>{
    const {id} = req.params
    try{
        const adminVideoRes = await avModel.remove(id)
        res.status(200).send(adminVideoRes)
    }catch(err){
        console.log("error:", err);
        res.status(400).json({"data":err})
    }
})
// adminVideoRouter.get('/search/:searchField', async(req, res)=>{
//     const {searchField} = req.params
//     try{
//         const adminVideoRes = await avModel.findSearch(searchField)
//         res.status(200).json({"data":adminVideoRes})
//     }catch(err){
//         console.log("error:", err);
//         res.status(400).json({"data":err})
//     }
// })

export {adminVideoRouter}