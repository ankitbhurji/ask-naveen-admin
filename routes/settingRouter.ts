import express, {Request, Response} from "express";
import { settingModel } from "../models/settingModel";
const settingRouter = express.Router();
const stModel = new settingModel()

settingRouter.get('/', async(req, res)=>{
    // const {page, pagelimit} = req.params
    // const settingRes  = await stModel.findByLimit(page, pagelimit)
    // res.send({'data':settingRes})

    const tableSetting = req.body
    try{
        const adminVideoRes = await stModel.findByLimit(tableSetting)
        res.status(200).json({"data":adminVideoRes})
    }catch(err){
        res.status(400).json({'data': err})
    }
})
settingRouter.get('/find/:id', async(req, res)=>{
    const {id} = req.params
    const settingRes = await stModel.findOne(id)
    res.status(200).json({'data':settingRes})
})
settingRouter.post('/updateone', async(req, res)=>{
    const settingDetails = req.body
    const settingRes = await stModel.updateOne(settingDetails)
    res.status(200).json({'data':settingRes})
})

settingRouter.get('/length', async(req, res)=>{
    const settingRes = await stModel.findDataLength()
    res.status(200).send({'length':settingRes})
})

settingRouter.get('/:settingkey', async(req, res)=>{
    const {settingkey}  = req.params
    const settingRes = await stModel.findSettingValue(settingkey)
    res.send(settingRes)
})

settingRouter.get('/search/:searchField', async(req, res)=>{
    const {searchField} = req.params
    const settingRes = await stModel.findSearch(searchField)
    res.status(200).json({'data':settingRes})
})

export {settingRouter}