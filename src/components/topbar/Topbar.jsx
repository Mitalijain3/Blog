import "./topbar.css"
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Profile from "../../images/Profile.jpeg"
function Topbar() {
  return (
      <div className="top">
         <div className="top-left">
       <NightsStayOutlinedIcon className="moon"  style={{ fontSize: 30 }}/>
         </div>
         <div className="top-center">
         <ul className="top-list">
             <li className="top-list-item">HOME</li>
             <li className="top-list-item">ABOUT</li>
             <li className="top-list-item">WRITE</li>
             <li className="top-list-item">CONTACT</li>
             <li className="top-list-item">LOGOUT</li>
         </ul>
        </div>
         <div className="top-right">
             <img src={Profile} alt="" className="profile"/>
             <SearchOutlinedIcon className="search-icon" style={{ fontSize: 30 }}/>
         </div>
      </div>);
}

export default Topbar;
