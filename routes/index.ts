import { Router } from "express";
import {channelRouter} from './channelRouter'
const routes = Router();
routes.use(channelRouter);
export{channelRouter}