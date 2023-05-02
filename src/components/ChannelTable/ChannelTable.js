import styles from '../../css/ChannelTable.module.css'
import { FaTable } from 'react-icons/fa';
import Pagination from '@material-ui/lab/Pagination';
import {ChannelQuries}  from '../../utils/utils'
import { useEffect, useState } from 'react';
import EditChannelModal from './EditChannelModal'; 



function ChennelTable() {

    const [channelData, setChannelData] = useState([{}])
    const [pageInfo, setPageInfo] = useState({
        page:0,
        pageLimit:10,
        paginationCount:0,
        totalChannel:0,
        searchChannel:''
    })
    const [isEditModalOpen, setIsEidtModalOpen] = useState(false)
    const [channelDetails, setChannelDetails] = useState([{}])
    // console.log(pageInfo);
    // console.log(channelData);

    function handlePageChange(event, newPage){
        setPageInfo({...pageInfo, page:newPage-1})
    }
    function handlePageLimit(pageSize){
        setPageInfo({...pageInfo, pageLimit:parseInt(pageSize)})
    }
    async function getChannelData(){
        const channelQuries = new ChannelQuries
        const channelDataByLimit = await channelQuries.findChannelByLimit(pageInfo.page, pageInfo.pageLimit)
        const channelDataLength = await channelQuries.findAllChannelDataLength()
        setChannelData(channelDataByLimit);

        const paginationPageNumbers = Math.ceil(channelDataLength/pageInfo.pageLimit)
        setPageInfo({...pageInfo, paginationCount:paginationPageNumbers, totalChannel:channelDataLength})
    }
    async function handleSearch(e){
        setPageInfo({...pageInfo, searchChannel:e.target.value})
        if(!(pageInfo.searchChannel=='')){
            if(e.key==="Enter"){
                const channelQuries = new ChannelQuries
                const searchedChannels = await channelQuries.searchChannel(pageInfo.searchChannel)
                setChannelData(searchedChannels)
            }
        }
    }
    async function handleEditModal(channelId){
        setIsEidtModalOpen(!isEditModalOpen)
        const channelQuries = new ChannelQuries
        const editableChannelDetails = await channelQuries.channelDetails(channelId)
        setChannelDetails(editableChannelDetails)
    }
    async function handleDelete(channelId){
        const channelQuries = new ChannelQuries
        const deleteChannel = await channelQuries.deleteChannel(channelId)
        getChannelData()

    }

    useEffect(()=>{
        if(pageInfo.searchChannel==''){
            getChannelData()
        }
    },[pageInfo.pageLimit, pageInfo.page, pageInfo.searchChannel, isEditModalOpen])

    function handleInsert(){
        const channelQuries = new ChannelQuries
        channelQuries.insertdata()
    }
    
    return ( 
        <div>
            <div className={styles.container}>
            <div className={styles.topnav_container}>
                <div className={styles.table_icon}>
                    <FaTable/>
                </div>
                <div className={styles.table_name}>Channel Table</div>
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
                            {/* <th>#</th> */}
                            <th>RollNo</th>
                            <th>ChannelName</th>
                            <th>HandleName</th>
                            <th>Subscribers</th>
                            <th>Videos</th>
                            <th>Views</th>
                            <th>Level</th>
                            <th>Membership</th>
                            <th>MonitizationStatus</th>
                            <th>VerifyStatus</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                channelData.map((channel, index)=>{
                                    return(
                                        <tr key={index}>
                                            {/* <td>{index+1}</td> */}
                                            <td>{channel.rollNumber}</td>
                                            <td>{channel.channelName}</td>
                                            <td>{channel.handleName}</td>
                                            <td>{channel.totalSubscribers}</td>
                                            <td>{channel.totalVideos}</td>
                                            <td>{channel.totalViews}</td>
                                            <td>{channel.level}</td>
                                            <td>{channel.membership}</td>
                                            <td>{channel.isChannelMonetize}</td>
                                            <td>{channel.isChannelVerified}</td>
                                            <td style={{cursor:'pointer'}} className="dropdown">
                                                <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                                </div>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a onClick={()=>{handleEditModal(channel.id)}} className="dropdown-item" href="#">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={()=>{handleDelete(channel.id)}} className="dropdown-item" href="#">Delete</a>
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
                    <div className={styles.item_count}>Total Records: {pageInfo.totalChannel}</div>
                    <div className={styles.pagination}>
                        <Pagination onChange={handlePageChange} count={pageInfo.paginationCount} variant="outlined" shape="rounded" />
                    </div>
                </div>
            </div>
            <button onClick={handleInsert}>insetData</button>
            <EditChannelModal editModal={handleEditModal} isEditModalOpen={isEditModalOpen} channelDetails={channelDetails}/>
        </div>
        </div>
     );
}

export default ChennelTable;