import styles from '../../css/SettingTable.module.css';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';
import { FaTable } from 'react-icons/fa';
import { SettingQueries } from '../../utils/utils';
import EditSettingModal from './EditSettingModal';
import { ToastContainer, toast } from 'react-toastify';

function SettingTable() {

    const [tableSetting, setTableSetting] = useState({
        page:0,
        pageLimit:10,
        paginationCount:0,
        settingModelDataLength:0,
        searchFieldInSettingModel:''
    })
    const [settingModelData, setSettingModelData] = useState([{}])
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [settingModelDetails, setSettingModelDetails] = useState([{}])
    // console.log(settingModelDetails);

    function handleChangePage(event, newPage){
        setTableSetting({...tableSetting, page:newPage-1})
    }
    function handlePageLimit(pageSize){
        setTableSetting({...tableSetting, pageLimit:parseInt(pageSize)})
    }
    async function getSettingModelData(page, pageLimit){
        const settingQueries = new SettingQueries
        const settingModelDataByLimit = await settingQueries.findSettingModelDataByLimit(page, pageLimit)
        const settingModelDataLength = await settingQueries.findSettingModelDataLength()
        setSettingModelData(settingModelDataByLimit)
        
        const paginationPageNumber = Math.ceil(settingModelDataLength/tableSetting.pageLimit)
        setTableSetting({...tableSetting, paginationCount:paginationPageNumber, settingModelDataLength:settingModelDataLength})
    }
    async function handleSearch(e){
        setTableSetting({
            ...tableSetting, 
            searchFieldInSettingModel:e.target.value
        })
        if(!(tableSetting.searchFieldInSettingModel=='')){
            if(e.key=='Enter'){
                const settingQueries = new SettingQueries
                const searchedSettingModelData = await settingQueries.searchInsettingModelData(tableSetting.searchFieldInSettingModel)
                setSettingModelData(searchedSettingModelData)
            }
        } 
    }
    async function handleEditModal(settingModelId){
        setIsEditModalOpen(!isEditModalOpen)
        const settingQueries = new SettingQueries
        const settingModelDetails = await settingQueries.settingModelDetails(settingModelId)
        setSettingModelDetails(settingModelDetails)
    }
    
    useEffect(()=>{
        if(tableSetting.searchFieldInSettingModel==''){
            getSettingModelData(tableSetting.page, tableSetting.pageLimit)
        }
    },[tableSetting.page, tableSetting.pageLimit, tableSetting.searchFieldInSettingModel, isEditModalOpen])


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
                        <input onKeyDown={handleSearch} onChange={handleSearch} placeholder='Search...' className={styles.table_search} type='search'/>
                    </div>
                </div>
                <div className={styles.table_container}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th className={styles.th1}>#</th>
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
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{settingModel.displayName}</td>
                                        <td>{settingModel.settingKey}</td>
                                        <td>{settingModel.settingValue}</td>
                                        <td style={{cursor:'pointer'}} className="dropdown">
                                            <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a onClick={()=>{handleEditModal(settingModel.id)}} className="dropdown-item" href="#">Edit</a>
                                                </li>
                                                {/* <li>
                                                    <a className="dropdown-item" href="#">Delete</a>
                                                </li> */}
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
                    <div className={styles.item_count}>Total Records: {tableSetting.settingModelDataLength}</div>
                    <div className={styles.pagination}>
                        <Pagination onChange={handleChangePage} count={tableSetting.paginationCount} variant="outlined" shape="rounded" />
                    </div>
                </div>
                <EditSettingModal isEditModalOpen={isEditModalOpen} handleEditModal={handleEditModal} settingModelDetails={settingModelDetails}/>
            </div>
            <ToastContainer />
        </div>
     );
}

export default SettingTable;