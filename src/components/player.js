import React, { useState } from "react";
import { Fab, IconButton } from '@material-ui/core';
import { PlayArrow, Pause, SkipNext, SkipPrevious } from '@material-ui/icons';


import './player.css';
import './copyright'
import CopyrightSection from "./copyright";



function Player() {

    const demoSongImg = 'https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg'

    const [isSearched, setIsSearched] = useState(false)

    const [autoplay, setAutoplay] = useState(0)

    const [isPlaying, setIsPlaying] = useState(false)

    const [songID, setSongID] = useState("")

    const [ytLink, setYTLink] = useState("Youtube.com")


    const playlist = []
    var currentIndex = -1;


    const play = {
        animation: 'spin 7s linear infinite'
    }





    // function playSong() {

    //     const song = document.querySelector('#song')

    //     if (isPlaying) {
    //         song.pause()
    //         setIsPlaying(false)
    //     } else {
    //         song.play()
    //         setIsPlaying(true)
    //     }

    // }

    function playSong() {
        if (autoplay === 0) {
            setIsPlaying(true)
            setAutoplay(1)
        } else {
            setIsPlaying(false)
            setAutoplay(0)
        }
    }



    function nextSong() {

        setIsPlaying(false)
        if (currentIndex < playlist.length - 1) {
            currentIndex++;
            setSongID(playlist[currentIndex])
        }
    }

    // function prevSong(){

    //     const song = document.querySelector('#song')
    //     song.load()
    //     setIsPlaying(false)

    //     if(currentSong>0){
    //         setCurrentSong((prevValue)=>prevValue-1)
    //     }
    // }

    function getSongUsingLink() {

        const link = String(document.querySelector('#user-input').value);
        setYTLink(link);
        if (link !== "") {

            const songId = link.substring(link.length - 11, link.length)

            console.log(songId);

            playlist.push(songId)


            console.log(playlist);
            console.log(currentIndex);

            if (currentIndex === -1) {

                setSongID(songId)
                currentIndex = 0;
                console.log(currentIndex);
            }
            else {
                prompt("Added to Playlist")
            }

            if (isSearched === false) {

                setIsSearched(true)
            }
        }
        document.querySelector('#user-input').value = " ";

    }



    return (
        <div className="bodyContent">
            <div className="input-area">
                <input id='user-input' placeholder="Enter Link to Listen to"></input>
                <img onClick={getSongUsingLink} className='icon' src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg" alt='search' />
            </div>
            <iframe title="Music" width="0" height="0" src={`https://www.youtube.com/embed/${songID}?autoplay=${autoplay}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <div className="PlayerCard">
                <img className='songImg' style={isPlaying ? play : null} src={isSearched ? `https://img.youtube.com/vi/${songID}/0.jpg` : demoSongImg} alt='demoImg' />
                <h1>{isSearched ? "Currently Playing" : "Paste the link of your fav song to play"}</h1>
                <div className='motionIcons'>
                    <IconButton aria-label="next" >
                        <SkipPrevious />
                    </IconButton>
                    <Fab aria-label="Play" className='play-button' onClick={playSong}>
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </Fab>
                    <IconButton aria-label="next" onClick={nextSong} >
                        <SkipNext />
                    </IconButton>
                </div>
            </div>
            <CopyrightSection ytLink={ytLink}/>
        </div>
    );


}




export default Player;