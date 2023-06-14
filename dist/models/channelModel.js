"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelModel = void 0;
const db_1 = __importDefault(require("../services/db"));
class channelModel {
    constructor() {
        this.findByLimit = (pageInfo) => {
            const status = pageInfo.tableStatus;
            const limit = pageInfo.pageLimit;
            const page = pageInfo.page;
            const sortBy = pageInfo.sort;
            let order = 'DESC';
            if (sortBy) {
                order = 'ASC';
            }
            const sql = `SELECT * FROM nj_channel 
    WHERE status='${status}' ORDER BY rollNumber ${order} LIMIT ${limit} OFFSET ${limit * page}`;
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
                db_1.default.query('SELECT * FROM nj_channel WHERE id = ?', [id], (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.updateOne = (channelDetails) => {
        };
        this.findSearch = (search) => {
            const sql = `SELECT * FROM nj_channel 
    WHERE search LIKE '%${search}%' AND status='Y'`;
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.findDataLength = (status) => {
            const sql = `SELECT COUNT(*) FROM nj_channel
    WHERE status='${status}'`;
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        // create = (channleData:IChannelDataType): Promise<number | undefined>=> {
        //     const sql = "INSERT INTO nj_channel SET ?";
        //     const params = {
        //       channelID: channleData.channelID,
        //       channelName: channleData.channelName
        //     };
        //     return new Promise((resolve, reject) => {
        //       db.query(sql, params, (err: any, result: OkPacket) => {
        //           if (err) {
        //               return reject(err);
        //           }
        //           let insertId = (<OkPacket> result).insertId;
        //           resolve(insertId);
        //       });
        //     });
        // };
        // findOne = (channelID: string): Promise<IChannelType | undefined> =>{
        //   return new Promise((resolve, reject) => {
        //     db.query(
        //       "SELECT * FROM nj_channel WHERE channelID = ?",
        //       [channelID],
        //       (err: any, res: (IChannelType | PromiseLike<IChannelType | undefined> | undefined)[]) => {
        //         if (err) reject(err)
        //         else resolve(res?.[0])
        //       }
        //     ) as IChannelType[];
        //   })
        // }
        // findAll = ():Promise<IChannelType[] | undefined> => {
        //   return new Promise((resolve, reject) => {
        //     db.query(
        //       "SELECT * FROM nj_channel",
        //       [],
        //       (err: any, res: IChannelType[] | PromiseLike<IChannelType[] | undefined> | undefined) => {
        //         if (err) reject(err)
        //         else resolve(res)
        //       }
        //     )as IChannelType[];
        //   })
        // }
        // update(channleData: IChannelType): Promise<number | undefined> {
        //   return new Promise((resolve, reject) => {
        //     db.query(
        //       "UPDATE nj_channel SET channelName = ?, handle = ? WHERE id = ?",
        //       [channleData.channelName, channleData.handle,channleData.channelID],
        //       (err: any, res: { affectedRows: number | PromiseLike<number | undefined> | undefined; }) => {
        //         if (err){ 
        //           reject(err)
        //         }else{
        //           resolve(res.affectedRows);
        //         }
        //       }
        //     )
        //   })
        // }
        //   remove(channelID: number): Promise<number> {
        //     return new Promise((resolve, reject) => {
        //       db.query(
        //         "DELETE FROM nj_channel WHERE id = ?",
        //         [channelID],
        //         (err: any, res: { affectedRows: number | PromiseLike<number>; }) => {
        //           if (err) reject(err)
        //           else resolve(res.affectedRows)
        //         }
        //       )
        //     })
        //   }
    }
}
exports.channelModel = channelModel;
