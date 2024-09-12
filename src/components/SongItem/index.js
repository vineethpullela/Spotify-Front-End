import { useContext } from "react";
import "./index.css";
import { PlayerContext } from "../../context/PlayerContext";


const Songitem=(props)=>{
    const {_id,name,desc,image}=props.data;
    const {playWithId}=useContext(PlayerContext);

    return(

        <div onClick={()=>playWithId(_id)} className="sg-container">
            <img className="sg-img" src ={image} alt=""/>
            <p className="sg-name">{name}</p>
            <p className="sg-desc">{desc}</p>
        </div>
    )
}



export default Songitem