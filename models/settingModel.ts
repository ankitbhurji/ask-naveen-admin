import { ISettingDataType } from "../interfaces/settingType";
import db from "../services/db";
import { OkPacket, RowDataPacket } from "mysql2";

export class settingModel{

    findByLimit = (tableSetting:ISettingDataType) =>{
        const limit = tableSetting.pageLimit
        const page = tableSetting.page
        const search = tableSetting.search

        const limitStr = limit? limit:10
        const pageStr = page? page: 0
        const searchStr = search!="" && search!=undefined ? search : ''

        return new Promise((resolve, reject)=>{
            const sql = `SELECT * FROM nj_setting WHERE settingKey like '%${searchStr}%' LIMIT ${limitStr} OFFSET ${pageStr*limitStr}`
            console.log(sql);
            db.query(
                sql, (err: any, res: unknown)=>{
                    if(err) reject(err)
                    resolve(res)
                }
            ) 
        })
    }

    findOne = (id:string) => {
        return new Promise((resolve, reject)=>{
            db.query(
                'SELECT * FROM nj_setting WHERE id = ?',
                [id],
                (err: any, res: unknown)=>{
                    if(err) reject(err)
                    resolve(res)
                }
            )
        })
    }

    updateOne = (details:ISettingDataType) =>{
        const sql = `UPDATE nj_setting SET ? WHERE id = ?`
        const id = details.id
        console.log(details);
        const params = {
            settingKey: details.settingKey,
            settingValue: details.settingValue,
            displayName:details.displayName
        }
        return new Promise((resolve, reject)=>{
            db.query(sql,
                [params, id],
                (err: any, res: { affectedRows: unknown; })=>{
                    if(err) reject(err)
                    resolve(res.affectedRows)
                }
            )
        })
    }

    findDataLength = () => {
        return new Promise((resolve, reject)=>{
            db.query(
                'SELECT COUNT(*) FROM  nj_setting',
                (err: any, res: unknown)=>{
                    if(err) reject(err)
                    resolve(res)
                }
            )
        })
    }
    
    findSettingValue = (settingkey:string) =>{
        return new Promise((resolve, reject)=>{
            db.query(
                "SELECT settingValue FROM nj_setting WHERE settingKey = ?",
                [settingkey],
                (err: any, res: unknown)=>{
                    if(err) reject(err)
                    resolve(res)
                }
            )
        })
    }
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