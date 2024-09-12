import { useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"
// import { GoHome } from "react-icons/go";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import "./index.css"
import { toast } from "react-toastify";



const Sidebar=()=>{
    const navigate=useNavigate();

    return(
        <div className="sbr-container">
            <div className="sbr-content-container">
                <div onClick={()=>navigate("/")} className="sbr-home-container">
                    <img src={assets.home_icon} className="sbr-home-img" alt=""/>
                    <p className="sbr-home-name">Home</p>
                </div>
                <div onClick={()=>toast.error("SORRY Temporarly Closed For Maintenance")} className="sbr-home-container">
                    <img src={assets.search_icon} className="sbr-home-img" alt=""/>
                    <p className="sbr-home-name">search</p>
                </div>
                <div onClick={()=>toast.error("SORRY Temporarly Closed For Maintenance")}  className="sbr-home-container">
                <MdOutlineAdminPanelSettings size={35} />

                    <p className="sbr-home-name">Admin</p>
                </div>
            </div>
            <div className="sbr-tabs">
                <div className="sbr-tab">
                    <div className="sbr-tab-item">
                        <img src={assets.stack_icon} className="sbr-tab-img" alt=""/>
                        <p className="sbr-tab-p">Your Library</p>
                    </div>
                    <div className="sbr-subtab">
                        <img src={assets.arrow_icon} className="sbr-subtab-img" alt=""/>
                        <img src={assets.plus_icon} className="sbr-subtab-img" alt=""/>
                    </div>
                </div>
                <div className="sbr-cards">
                    <h1 className="sbr-card-heading">Create your first playlist</h1>
                    <p className="sbr-card-p">it's easy we will help you</p>
                    <button type="button" className="sbr-card-button">
                        Create Playlist
                    </button>
                </div>
                <div className="sbr-cards">
                    <h1 className="sbr-card-heading">Let's findsome podcasts to follow</h1>
                    <p className="sbr-card-p">we'll keep you update on spisodes</p>
                    <button type="button" className="sbr-card-button">
                        Browse podcasts
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Sidebar