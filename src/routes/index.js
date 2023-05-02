import AdminVideoTable from '../components/AdminVideoTable/AdminVideoTable'
import ChannelTable from '../components/ChannelTable/ChannelTable'
import SettingTable from '../components/SettingTable.js/SettingTable'
import UserTable from "../components/UserTable/UserTable"
import VideoTable from '../components/VideoTable/VideoTable'
import SendOtp from "../pages/Auth/SendOtp"
import ValidateOtp from "../pages/Auth/ValidateOtp"
import Dashboard from "../pages/Dashboard/Dashboard"
import PageNotFound from "../pages/Errors/PageNotFound"


const authProtectedRoutes = [
    {path:'/dashboard/user', component:<Dashboard COMPONENT={UserTable}/>},
    {path:'/dashboard/channel', component:<Dashboard COMPONENT={ChannelTable}/>},
    {path:'/dashboard/video', component:<Dashboard COMPONENT={VideoTable}/>},
    {path:'/dashboard/adminvideo', component:<Dashboard COMPONENT={AdminVideoTable}/>},
    {path:'/dashboard/setting', component:<Dashboard COMPONENT={SettingTable}/>},
]

const publicRoutes = [
    {path:'/login', component:<SendOtp/>},
    // {path:'/validate', component:<ValidateOtp/>},
    {path:'*', component:<PageNotFound/>}
]

export {authProtectedRoutes, publicRoutes}