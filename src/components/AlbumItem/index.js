import { useNavigate } from "react-router-dom";
import "./index.css";

const AlbumItem=(props)=>{

    const navigate=useNavigate()

    const {_id,name,desc,image}=props.data;

    
    return(
        <div onClick={()=>navigate(`/album/${_id}`)} className="albumitem-container">
            <img src={image} className="album-img" alt=""/>
            <p className="album-name">{name}</p>
            <p className="album-desc">{desc}</p>
        </div>
    )
}


export default AlbumItem