import styles from '../../css/SettingTable.module.css';
import { FaTable } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';
import { TagQueries } from '../../utils/utils';

function TagTable() {

    const [tableSetting, setTableSetting] = useState({
        page:0,
        pageLimit:10,
        paginationCount:0,
        settingModelDataLength:0,
        searchFieldInTagModel:''
    })
    const [tagModelData, setTagModelData] = useState([{}])
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [tagModelDetails, setTagModelDetails] = useState([{}])
    console.log(tableSetting);

    function handleChangePage(event, newPage){
        setTableSetting({
            ...tableSetting, 
            page:newPage-1
        })
    }
    function handlePageLimit(pageSize){
        setTableSetting({
            ...tableSetting,
            pageLimit:parseInt(pageSize)
        })
    }
    async function getTagModelData(){
        const tagQueries = new TagQueries
        const tagModelDataByLimit = await tagQueries.findTagModelDataByLimit()
        console.log(tagModelDataByLimit);
    }

    useEffect(()=>{
        getTagModelData()
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
                        <select
                         onChange={(e)=>{handlePageLimit(e.target.value)}} 
                         className={styles.table_select}
                        >
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>
                    <div>
                        <input 
                        // onKeyDown={handleSearch} 
                        // onChange={handleSearch} 
                        placeholder='Search...' 
                        className={styles.table_search} 
                        type='search'
                        />
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
                            // settingModelData && 
                            // settingModelData.map((settingModel, index)=>{
                            //     return(
                            //         <tr key={index}>
                            //             <td></td>
                            //             <td></td>
                            //             <td>{settingModel.settingValue}</td>
                            //             <td style={{cursor:'pointer'}} className="dropdown">
                            //                 <div className="dropdown-toggle" data-bs-toggle="dropdown">
                            //                 </div>
                            //                 <ul className="dropdown-menu">
                            //                     <li>
                            //                         <a 
                            //                         onClick={()=>{handleEditModal(settingModel.id)}} 
                            //                         className="dropdown-item"
                            //                         >Edit
                            //                         </a>
                            //                     </li>
                            //                     {/* <li>
                            //                         <a className="dropdown-item">Delete</a>
                            //                     </li> */}
                            //                 </ul>
                            //             </td>
                            //         </tr>
                            //         )
                            // })
                        }        
                        </tbody>
                    </table>
                </div>
                <div className={styles.table_navigation}>
                    <div className={styles.item_count}>Total Records:10</div>
                    <div className={styles.pagination}>
                        <Pagination 
                        onChange={handleChangePage} 
                        // count={tableSetting.paginationCount} 
                        count={10} 
                        variant="outlined" 
                        shape="rounded" 
                        />
                    </div>
                </div>
                {/* <EditSettingModal 
                isEditModalOpen={isEditModalOpen} 
                handleEditModal={handleEditModal} 
                settingModelDetails={settingModelDetails}
                /> */}
            </div>
            <ToastContainer />
        </div>
      );
}

export default TagTable;