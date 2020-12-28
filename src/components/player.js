import React,{useState} from "react";
import { Fab } from '@material-ui/core';
import { PlayArrow , Pause } from '@material-ui/icons';

import './player.css'



function Player() {

    const play = {
        animation:'spin 7s linear infinite'
    }

    const [isPlaying, setIsPlaying] = useState(false)

    function playSong(){

        const song = document.querySelector('#song')

        if(isPlaying){
            song.pause()
            setIsPlaying(false)
        }else{
            song.play()
            setIsPlaying(true)
        }
        
    }

    return (
        <div className="bodyContent">
            <div className="PlayerCard">
                <img className='songImg' style={isPlaying?play:null} src='https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg' alt='demoImg' />
                <h1>Demo Song</h1>
                <audio id='song'>
                    <source src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' />
                </audio>

                <Fab aria-label="Play" onClick={playSong}>
               {isPlaying?<Pause/>:<PlayArrow />} 
                </Fab>  

            </div>
        </div>
    );


}




export default Player;