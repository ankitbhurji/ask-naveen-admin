import styles from '../../css/AdminVideoTable.module.css'
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';
import { FaTable } from 'react-icons/fa';
import { AdminVideoQuries } from '../../utils/utils';
import EditAdminVideoModal from './EditAdminVIdeoModal';
import ConfirmBox from '../ConfirmBox/ConfirmBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminVideoTable() {

    const [adminVideoModelData, setAdminVideoModelData] = useState([{}])
    const [tableSetting, setTableSetting] = useState({
        page:0, 
        pageLimit:10, 
        paginationCount:0,
        adminVideoModelDataLength:0,
        searchFieldInAdminVideoModel:''
    })
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [adminVideoModelDetails, setAdminVideoModelDetails] = useState([{}])

    // console.log(tableSetting);

    const notify = () => {
        toast.error('Deleted item successfuly', 
        {
        autoClose:1500,
        position:toast.POSITION.TOP_CENTER
        } 
        )
    };
    function handlePageLimit(pageSize){
        setTableSetting({...tableSetting, pageLimit:parseInt(pageSize)})
    }
    function handleChangePage(event, newPage){
        setTableSetting({...tableSetting, page:newPage-1})
    }
    async function getAdminVideoModelData(){
        const adminVideoQuries = new AdminVideoQuries
        const adminVideoModelDataByLimit = await adminVideoQuries.findAdminVideoModelDataByLimit(tableSetting.page, tableSetting.pageLimit)
        const adminVideoModelDataLength = await adminVideoQuries.findAdminVideoModelDataLength()
        setAdminVideoModelData(adminVideoModelDataByLimit)
        
        const paginationPageNumber = Math.ceil(adminVideoModelDataLength/tableSetting.pageLimit)
        setTableSetting({...tableSetting, paginationCount:paginationPageNumber, adminVideoModelDataLength:adminVideoModelDataLength})
    }
    async function handleSearch(e){
        setTableSetting({
            ...tableSetting, 
            searchFieldInAdminVideoModel:e.target.value.toLowerCase()
        })
        if(!(tableSetting.searchFieldInAdminVideoModel=='')){
            if(e.key=='Enter'){
                const adminVideoQuries = new AdminVideoQuries
                const searchedAdminVideoModelData =  await adminVideoQuries.searchInAdminVideoModelData(tableSetting.searchFieldInAdminVideoModel)
                setAdminVideoModelData(searchedAdminVideoModelData)
            }
        }
    }
    async function handleEditModal(adminVideoModelId){
        setIsEditModalOpen(!isEditModalOpen)
        const adminVideoQuries = new AdminVideoQuries
        const adminVideoModelDetails = await adminVideoQuries.adminVideoModeDetails(adminVideoModelId)
        setAdminVideoModelDetails(adminVideoModelDetails)
    }
    async function handleDelete(adminVideoModelId){
        const isConfirmDelete = window.confirm("Are you sure to delete?")
        if(!isConfirmDelete){
            return
        }else{
            const adminVideoQuries = new AdminVideoQuries
            const deleteAdminVideoModelData = await adminVideoQuries.deleteAdminVideoModelData(adminVideoModelId)
            if(deleteAdminVideoModelData){
                notify()
                getAdminVideoModelData()
            }
        }
    }
    
    useEffect(()=>{
        if(tableSetting.searchFieldInAdminVideoModel==''){
            getAdminVideoModelData()
        }
    },[tableSetting.page, tableSetting.pageLimit, tableSetting.searchFieldInAdminVideoModel, isEditModalOpen])

    return ( 
        <div className={styles.container}>
            <div className={styles.topnav_container}>
                <div className={styles.table_icon}>
                    <FaTable/>
                </div>
                <div className={styles.table_name}>Admin Video Table</div>
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
                            <th className={styles.th2}>VideoID</th>
                            <th className={styles.th1}>VideoTitle</th>
                            <th className={styles.th3}>VideoCategory</th>
                            <th className={styles.th4}>ViewsCount</th>
                            <th className={styles.th5}>LikeCount</th>
                            <th className={styles.th6}>AddDateTime</th>
                            <th className={styles.th7}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            adminVideoModelData && 
                            adminVideoModelData.map((adminVideoModel, index)=>{
                                const date = new Date(adminVideoModel.addDateTime)
                                return(
                                    <tr key={index}>
                                        <td><a href={adminVideoModel.videoUrl} target='_blank'>{adminVideoModel.videoID}</a></td>
                                        <td>{adminVideoModel.videoTitle}</td>
                                        <td>{adminVideoModel.videoCategory}</td>
                                        <td>{adminVideoModel.viewsCount}</td>
                                        <td>{adminVideoModel.likesCount}</td>
                                        <td>{date.toDateString()}</td>
                                        <td style={{cursor:'pointer'}} className="dropdown">
                                            <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a onClick={()=>{handleEditModal(adminVideoModel.id)}} className="dropdown-item">Edit</a>
                                                </li>
                                                <li>
                                                    <a onClick={()=>{handleDelete(adminVideoModel.id)}} className="dropdown-item">Delete</a>
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
                    <div className={styles.item_count}>Total Records: {tableSetting.adminVideoModelDataLength}</div>
                    <div className={styles.pagination}>
                        <Pagination onChange={handleChangePage} count={tableSetting.paginationCount} variant="outlined" shape="rounded" />
                    </div>
                </div>
                <EditAdminVideoModal handleEditModal={handleEditModal} isEditModalOpen={isEditModalOpen} adminVideoModeDetails={adminVideoModelDetails}/>
            </div>
            <ToastContainer />
        </div>
     );
}

export default AdminVideoTable;