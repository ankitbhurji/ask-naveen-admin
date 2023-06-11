import { Router } from "express";
import {channelRouter} from './channelRouter'
import { adminVideoRouter } from "./adminVideoRouter";
import { settingRouter } from "./settingRouter";
const routes = Router();
routes.use(channelRouter);
routes.use(adminVideoRouter)
routes.use(settingRouter)

export{
    channelRouter,
    adminVideoRouter,
    settingRouter
}