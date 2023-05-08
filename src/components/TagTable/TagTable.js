import styles from '../../css/TagTable.module.css';
import { FaTable } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';
import { TagQueries } from '../../utils/utils';
import UpdateAddTagModal from './UpdateAddTagModal';
import validator from 'validator';

function TagTable() {

    const [tableSetting, setTableSetting] = useState({
        page:0,
        pageLimit:10,
        paginationCount:0,
        tagModelDataLength:0,
        searchFieldInTagModel:''
    }) 
    const [tagModelData, setTagModelData] = useState([{}])
    const [modalOpenKey, setModalOpenKey] = useState({
        isUpdate:false,
        isAdd:false
    })
    const [tagModelDetails, setTagModelDetails] = useState([{}])
    // console.log(tagModelDetails);


    const notify = () => {
        toast.error('Deleted successfuly', 
        {
        autoClose:1500,
        position:toast.POSITION.TOP_CENTER
        }
        )
    };
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
    async function getTagModelData(page, pageLimit){
        const tagQueries = new TagQueries
        const tagModelDataByLimit = await tagQueries.findTagModelDataByLimit(page, pageLimit)
        const tagModelDataLength = await tagQueries.findTagModelDataLength()
        setTagModelData(tagModelDataByLimit)

        const paginationPageNumber = Math.ceil(tagModelDataLength/tableSetting.pageLimit)
        setTableSetting({
            ...tableSetting,
            paginationCount:paginationPageNumber,
            tagModelDataLength:tagModelDataLength
        })
    }
    async function handleSearch(e){
        setTableSetting({
            ...tableSetting,
            searchFieldInTagModel:e.target.value
        })
        if(!(tableSetting.searchFieldInTagModel=='')){
            if(e.key=='Enter'){
                const tagQueries = new TagQueries
                const searchedTagModelData = await tagQueries.searchInTagModelData(tableSetting.searchFieldInTagModel)
                setTagModelData(searchedTagModelData)
            }
        }
    }
    function handleAdd(){
        setModalOpenKey({
            ...modalOpenKey,
            isAdd:!modalOpenKey.isAdd
        })
    }
    async function handleUpdate(tagModelId){
        setModalOpenKey({
            ...modalOpenKey,
            isUpdate:!modalOpenKey.isUpdate
        })
        const tagQueries = new TagQueries
        const tagModelDetails = await tagQueries.tagModelDetails(tagModelId)
        setTagModelDetails(tagModelDetails)

    }
    async function handleDelete(tagModelId){
        const confirmDelete = window.confirm('Do you want to DELETE?')
        if(!confirmDelete){
            return
        }
        const tagQueries = new TagQueries
        const deleteTagModelDataStaus = await tagQueries.deleteTagModelData(tagModelId)
        if(deleteTagModelDataStaus){
            notify()
        }
        getTagModelData(tableSetting.page, tableSetting.pageLimit)
    }

    
    useEffect(()=>{
        if(tableSetting.searchFieldInTagModel==''){
            getTagModelData(tableSetting.page, tableSetting.pageLimit)
        }
    },[
        tableSetting.page, 
        tableSetting.pageLimit, 
        tableSetting.searchFieldInTagModel, 
        modalOpenKey
    ])


    return (
        <div className={styles.container}>
            <div className={styles.topnav_container}>
                <div className={styles.table_icon}>
                    <FaTable/>
                </div>
                <div className={styles.table_name}>
                    <div>Tags Table</div>
                    <button
                    onClick={handleAdd} 
                    className={styles.insertData}
                    >Insert
                    </button>
                </div>
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
                        onKeyDown={handleSearch} 
                        onChange={handleSearch} 
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
                            <th className={styles.th1}>Title</th>
                            <th className={styles.th2}>Tag</th>
                            <th className={styles.th3}>Link</th>
                            {/* <th className={styles.th3}>search</th> */}
                            <th className={styles.th6}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tagModelData && 
                            tagModelData.map((tagModel, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{tagModel.title}</td>
                                        <td>{tagModel.tags}</td>
                                        <td>
                                            <a href={tagModel.link} target="__blank">{tagModel.link}</a>
                                        </td>
                                        {/* <td>{tagModel.search}</td> */}
                                        <td style={{cursor:'pointer'}} className="dropdown">
                                            <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a 
                                                    // onClick={()=>{handleUpdateModal(tagModel.id)}} 
                                                    onClick={()=>{handleUpdate(tagModel.id)}}
                                                    className="dropdown-item"
                                                    >Update
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                    onClick={()=>{handleDelete(tagModel.id)}} 
                                                    className="dropdown-item"
                                                    >Delete
                                                    </a>
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
                    <div className={styles.item_count}>Total Records:{tableSetting.tagModelDataLength}</div>
                    <div className={styles.pagination}>
                        <Pagination 
                        onChange={handleChangePage} 
                        count={tableSetting.paginationCount} 
                        variant="outlined" 
                        shape="rounded" 
                        />
                    </div>
                </div>
                <UpdateAddTagModal
                 modalOpenKey={modalOpenKey} 
                handleAdd={handleAdd} 
                handleUpdate={handleUpdate}
                tagModelDetails={tagModelDetails}
                />
            </div>
            <ToastContainer />
        </div>
      );
}

export default TagTable;