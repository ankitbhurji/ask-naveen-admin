import { useState } from 'react';
import styles from './Dashboard.module.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { BiTable } from 'react-icons/bi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { AiFillSetting } from 'react-icons/ai';
import { FiActivity } from 'react-icons/fi';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";



function Dashboard(props) {
    const navigate = useNavigate();
    const {COMPONENT} = props
    const [check, setCheck] = useState(true)

    function openNav(){
        setCheck(!check)
    }
    function handleLogout(){
        const confirm = window.confirm("Do you want to logout?")
        if(!confirm){
            return
        }
        localStorage.removeItem("token");
        navigate("/login");
    }

    return ( 
        <div className={styles.container}>
            <div className={check?`${styles.sidebarOpen} ${styles.sidebar}`:styles.sidebar}>
                <div className={styles.user_info_container}>
                    <div className={styles.user_logo}><FaUserTie/></div>
                    <div className={styles.user_name}>AskNaveen</div>
                </div>
                <hr/>
                <div className={styles.sidebar_list_container_dashboard}>
                    <div className={styles.sidebar_list_dashboard}>
                        <div className={styles.list_icon_dashboard}>
                            <AiOutlineDashboard/>
                        </div>
                        <div className={styles.list_name_dashboard}>
                            Dashboard
                        </div>
                    </div>
                </div>
                <div>
                    <div data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1" className={styles.sidebar_list_container}>
                        <div className={styles.sidebar_list}>
                            <div className={styles.list_icon}>
                                <BiTable/>
                            </div>
                            <div className={styles.list_name}>
                                <p>Tables</p>
                            </div>
                        </div>
                        <div className={styles.forwarArrow}>
                            <FiChevronDown/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.sidebar_ul}>
                            <ul className="collapse multi-collapse" id="multiCollapseExample1">
                                <div>
                                    <li  className={styles.sidebar_li} id="collapseExample"><a href='/dashboard/user'>User</a></li>
                                    <li  className={styles.sidebar_li} id="collapseExample"><a href='/dashboard/channel'>Channel</a></li>
                                    <li  className={styles.sidebar_li} id="collapseExample"><a href='/dashboard/video'>Video</a></li>
                                    <li  className={styles.sidebar_li} id="collapseExample"><a href='/dashboard/adminvideo'>Admin Video</a></li>
                                    <li  className={styles.sidebar_li} id="collapseExample"><a href='/dashboard/setting'>Setting</a></li>
                                    <li  className={styles.sidebar_li} id="collapseExample"><a href='/dashboard/tag'>Tag</a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div  data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" className={styles.sidebar_list_container}>
                        <div className={styles.sidebar_list}>
                            <div className={styles.list_icon}>
                                <BiTable/>
                            </div>
                            <div className={styles.list_name}>
                                <p>Tables</p>
                            </div>
                        </div>
                        <div className={styles.forwarArrow}>
                            <FiChevronDown/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.sidebar_ul}>
                            <ul className="collapse multi-collapse" id="multiCollapseExample2">
                                <div >
                                    <li  className={styles.sidebar_li} id="collapseExample">User Table</li>
                                    <li  className={styles.sidebar_li} id="collapseExample">User Table</li>
                                    <li  className={styles.sidebar_li} id="collapseExample">User Table</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={check?`${styles.mainOpen}`:`${styles.sidebarClose}`}>
                <div className={styles.main_container}>
                    <div className={styles.top_navbar_container}>
                        <div className={styles.top_navbar}>
                            <div className={styles.navbar_icon}>
                                <GiHamburgerMenu onClick={openNav}/>
                            </div>
                            <div className={styles.input_container}>
                                <input className={styles.navbar_search} type='search' placeholder='search'/>
                                <button className={styles.search_button}>Go</button>
                            </div>
                            <div className={styles.user_icon}>
                                <div className='dropdown'>
                                    <FaUserCircle data-bs-toggle="dropdown"/>
                                    <ul className="dropdown-menu">
                                        <div className={styles.drop_menu}>
                                            <li className={styles.user_action}>
                                                <AiFillSetting style={{fontSize:'35px'}}/>
                                                <a className="dropdown-item">Setting</a>
                                            </li>
                                            <li className={styles.user_action}>
                                                <FiActivity style={{fontSize:'35px'}}/>
                                                <a className="dropdown-item">Activity</a>
                                            </li>
                                            <hr/>
                                            <li onClick={handleLogout} className={styles.user_action}>
                                                <RiLogoutCircleFill style={{fontSize:'35px'}}/>
                                                <a className="dropdown-item mb-2">Logout</a>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.component_container}>
                        <main>
                            {COMPONENT &&
                            <COMPONENT/>}
                        </main>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Dashboard;