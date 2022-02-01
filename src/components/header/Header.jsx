import './header.css'
import background from '../../images/background.jpg'
function header() {
  return(
   <div className='header'>
        <div className="header-titles">
            <span className='header-title-sm'>Mitali Jain</span>
            <span className='header-title-lg'>Blog</span>
        </div>
        <img src={background} alt="" className="header-img" />
  </div>);
}

export default header;
