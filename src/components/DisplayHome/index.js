//import { albumsData, songsData } from "../../assets/assets"
import NavBar from "../NavBar"

import AlbumItem from "../AlbumItem"
import "./index.css"
import Songitem from "../SongItem"
import { useContext } from "react"
import { PlayerContext } from "../../context/PlayerContext"


const DisplayHome=()=>{
    const {songsData,albumsData}=useContext(PlayerContext)
    console.log(songsData)
    return(
        <>
           <NavBar/>
           <div className="dsp-hm-container">
            <h1 className="dsp-hm-heading">Featured Charts</h1>
            <div className="dsp-hm-album-container">
            {albumsData.map((album,index)=>(
                <AlbumItem  key={index} data={album}/>
            ))}
            </div>          
           </div>
           <div className="dsp-hm-container">
            <h1 className="dsp-hm-heading">Today's biggest hits</h1>
            <div className="dsp-hm-album-container">
            {songsData.map((song,index)=>(
                <Songitem  key={index} data={song}/>
            ))}
            </div>          
           </div>
        </>
        
      
    )
}


export default DisplayHome