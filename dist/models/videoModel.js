"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoModel = void 0;
const db_1 = __importDefault(require("../services/db"));
class videoModel {
    constructor() {
        this.findByLimit = (tableSetting) => {
            console.log(tableSetting);
            const status = tableSetting.tableStatus;
            const limit = tableSetting.pageLimit;
            const page = tableSetting.page;
            const search = tableSetting.search;
            const orderBy = tableSetting.orderBy;
            const sortBy = tableSetting.sortBy;
            const statusStr = status == 'Y' ? status : status == 'N' ? status : 'Y';
            const limitStr = limit ? limit : 10;
            const pageStr = page ? page : 0;
            const searchStr = search != '' ? ` and search like '%${search}%'` : ``;
            const orderByStr = orderBy == 'ascending' ? 'ASC' : orderBy == 'descending' ? 'DESC' : ``;
            const sortByStr = sortBy == 'Like' ? 'likeCount' : sortBy == 'Views' ? 'viewCount' : sortBy == 'Rating' ? 'ratingCount' : `addDateTime`;
            const sql = `SELECT * FROM  nj_videos WHERE status='${statusStr}' ${searchStr} ORDER BY ${sortByStr} ${orderByStr} LIMIT ${limitStr}  OFFSET ${limitStr * pageStr}`;
            console.log(sql);
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, result) => {
                    if (err)
                        return reject(err);
                    resolve(result);
                });
            });
        };
        this.findOne = (id) => {
            return new Promise((resolve, reject) => {
                db_1.default.query('SELECT * FROM nj_videos WHERE id = ?', [id], (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.updateOne = (channelDetails) => {
            const sql = `UPDATE nj_videos SET ? WHERE id = ?`;
            //update not created in utils as not needed
        };
        this.findDataLength = (status) => {
            const statusStr = status == 'Y' ? status : status == 'N' ? status : 'Y';
            const sql = `SELECT COUNT(*) FROM nj_videos WHERE status='${statusStr}'`;
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
    }
}
exports.videoModel = videoModel;
