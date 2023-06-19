import { RowDataPacket } from "mysql2"


export interface IViralTagLineType extends RowDataPacket {

}

export interface IViralTagLineDataType {
    tableStatus:string,
    pageLimit:number,
    page:number,
    search:string
    title:string,
    tags:string,
    link:string,
    addDateTime:string
}