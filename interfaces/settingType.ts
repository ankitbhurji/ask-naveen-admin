import { RowDataPacket } from "mysql2"

export interface ISettingType extends RowDataPacket {

}

export interface ISettingDataType {
    page?:number,
    pageLimit?:number
    id:string
    settingKey:string,
    settingValue:string,
    displayName:string
}