import "./sidebar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img src="https://pbs.twimg.com/media/E9YJOcmWQAczMrY.jpg" alt="" className="sidebar-img"/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cum
          at commodi harum! Velit reprehenderit illo, quam maxime, veritatis
          nobis architecto aspernatur et eveniet quibusdam iusto ipsum impedit
          quas aliquam!
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sport</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US </span>
        <div className="sidebar-social">
          <LinkedInIcon className="sidebar-icon"/>
          <FacebookIcon className="sidebar-icon"/>
          <InstagramIcon className="sidebar-icon"/>
          <TwitterIcon className="sidebar-icon"/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
