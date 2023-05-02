import styles from '../../css/SettingTable.module.css';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';
import { FaTable } from 'react-icons/fa';
import { AdminVideoQuries, SettingQueries } from '../../utils/utils';

function SettingTable() {

    const [tableSetting, setTableSetting] = useState({
        page:0,
        pageLimit:10,
        paginationCount:0,
        settingModelDataLength:0,
        searchFieldInSettingModel:''
    })
    const [settingModelData, setSettingModelData] = useState([{}])
    console.log(tableSetting);

    function handleChangePage(event, newPage){
        setTableSetting({...tableSetting, page:newPage-1})
    }
    function handlePageLimit(pageSize){
        setTableSetting({...tableSetting, pageLimit:parseInt(pageSize)})
    }
    async function handleSearch(e){
        setTableSetting({
            ...tableSetting, 
            searchFieldInSettingModel:e.target.value
        })
        const settingQueries = new SettingQueries
        const searchedSettingModelData = await settingQueries.searchInsettingModelData(tableSetting.searchFieldInSettingModel)
        console.log(searchedSettingModelData);
    }
    async function getSettingModelData(page, pageLimit){
        const settingQueries = new SettingQueries
        const settingModelDataByLimit = await settingQueries.findSettingModelDataByLimit(page, pageLimit)
        const settingModelDataLength = await settingQueries.findSettingModelDataLength()
        setSettingModelData(settingModelDataByLimit)

        const paginationPageNumber = Math.ceil(settingModelDataLength/tableSetting.pageLimit)
        setTableSetting({...tableSetting, paginationCount:paginationPageNumber, settingModelDataLength:settingModelDataLength})
    }

    useEffect(()=>{
        getSettingModelData(tableSetting.page, tableSetting.pageLimit)
    },[])


    return ( 
        <div className={styles.container}>
            <div className={styles.topnav_container}>
                <div className={styles.table_icon}>
                    <FaTable/>
                </div>
                <div className={styles.table_name}>Setting Table</div>
            </div>
            <div className={styles.table_input_wrapper}>
                <div className={styles.table_input_container}>
                    <div>
                        <select onChange={(e)=>{handlePageLimit(e.target.value)}} className={styles.table_select}>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>
                    <div>
                        <input onChange={handleSearch} placeholder='Search...' className={styles.table_search} type='search'/>
                    </div>
                </div>
                <div className={styles.table_container}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th className={styles.th1}>DisplayName</th>
                            <th className={styles.th2}>SettingKey</th>
                            <th className={styles.th3}>SettingValue</th>
                            <th className={styles.th6}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            settingModelData && 
                            settingModelData.map((settingModel, index)=>{
                                const date = new Date(settingModel.addDateTime)
                                return(
                                    <tr key={index}>
                                        <td>{settingModel.displayName}</td>
                                        <td>{settingModel.settingKey}</td>
                                        <td>{settingModel.settingValue}</td>
                                        <td style={{cursor:'pointer'}} className="dropdown">
                                            <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a  className="dropdown-item" href="#">Edit</a>
                                                </li>
                                                <li>
                                                    <a  className="dropdown-item" href="#">Delete</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    )
                            })
                        }        
                        </tbody>
                    </table>
                </div>
                <div className={styles.table_navigation}>
                    <div className={styles.item_count}>Total Records: 10</div>
                    <div className={styles.pagination}>
                        <Pagination onChange={handleChangePage} count={tableSetting.paginationCount} variant="outlined" shape="rounded" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default SettingTable;