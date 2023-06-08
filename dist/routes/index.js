"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelRouter = void 0;
const express_1 = require("express");
const channelRouter_1 = require("./channelRouter");
Object.defineProperty(exports, "channelRouter", { enumerable: true, get: function () { return channelRouter_1.channelRouter; } });
const routes = (0, express_1.Router)();
routes.use(channelRouter_1.channelRouter);
