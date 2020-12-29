import React, { useState } from "react";
import { Fab, IconButton } from '@material-ui/core';
import { PlayArrow, Pause, SkipNext, SkipPrevious } from '@material-ui/icons';


import './player.css'


const songList = [
    {
        'songName': 'Kaam 25',
        'songImg': 'https://a10.gaanacdn.com/images/song/58/23827858/crop_480x480_1529653356.jpg',
        'songLink': "https://raagjatt.info/songs/128/53871/Kaam%2025%20(RaagJatt.com).mp3"
    },
    {
        'songName': 'Illegal Weapon 2.0',
        'songImg': 'https://a10.gaanacdn.com/images/song/86/29200586/crop_480x480_1578134227.jpg',
        'songLink': 'https://raagjatt.info/songs/128/54787/Illegal%20Weapon%202.0%20(RaagJatt.com).mp3'
    },
    {
        'songName': 'Gali Gali',
        'songImg': 'https://soolyrics.com/wp-content/uploads/2020/01/rJqX-YUZddchd.jpg',
        'songLink': 'https://raagjatt.info/songs/128/54208/Gali%20Gali%20(RaagJatt.com).mp3'
    },
    {
        'songName': 'Dus Bahane 2.0',
        'songImg': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgaana.com%2Fsong%2Fdus-bahane-20&psig=AOvVaw35DVLJjqpBd9Fx00CAj2uu&ust=1609345521050000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjznbnN8-0CFQAAAAAdAAAAABAD',
        'songLink': 'https://raagjatt.info/songs/128/54867/Dus%20Bahane%202.0%20(RaagJatt.com).mp3'
    },
    {
        'songName': 'Demo Song',
        'songImg': 'https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg',
        'songLink': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
];


function Player() {

    const play = {
        animation: 'spin 7s linear infinite'
    }

    const [currentSong, setCurrentSong] = useState(0)

    const [isPlaying, setIsPlaying] = useState(false)

    function playSong() {

        const song = document.querySelector('#song')

        if (isPlaying) {
            song.pause()
            setIsPlaying(false)
        } else {
            song.play()
            setIsPlaying(true)
        }

    }

    function nextSong(){

        const song = document.querySelector('#song')
        song.load()
        setIsPlaying(false)
        
        if(currentSong<songList.length-1){
            setCurrentSong((prevValue)=>prevValue+1)
        }
    }

    function prevSong(){

        const song = document.querySelector('#song')
        song.load()
        setIsPlaying(false)
        
        if(currentSong>0){
            setCurrentSong((prevValue)=>prevValue-1)
        }
    }

    return (
        <div className="bodyContent">
            <div className='circleOne'></div>
            <div className="circleTwo"></div>
            <div className="PlayerCard">
                <img className='songImg' style={isPlaying ? play : null} src={songList[currentSong].songImg} alt='demoImg' />
                <h1>{songList[currentSong].songName}</h1>
                <audio id='song'>
                    <source src={songList[currentSong].songLink} />
                </audio>
                <div className='motionIcons'>
                    <IconButton aria-label="next" >
                        <SkipPrevious onClick={prevSong}/>
                    </IconButton>
                    <Fab aria-label="Play" className='play-button' onClick={playSong}>
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </Fab>
                    <IconButton aria-label="next" >
                        <SkipNext onClick={nextSong}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );


}




export default Player;