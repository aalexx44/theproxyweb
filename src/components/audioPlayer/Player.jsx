import React, { useRef } from 'react'

const Player = ({audioElem, isPlaying, setIsPlaying, currentSong, setCurrentSong, songs}) => {

    const clickRef = useRef()

    const playPause = () => {
        setIsPlaying(!isPlaying)
    }

    const skipBack = () => {
        audioElem.current.pause()
        const index = songs.findIndex(song => song.title == currentSong.title)
        if( index == 0){
            setCurrentSong[songs[songs.length - 1]]
        }else{
            setCurrentSong(songs[index - 1])
        }
        audioElem.current.currentTime=0;
        audioElem.current.play()
        if(!isPlaying){
            setIsPlaying(true)
        }
    }

    const skipNext = () => {
        audioElem.current.pause()
        const index = songs.findIndex(song => song.title == currentSong.title)
        if(index == songs.length-1){
            setCurrentSong(songs[0])
        }else{
            setCurrentSong(songs[index + 1])
        }
        audioElem.current.currentTime = 0
        audioElem.current.play()
        if(!isPlaying){
            setIsPlaying(true)
        }
    }

  return (
    <>
        <h3>{currentSong.title}</h3>
        <button onClick={skipBack}>Back</button>
        <button onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={skipNext}>Next</button>

    </>
  )
}


export default Player