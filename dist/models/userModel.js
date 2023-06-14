"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const db_1 = __importDefault(require("../services/db"));
const index_1 = __importDefault(require("../config/index"));
class userModel {
    constructor() {
        this.create = (userData) => {
            const { email, name, mobile, city = '', state = '', country = '', job = '', gender = '', userType = '', status = 'Y', addIpAddress, addDateTime, userScore = '0' } = userData;
            const sql = `INSERT INTO ${index_1.default.tablenames.user} (email,name,mobile,city,state,country,job,gender,userType,status,addIpAddress,addDateTime,userScore) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            const params = [email, name, mobile, city, state, country, job, gender, userType, status, addIpAddress, addDateTime, userScore];
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, params, (err, result) => {
                    if (err) {
                        console.log(err);
                        return reject(err);
                    }
                    let insertId = result.insertId;
                    return resolve(insertId);
                });
            });
        };
        this.login = (email, otp) => {
            return new Promise((resolve, reject) => {
                db_1.default.query(`SELECT * FROM ${index_1.default.tablenames.user} WHERE email = ? and otp=?`, [email, otp], (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res === null || res === void 0 ? void 0 : res[0]);
                });
            });
        };
        this.findOne = (userId) => {
            return new Promise((resolve, reject) => {
                db_1.default.query(`SELECT * FROM ${index_1.default.tablenames.user} WHERE channelID = ?`, [userId], (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res === null || res === void 0 ? void 0 : res[0]);
                });
            });
        };
        this.findAll = () => {
            return new Promise((resolve, reject) => {
                db_1.default.query(`SELECT * FROM ${index_1.default.tablenames.user}`, [], (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res);
                });
            });
        };
    }
    update(userData) {
        return new Promise((resolve, reject) => {
            const { email, name, mobile, city, state, country, job, gender, userType, status, addIpAddress, addDateTime, userScore } = userData;
            db_1.default.query(`UPDATE  ${index_1.default.tablenames.user} (email,name,mobile,city,state,country,job,gender,userType,status,addIpAddress,addDateTime,userScore) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) WHERE id = ?`, [email, name, mobile, city, state, country, job, gender, userType, status, addIpAddress, addDateTime, userScore], (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.affectedRows);
                }
            });
        });
    }
    statusUpdate(userId, status) {
        return new Promise((resolve, reject) => {
            db_1.default.query(`UPDATE  ${index_1.default.tablenames.user} SET status = ? WHERE id = ?`, [status, userId], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.affectedRows);
            });
        });
    }
}
exports.userModel = userModel;
