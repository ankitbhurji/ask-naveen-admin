"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingModel = void 0;
const db_1 = __importDefault(require("../services/db"));
class settingModel {
    constructor() {
        this.findByLimit = (tableSetting) => {
            const limit = tableSetting.pageLimit;
            const page = tableSetting.page;
            const search = tableSetting.search;
            const limitStr = limit ? limit : 10;
            const pageStr = page ? page : 0;
            const searchStr = search != "" && search != undefined ? search : '';
            return new Promise((resolve, reject) => {
                const sql = `SELECT * FROM nj_setting WHERE settingKey like '%${searchStr}%' LIMIT ${limitStr} OFFSET ${pageStr * limitStr}`;
                console.log(sql);
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.findOne = (id) => {
            return new Promise((resolve, reject) => {
                db_1.default.query('SELECT * FROM nj_setting WHERE id = ?', [id], (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.updateOne = (details) => {
            const sql = `UPDATE nj_setting SET ? WHERE id = ?`;
            const id = details.id;
            console.log(details);
            const params = {
                settingKey: details.settingKey,
                settingValue: details.settingValue,
                displayName: details.displayName
            };
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, [params, id], (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res.affectedRows);
                });
            });
        };
        this.findDataLength = () => {
            return new Promise((resolve, reject) => {
                db_1.default.query('SELECT COUNT(*) FROM  nj_setting', (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.findSettingValue = (settingkey) => {
            return new Promise((resolve, reject) => {
                db_1.default.query("SELECT settingValue FROM nj_setting WHERE settingKey = ?", [settingkey], (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        // findSearch = (search:string) => {
        //     const sql = `SELECT * FROM nj_setting WHERE settingKey LIKE '%${search}%'`
        //     return new Promise((resolve, reject)=>{
        //         db.query(sql, (err: any, res: unknown)=>{
        //             if(err) reject(err)
        //             resolve(res)
        //         })
        //     })
        // }
    }
}
exports.settingModel = settingModel;
