import { useContext } from "react"
import "./App.css"
import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import { PlayerContext } from "./context/PlayerContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=>{

  const {audioRef,track,songsData}=useContext(PlayerContext);
 return(
  <div className="home-container">
    
    {songsData.length !==0? <><div className="component-container"><ToastContainer />
<Sidebar/>
<Display/>
</div>
<Player/>
    </>:null}

<audio ref={audioRef} src={track?track.file:""} preload="auto"></audio>
  </div>
 ) 
}


export default App