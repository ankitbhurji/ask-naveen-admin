import { Router } from "express";
import {channelRouter} from './channelRouter'
import { adminVideoRouter } from "./adminVideoRouter";
import { settingRouter } from "./settingRouter";
import {userRouter} from "./userRouter";
const routes = Router();
routes.use(channelRouter);
routes.use(adminVideoRouter)
routes.use(settingRouter)

export{
    channelRouter,
    adminVideoRouter,
    settingRouter,
    userRouter
}