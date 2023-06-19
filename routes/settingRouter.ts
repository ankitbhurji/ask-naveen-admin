import express, {Request, Response} from "express";
import { settingModel } from "../models/settingModel";
const settingRouter = express.Router();
const stModel = new settingModel()

settingRouter.post('/', async(req, res)=>{
    try{
        const tableSetting = req.body
        const adminVideoRes = await stModel.findByLimit(tableSetting)
        res.status(200).json({"data":adminVideoRes})
    }catch(err){
        console.log('error:',err);
        res.status(400).json({'data': err})
    }
})
settingRouter.get('/:id', async(req, res)=>{   
    try {
        const {id} = req.params
        const settingRes = await stModel.findOne(id)
        res.status(200).json({'data':settingRes})
    } catch (err) {
        console.log('error:',err);
        res.status(400).json({'data': err})
    }
})
settingRouter.post('/updateone', async(req, res)=>{
    try {
        const settingDetails = req.body
        console.log(settingDetails);
        const settingRes = await stModel.updateOne(settingDetails)
        res.status(200).json({'data':settingRes})
    } catch (err) {
        console.log('error:',err);
        res.status(400).json({'data': err})
    }
})
settingRouter.get('/length/all', async(req, res)=>{
    try {
        const settingRes = await stModel.findDataLength()
        res.status(200).send({'length':settingRes})
    } catch (err) {
        console.log('error:',err);
        res.status(400).json({'data': err})
    }
})
settingRouter.get('/settingvalue/:settingkey', async(req, res)=>{
    try {
        const {settingkey}  = req.params
        const settingRes = await stModel.findSettingValue(settingkey)
        res.send(settingRes)
    } catch (err) {
        console.log('error:',err);
        res.status(400).json({'data': err})
    }
})


// settingRouter.get('/search/:searchField', async(req, res)=>{
//     try {
//         const {searchField} = req.params
//         const settingRes = await stModel.findSearch(searchField)
//         res.status(200).json({'data':settingRes})
//     } catch (err) {
//         console.log('error:',err);
//         res.status(400).json({'data': err})
//     }
// })

export {settingRouter}