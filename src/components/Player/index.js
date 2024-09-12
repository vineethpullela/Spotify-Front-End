import { useContext } from "react"
import { assets } from "../../assets/assets"
import "./index.css"
import { PlayerContext } from "../../context/PlayerContext"


const Player =()=>{
    const {seekBar,seekBg,playStatus,play,pause,track,time,previous,next,seekSong}=useContext(PlayerContext);

    return track ? (
        <div className="pr-container">
            <div className="pr-content-container">
                <img src={track.image} className="pr-content-img" alt="" />
            <div Style="gap:5px;">
            <p className="pr-content-name">{track.name}</p>
            <p className="pr-content-desc">{track.desc.slice(0,20)}</p>
            </div>            
        </div>
        <div className="pr-audio">
            <div className="pr-audio-content">
                <img src={assets.shuffle_icon} className="pr-audio-img" alt=""/>
                <img onClick={()=>previous()} src={assets.prev_icon} className="pr-audio-img" alt=""/>
                {playStatus? 
                <img onClick={pause} src={assets.pause_icon} className="pr-audio-img" alt=""/>
                :<img onClick={play} src={assets.play_icon} className="pr-audio-img" alt=""/>}
             
               
                <img onClick={()=>next()} src={assets.next_icon} className="pr-audio-img" alt=""/>
                <img src={assets.loop_icon} className="pr-audio-img" alt=""/>
            </div>
            <div className="pr-audio-nav-container">
                <p className="pr-audio-nav-p">{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className="pr-audio-nav-sep">
                    <hr ref={seekBar} className="pr-audio-nav-hr"/>
                </div>
                <p className="pr-audio-nav-p">{time.currentTime.minute}:{time.currentTime.second}</p>
            </div>
        </div>
        <div className="pr-audio-tool">
            <img src={assets.plays_icon} className="pr-audio-tool-img" alt=""/>
            <img src={assets.mic_icon} className="pr-audio-tool-img" alt=""/>
            <img src={assets.queue_icon} className="pr-audio-tool-img" alt=""/>
            <img src={assets.speaker_icon} className="pr-audio-tool-img" alt=""/>
            <img src={assets.volume_icon} className="pr-audio-tool-img" alt=""/>
            <div className="pr-audio-tool-sep">

            </div>
            <img src={assets.mini_player_icon} className="pr-audio-tool-img" alt=""/>
            <img src={assets.zoom_icon} className="pr-audio-tool-img" alt=""/>

        </div>
        </div>
    ):null
}


export default Player
