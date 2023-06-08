"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelModel = void 0;
const db_1 = require("../services/db");
class channelModel {
    constructor() {
        this.create = (channleData) => {
            const sql = "INSERT INTO nj_channel SET ?";
            const params = {
                channelID: channleData.channelID,
                channelName: channleData.channelName
            };
            return new Promise((resolve, reject) => {
                db_1.db.query(sql, params, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    let insertId = result.insertId;
                    resolve(insertId);
                });
            });
        };
        this.findOne = (channelID) => {
            return new Promise((resolve, reject) => {
                db_1.db.query("SELECT * FROM nj_channel WHERE channelID = ?", [channelID], (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res === null || res === void 0 ? void 0 : res[0]);
                });
            });
        };
        this.findAll = () => {
            return new Promise((resolve, reject) => {
                db_1.db.query("SELECT * FROM nj_channel", [], (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res);
                });
            });
        };
    }
    update(channleData) {
        return new Promise((resolve, reject) => {
            db_1.db.query("UPDATE nj_channel SET channelName = ?, handle = ? WHERE id = ?", [channleData.channelName, channleData.handle, channleData.channelID], (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.affectedRows);
                }
            });
        });
    }
    remove(channelID) {
        return new Promise((resolve, reject) => {
            db_1.db.query("DELETE FROM nj_channel WHERE id = ?", [channelID], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.affectedRows);
            });
        });
    }
}
exports.channelModel = channelModel;
