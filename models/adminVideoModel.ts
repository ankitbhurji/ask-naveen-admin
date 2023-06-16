import db from '../services/db'
import { IAdminVideoType, IAdminVideoDataType } from '../interfaces/adminVideoType'
import { OkPacket } from 'mysql2'

export class adminVideoModel{

    createOne = (adminVideoData:IAdminVideoDataType): Promise<number | undefined> => {
        const sql = 'INSERT IGNORE INTO nj_admin_video SET ?';
        const search = adminVideoData.videoTitle.toLowerCase()+" "+
        adminVideoData.videoTags.toLowerCase()+" "+ 
        adminVideoData.videoCategory.toLowerCase()
        const d = new Date()
        const params = {
            status:'Y',
            // videoUrl:adminVideoData.videoUrl, // pending
            videoId:adminVideoData.videoId,
            videoTitle:adminVideoData.videoTitle,
            videoCategory:adminVideoData.videoCategory,
            videoTags:adminVideoData.videoTags,
            videoType:adminVideoData.videoType,
            likesCount:adminVideoData.likesCount,
            viewsCount:adminVideoData.viewsCount,
            videoDescription:adminVideoData.videoDescription,
            search:search,
            videoUrl:adminVideoData.searchUrl,
            videoPublishDateTime:adminVideoData.publishDateTime,
            addDateTime:d.toISOString(),
        }
        return new Promise((resolve, reject)=>{
            db.query(sql, params, (err: any, result: OkPacket)=>{
                if(err) return reject(err)
                let insertId = (<OkPacket> result).insertId
                resolve(insertId)
            })
        })
    }

    findByLimit = (tableSetting:IAdminVideoDataType) =>{
        const status = tableSetting.tableStatus
        const limit = tableSetting.pageLimit
        const pages = tableSetting.page
        const searched = tableSetting.search
        const videotype = tableSetting.videoType
        const orderby = tableSetting.sortBy
        
        const statusStr = status=='Y'?status: status=='N'?status: 'Y'
        const limitStr = limit ? limit: 10
        const pageStr  = pages ? pages: 0 
        const searchStr = searched!="" ? `and search like '%${searched}%'` : ``
        const videoTypeStr = videotype=='' || videotype=='All' || videotype=='--SELECT--' ? ``: `and videoType='${videotype}'`
        const orderByStr = orderby=='popular' ?`order by viewsCount desc`: orderby=='lastdayviews'?`order by dailyViews desc`:`order by addDateTime desc`
        const sql = `SELECT * FROM nj_admin_video WHERE status= '${statusStr}' ${videoTypeStr} ${searchStr} ${orderByStr} LIMIT ${limitStr} OFFSET ${limitStr*pageStr}`
        // console.log(sql);
        return new Promise((resolve, reject) => {
            db.query(sql, (err: any, res:any)=>{
                if (err) reject(err)
                else resolve(sql)
            })
        })
    }
    findOne = (id:string) => {
        const IDStr = id ? id : 1
        return new Promise((resolve, reject)=>{
            db.query(
                'SELECT * FROM nj_admin_video WHERE id = ?',    
                [IDStr],
                (err: any, res: unknown)=>{
                    if(err) reject(err)
                    resolve(res)
                }
            )
        })
    }
    findDataLength = (status:string) =>{
        const statusStr = status=='Y'?status: status=='N'?status: 'Y'
        const sql = `SELECT COUNT(*) FROM nj_admin_video
                    WHERE status='${statusStr}'`
        console.log(sql);
        return new Promise((resolve, reject)=>{
            db.query(sql, (err: any, res: unknown)=>{
                if(err) reject(err)
                resolve(res)
            })
        })
    }
    delete = (id:string):Promise<number> => {
        const IDStr = id ? id : null
        const sql = `UPDATE nj_admin_video SET status="N" 
                    WHERE id=${IDStr}`
        return new Promise((resolve, reject)=>{
            db.query(sql, (err: any, res: { affectedRows: number | PromiseLike<number>; })=>{
                if(err) reject(err)
                resolve(res.affectedRows)
            })
        })
    }
    remove = (id:string):Promise<number> => {
        const IDStr = id ? id : null
        const sql =  `DELETE FROM nj_admin_video 
        WHERE id=${IDStr} AND status="N"`
        return new Promise((resolve, reject)=>{
            db.query(sql, (err: any, res: { affectedRows: number | PromiseLike<number>; })=>{
                if(err) reject(err)
                resolve(res.affectedRows)
            })
        })
    }
    // findSearch = (search:string) => {
    //     const searchStr = search? search: ''
    //     const sql = `SELECT * FROM nj_admin_video 
    //             WHERE search LIKE '%${searchStr}%' AND status='Y'`
    //     return new Promise((resolve, reject)=>{
    //         db.query(sql, (err: any, res: unknown)=>{
    //             if(err) reject(err)
    //             resolve(res)
    //         })
    //     })
    // }
    updateOne = (details:IAdminVideoDataType):Promise<number | undefined> => {
        const sql = `UPDATE nj_admin_video SET ? 
                    WHERE id = ?`
        const id = details.id
        const search = details.videoTitle.toLowerCase()+' '+
        details.videoTags.toLowerCase()+' '+
        details.videoCategory.toLowerCase() 
        // details.videoId.toLowerCase()
        const params = {
            videoTitle: details.videoTitle,
            videoTags:details.videoTags,
            videoCategory:details.videoCategory,
            videoDescription:details.videoDescription,
            videoType:details.videoType,
            search: search
        }
        return new Promise((resolve, reject)=>{
            db.query(sql,
                [params, id],       
                (err: any, res: { affectedRows: number | PromiseLike<number | undefined> | undefined; })=>{
                    if(err) reject(err)
                    resolve(res.affectedRows)
                }
            )
        })
        
    }
}