import styles from '../../css/UserTable.module.css'
import Pagination from '@material-ui/lab/Pagination';
import { FaTable } from 'react-icons/fa';
import {Quries} from '../../utils/utils';
import { useEffect, useState } from 'react';
import EditUserModal from './EditUserModal';
import { ToastContainer, toast } from 'react-toastify';


function UserTable() {
    const [tableData, setTableData] = useState([{}])   
    const [pageInfo, setPageInfo] = useState({
        pageLimit:10,
        page:0,
        totalUser:0,
        paginationCount:0,
        searchUser:''
    })
    const [showEditPage, setShowEditPage] = useState(false)
    const [userDetails, setUserDetails] = useState({})

    const notifyDelete = () => {
        toast.error('Deleted successfuly', 
        {
        autoClose:1500,
        position:toast.POSITION.TOP_CENTER
        }
        )
    };
    function changeTableSize(size){
        setPageInfo({...pageInfo, pageLimit:parseInt(size)})
    } 
    function handleChangePage(event, newPage){
        setPageInfo({...pageInfo, page:newPage-1})
    }

    async function getAllUser(){
        let quries = new Quries
        const userListByLimit = await quries.findUserByLimit(pageInfo.pageLimit, pageInfo.page)
        const allUserDataLength = await quries.findAllUserDataLength()
        setTableData(userListByLimit)

        const totalPageCount = Math.ceil(allUserDataLength/ pageInfo.pageLimit);
        setPageInfo({...pageInfo, paginationCount:totalPageCount, totalUser:allUserDataLength})
    }

    async function handleSearch(e){
        setPageInfo({...pageInfo, searchUser:e.target.value})
        if(!(pageInfo.searchUser=='')){
            if(e.key==="Enter"){
                let quries = new Quries
                const searchedUser = await quries.searchUser(pageInfo.searchUser)
                setTableData(searchedUser)
            }
        }
    }

    async function handleEdit(id){
        setShowEditPage(!showEditPage)
        let quries = new Quries
        const email = ''
        const userType = ''
        const [userDetails] = await quries.findUser(email, userType, id)
        setUserDetails(userDetails)
    }

    async function handleDelete(id){
        let quries = new Quries
        const confirmDelete = window.confirm('Do you want to DELETE?')
        if(!confirmDelete){
            return
        }
        const deleteStatus = await quries.deleteUser(id)
        if(deleteStatus){
            notifyDelete()
        }
        getAllUser()
    }

    useEffect(()=>{
        if(pageInfo.searchUser==''){
            getAllUser()
        }
    },[pageInfo.page, pageInfo.pageLimit, pageInfo.searchUser, showEditPage])

    return ( 
        <div className={styles.container}>
            <div className={styles.topnav_container}>
                <div className={styles.table_icon}>
                    <FaTable/>
                </div>
                <div className={styles.table_name}>User Table</div>
            </div>
            <div className={styles.table_input_wrapper}>
                <div className={styles.table_input_container}>
                    <div>
                        <select onChange={(e)=>{changeTableSize(e.target.value)}} className={styles.table_select}>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>
                    <div>
                        <input onKeyDown={handleSearch} onChange={handleSearch} placeholder='Search...'  className={styles.table_search} type='search'/>
                    </div>
                </div>
                <div className={styles.table_container}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile No.</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Join IN</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                tableData &&
                                tableData.map((user, index)=>{
                                    const date = new Date(user.createdAt)
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.mobileNumber}</td>
                                            <td>{user.email}</td>
                                            <td>{user.userType}</td>
                                            <td>{date.toDateString()}</td>
                                            <td style={{cursor:'pointer'}} className="dropdown">
                                                <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                                </div>
                                                <ul className="dropdown-menu">
                                                    <li onClick={()=>{handleEdit(user.id)}}>
                                                        <a className="dropdown-item">Edit</a>
                                                    </li>
                                                    <li onClick={()=>{handleDelete(user.id)}}>
                                                        <a className="dropdown-item">Delete</a>
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
                    <div className={styles.item_count}>Total Records: {pageInfo.totalUser}</div>
                    <div className={styles.pagination}>
                        <Pagination onChange={handleChangePage} count={pageInfo.paginationCount} variant="outlined" shape="rounded" />
                    </div>
                </div>
            <EditUserModal handleEdit={handleEdit} showEditPage={showEditPage} userData={userDetails}/>
            </div>
            <ToastContainer />
        </div>
     );
}

export default UserTable;