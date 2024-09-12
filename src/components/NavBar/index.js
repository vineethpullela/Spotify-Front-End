import { useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"
import "./index.css"



const NavBar=()=>{
    const navigate=useNavigate();

    return(
        <>
         <div className="nav-container">
            <div className="nav-content-container">
                <img onClick={()=>navigate(-1)} src={assets.arrow_left} className="nav-img" alt=""/>
                <img onClick={()=>navigate(+1)} src={assets.arrow_right} className="nav-img" alt=""/>
            </div>
            <div className="nav-ac-container">
                <p className="nav-ac-pr">Explore Premium</p>
                <p className="nav-ac-p2">Install App</p>
                <p className="nav-ac-dp">V</p>
            </div>
         </div>
         <div className="nav-tabs-container">
            <p className="nav-tabs-item1">All</p>
            <p className="nav-tabs-item2">Music</p>
            <p className="nav-tabs-item2">podcasts</p>
         </div>
        </>
       
    )
}


export default NavBar