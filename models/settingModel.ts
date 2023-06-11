import { ISettingDataType } from "../interfaces/settingType";
import db from "../services/db";
import { OkPacket, RowDataPacket } from "mysql2";

export class settingModel{

    findByLimit = (page:string, pageLimit:string) =>{
        return new Promise((resolve, reject)=>{
            db.query(
                `SELECT * FROM nj_setting LIMIT ${+pageLimit} OFFSET ${+pageLimit*+page}`,
                (err: any, res: unknown)=>{
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

    findSearch = (search:string) => {
        const sql = `SELECT * FROM nj_setting WHERE settingKey LIKE '%${search}%'`
        return new Promise((resolve, reject)=>{
            db.query(sql, (err: any, res: unknown)=>{
                if(err) reject(err)
                resolve(res)
            })
        })
    }
    
    findSettingValue = (settingkey:string) =>{
        return new Promise((resolve, reject)=>{
            db.query(
                "SELECT * FROM nj_setting WHERE settingKey = ?",
                [settingkey],
                (err: any, res: unknown)=>{
                    if(err) reject(err)
                    resolve(res)
                }
            )
        })
    }
}