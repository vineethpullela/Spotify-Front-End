import DisplayHome from "../DisplayHome";
import {Routes,Route, useLocation} from "react-router-dom"
import "./index.css";
import DisplayAlbum from "../DisplayAlbum";
import { useContext, useEffect, useRef } from "react";
//import { albumsData } from "../../assets/assets";
import { PlayerContext } from "../../context/PlayerContext";

const Display=()=>{
    const {albumsData}=useContext(PlayerContext)
    const displayRef=useRef();
    const location=useLocation();
    //console.log(location);
    const isAlbum=location.pathname.includes("album");
    const albumId=isAlbum?location.pathname.split("/").pop():"";
    const bgColor=isAlbum&&albumsData.length>0?albumsData.find((x)=>(x._id===albumId)).bgColor:"#121212";
    
useEffect(()=>{
    if(isAlbum){
        displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`
    }else{
         displayRef.current.style.background =`#121212`;
    }
})

    return(
        <div ref={displayRef} className="dp-container">
         
         {albumsData.length>0?<Routes>
            <Route path="/" Component={DisplayHome}/>
            <Route path="/album/:id" element={<DisplayAlbum album={albumsData.find((x)=>(x._id===albumId))}/>}/>
           </Routes>:null}  
        </div>
    )
}


export default Display

