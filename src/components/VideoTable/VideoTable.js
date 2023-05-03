import styles from '../../css/VideoTable.module.css'
import Pagination from '@material-ui/lab/Pagination';
import { FaTable } from 'react-icons/fa';
import { TiArrowUnsorted } from 'react-icons/ti';
import {VideoQuries} from '../../utils/utils';
import { useEffect, useState } from 'react';
import EditVideoModal from './EditVideoModal';



function VideoTable() {

    const [videoModelData, setVideoModelData] = useState([{}])
    const [tableSetting, setTableSetting] = useState({
        page:0,
        pageLimit:10,
        paginationCount:0,
        videoModelDataLength:0,
        searchFieldInVideoModel:''
    })
    const [toggleSortBy, setToggleSortBy] = useState({
        toSort:'',
        isSortByView:false,
        isSortByLike:false,
        isSortByRating:false
    })
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [videoModelDetails, setVideoModelDetails] = useState([{}])
    // console.log(videoModelDetails);

    function handlePageLimit(pageSize){
        setTableSetting({...tableSetting, pageLimit:parseInt(pageSize)})
    } 
    
    function handleChangePage(event, newPage){
      setTableSetting({...tableSetting, page:newPage-1})
    }

    async function getVideoModelData(sortBy){
        const videoQuries = new VideoQuries
        const videoModelDataByLimit = await videoQuries.findVideoModelDataByLimit(tableSetting.page, tableSetting.pageLimit, toggleSortBy)
        const videoModelDataLength = await videoQuries.findVideoModelDataLength()
        setVideoModelData(videoModelDataByLimit)        

        const paginatioPageNumber = Math.ceil(videoModelDataLength/tableSetting.pageLimit)
        setTableSetting({...tableSetting, paginationCount:paginatioPageNumber, videoModelDataLength:videoModelDataLength})
    }

    async function handleSearch(e){
        setTableSetting({
            ...tableSetting, 
            searchFieldInVideoModel:e.target.value.toLowerCase()
        })
        if(!(tableSetting.searchFieldInVideoModel=='')){
            if(e.key=='Enter'){
                const videoQuries = new VideoQuries
                const searchedVideoModelData = await videoQuries.searchInVideoModelData(tableSetting.searchFieldInVideoModel)
                setVideoModelData(searchedVideoModelData)
            }
        }
    }

    function handleSortClick(sortBy){
        if(sortBy==='views'){
            setToggleSortBy({
                ...toggleSortBy, 
                toSort:'views',
                isSortByView:!toggleSortBy.isSortByView,
                isSortByLike:false,
                isSortByRating:false
            })
        }else if(sortBy==='like'){
            setToggleSortBy({
                ...toggleSortBy,
                toSort:'like',
                isSortByView:false,
                isSortByLike:!toggleSortBy.isSortByLike,
                isSortByRating:false
            })
        }else if(sortBy==='rating'){
            setToggleSortBy({
                ...toggleSortBy, 
                toSort:'rating',
                isSortByView:false,
                isSortByLike:false,
                isSortByRating:!toggleSortBy.isSortByRating
            })
        }
        getVideoModelData()
    }
 
    async function handleEditModal(videoModelId){
       setIsEditModalOpen(!isEditModalOpen)
       const videoQuries = new VideoQuries
       const editableVideoModelDetails = await videoQuries.videoModelDetails(videoModelId)
       setVideoModelDetails(editableVideoModelDetails)
    }

    async function handleDelete(videoModelDataId){
        const videoQuries = new VideoQuries
        const deleteVideoModelData = await videoQuries.deleteVideoModelData(videoModelDataId)
        getVideoModelData()

    }

    useEffect(()=>{
        if(tableSetting.searchFieldInVideoModel==''){
            getVideoModelData()
        }
    },[tableSetting.page, tableSetting.pageLimit, tableSetting.searchFieldInVideoModel, toggleSortBy])

    async function hadleInsertData(){
        const videosQuries = new VideoQuries
        await videosQuries.insertdata()
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.topnav_container}>
                <div className={styles.table_icon}>
                    <FaTable/>
                </div>
                <div className={styles.table_name}>Video Table</div>
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
                        <input onKeyDown={handleSearch} onChange={handleSearch} placeholder='Search...'  className={styles.table_search} type='search'/>
                    </div>
                </div>
                <div className={styles.table_container}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            {/* <th className={styles.th1}>#</th> */}
                            <th className={styles.th1}>VideoId</th>
                            <th className={styles.th2}>VideoTitle</th>
                            <th>
                                <div className={styles.th3}>
                                    VideoViews
                                    <TiArrowUnsorted onClick={()=>{handleSortClick('views')}} className={styles.shortIcon}/>    
                                </div>
                            </th>
                            <th>
                                <div className={styles.th4}>
                                    VideoLikeCount
                                    <TiArrowUnsorted onClick={()=>{handleSortClick('like')}} className={styles.shortIcon}/>
                                </div>
                            </th>
                            <th>
                                <div className={styles.th5}>
                                    RatingCount
                                    <TiArrowUnsorted onClick={()=>{handleSortClick('rating')}}className={styles.shortIcon}/>
                                </div>
                            </th>
                            <th className={styles.th6}>RatingYes</th>
                            <th className={styles.th7}>RatingNo</th>
                            <th className={styles.th8}>VideoClickCount</th>
                            <th className={styles.th9}>AddDataTime</th>
                            {/* <th className={styles.th10}>Search</th> */}
                            <th className={styles.th10}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            videoModelData && 
                            videoModelData.map((videoData, index)=>{
                                const date = new Date(videoData.addDateTime)
                                return(
                                    <tr key={index}>
                                        {/* <td>{index+1}</td> */}
                                        <td>{videoData.videoID}</td>
                                        <td>{videoData.videoTitle}</td>
                                        <td>{videoData.videoViews}</td>
                                        <td>{videoData.videoLikeCount}</td>
                                        <td>{videoData.ratingCount}</td>
                                        <td>{videoData.ratingYes}</td>
                                        <td>{videoData.ratingNo}</td>
                                        <td>{videoData.videoClickCount}</td>
                                        <td>{date.toDateString()}</td>
                                        {/* <td>{videoData.search}</td> */}
                                        <td style={{cursor:'pointer'}} className="dropdown">
                                            <div className="dropdown-toggle" data-bs-toggle="dropdown"> 
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li onClick={()=>{handleEditModal(videoData.id)}}>
                                                    <a className="dropdown-item">Edit</a>
                                                </li>
                                                <li onClick={()=>{handleDelete(videoData.id)}}>
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
                    <div className={styles.item_count}>Total Records: {tableSetting.videoModelDataLength}</div>
                    <div className={styles.pagination}>
                        <Pagination onChange={handleChangePage} count={tableSetting.paginationCount} variant="outlined" shape="rounded" />
                    </div>
                </div>
                <button onClick={hadleInsertData}>addDummyData</button>
            </div>
            <EditVideoModal handleEditModal={handleEditModal} isEditModalOpen={isEditModalOpen} videoModelDetails={videoModelDetails}/> 
        </div>
     );
}

export default VideoTable;