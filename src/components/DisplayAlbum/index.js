import { useParams } from "react-router-dom"
import NavBar from "../NavBar"
import "./index.css"
import { assets } from "../../assets/assets";
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../context/PlayerContext";

const DisplayAlbum=({album})=>{
    const {id}=useParams();
    const [albumData,setAlbumData]=useState("");
   //const albumData=albumsData[id];
   const {playWithId,albumsData,songsData}=useContext(PlayerContext);
   console.log(albumData)

   useEffect(()=>{
    albumsData.map((item)=>{
        if (item._id===id){
            setAlbumData(item);
        }
    })
},[])
    
    return albumData? (
       <>
       <NavBar/>
       <div className="dsp-album-container">
        <img src={albumData.image} className="dsp-album-img" alt=""/>
        <div className="dsp-album-details-container">
<p>Playlist</p>
<h1 className="dsp-album-name">{albumData.name}</h1>
<h4 className="dsp-album-desc">{albumData.desc}</h4>
<p className="dsp-album-content">
    <img src={assets.spotify_logo} className="dsp-album-content-logo" alt=""/>
    <b>Spotify</b>
     1,323,154 likes 
     <b> 50 songs, </b>
      about 2 hr  30 min</p>
        </div>
       </div>
       <div className="dsp-album-songslist-container">
            <p><b className="dsp-album-songslist-title">#</b>Title</p>
            <p>Album</p>
            <p className="dsp-album-songslist-date">Date Added</p>
            <img src={assets.clock_icon} className="dsp-album-songslist-clock-img" alt=""/>
       </div>
       <hr/>
       {
        songsData.filter((item)=>item.album===album.name).map((song,index)=>(
            <div onClick={()=>playWithId(song._id)} key={index} className="dsp-album-songslist-item">
                <p className="dsp-album-songslist-item-title">
                    <b className="dsp-album-songslist-item-title-index">{index+1}</b>
                    <img src={song.image} className="dsp-album-songslist-item-title-img" alt=""/>
                    {song.name}
                </p>
                <p className="dsp-album-songslist-item-name">{albumData.name}</p>
                <p className="dsp-album-songslist-item-date">5 days ago</p>
                <p className="dsp-album-songslist-item-duration">{song.duration}</p>

            </div>
        ))

       }
      
       </>
    ):null
}


export default DisplayAlbum