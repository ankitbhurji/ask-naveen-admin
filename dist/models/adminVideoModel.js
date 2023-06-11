"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminVideoModel = void 0;
const db_1 = require("../services/db");
class adminVideoModel {
    constructor() {
        this.createOne = (adminVideoData) => {
            const sql = 'INSERT IGNORE INTO nj_admin_video SET ?';
            const search = adminVideoData.videoTitle.toLowerCase() + " " +
                adminVideoData.videoTags.toLowerCase() + " " +
                adminVideoData.videoCategory.toLowerCase();
            const d = new Date();
            const params = {
                status: 'Y',
                videoId: adminVideoData.videoId,
                videoTitle: adminVideoData.videoTitle,
                videoCategory: adminVideoData.videoCategory,
                videoTags: adminVideoData.videoTags,
                videoType: adminVideoData.videoType,
                likesCount: adminVideoData.likesCount,
                viewsCount: adminVideoData.viewsCount,
                videoDescription: adminVideoData.videoDescription,
                search: search,
                videoUrl: adminVideoData.searchUrl,
                videoPublishDateTime: adminVideoData.publishDateTime,
                addDateTime: d.toISOString(),
            };
            return new Promise((resolve, reject) => {
                db_1.db.query(sql, params, (err, result) => {
                    if (err)
                        return reject(err);
                    let insertId = result.insertId;
                    resolve(insertId);
                });
            });
        };
        this.findByLimit = (tableSetting) => {
            console.log(tableSetting);
            const status = tableSetting.tableStatus;
            const limit = tableSetting.pageLimit;
            const page = tableSetting.page;
            const sql = `SELECT * FROM nj_admin_video WHERE status='${status}' LIMIT ${limit} OFFSET ${limit * page}`;
            return new Promise((resolve, reject) => {
                db_1.db.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res);
                });
            });
        };
        this.findDataLength = () => {
            const sql = `SELECT COUNT(*) FROM nj_admin_video WHERE status="Y"`;
            return new Promise((resolve, reject) => {
                db_1.db.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        };
        this.delete = (id) => {
            const sql = `UPDATE nj_admin_video SET status="N" WHERE id=${id}`;
            return new Promise((resolve, reject) => {
                db_1.db.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res.affectedRows);
                });
            });
        };
        this.remove = (id) => {
            const sql = `DELETE FROM nj_admin_video WHERE id=${id} AND status="N"`;
            return new Promise((resolve, reject) => {
                db_1.db.query(sql, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res.affectedRows);
                });
            });
        };
    }
}
exports.adminVideoModel = adminVideoModel;
