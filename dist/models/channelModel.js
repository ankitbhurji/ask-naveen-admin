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
            const sortBy = pageInfo.sortBy;
            const orderBy = pageInfo.orderBy;
            const search = pageInfo.searchChannel;
            const statusStr = status == 'Y' ? status : status == 'N' ? status : 'Y';
            const limitStr = limit ? limit : 10;
            const pageStr = page ? page : 0;
            const searchStr = search != "" ? ` and search like '%${search}%'` : ``;
            const orderByStr = orderBy == 'ascending' ? 'ASC' : orderBy == 'descending' ? 'DESC' : '';
            const sortByStr = sortBy == 'Roll No' ? 'rollNumber' : sortBy == 'Views' ? 'views' : sortBy == 'Daily Views' ? 'dailyViews' : sortBy == 'Subscribers' ? 'subscriber' : 'addDateTime';
            const sql = `SELECT * FROM nj_channel WHERE status='${statusStr}' ${searchStr} ORDER BY ${sortByStr} ${orderByStr} LIMIT ${limitStr} OFFSET ${limitStr * pageStr}`;
            // console.log(sql);
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
            var _a, _b;
            const sql = `UPDATE nj_channel SET ? WHERE id = ?`;
            // const date_iso = channelDetails.membershipExpiryDate.toISOString()
            const search = ((_a = channelDetails.handle) === null || _a === void 0 ? void 0 : _a.toLowerCase()) + ' ' + ((_b = channelDetails.channelName) === null || _b === void 0 ? void 0 : _b.toLowerCase()) + ' ' + channelDetails.rollNumber;
            const id = channelDetails.id;
            const params = {
                rollNumber: channelDetails.rollNumber,
                channelName: channelDetails.channelName,
                handle: channelDetails.handle,
                subscriber: channelDetails.subscriber,
                videos: channelDetails.videos,
                views: channelDetails.views,
                level: channelDetails.level,
                membership: channelDetails.membership,
                userID: channelDetails.userID,
                search: search,
                isChannelMonetize: channelDetails.isChannelMonetize,
                isChannelVerified: channelDetails.isChannelVerified,
                membershipExpiryDate: channelDetails.membershipExpiryDate,
            };
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, [params, id], (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res.affectedRows);
                });
            });
        };
        this.findDataLength = (status) => {
            const statusStr = status == 'Y' ? status : status == 'N' ? status : 'Y';
            const sql = `SELECT COUNT(*) FROM nj_channel
    WHERE status='${statusStr}'`;
            return new Promise((resolve, reject) => {
                db_1.default.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        // findSearch = (search:string) => {
        //   const sql = `SELECT * FROM nj_channel 
        //   WHERE search LIKE '%${search}%' AND status='Y'`
        //   return new Promise((resolve, reject)=>{
        //     db.query(sql, (err:any, res:unknown)=>{
        //       if(err) reject(err)
        //       resolve(res)
        //     })
        //   })
        // }
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
