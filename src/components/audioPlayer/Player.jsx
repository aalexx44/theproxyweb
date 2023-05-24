import React, { useEffect, useRef, useState } from 'react'
import './Player.css' 

const Player = ({audioElem, isPlaying, setIsPlaying, currentSong, setCurrentSong, songs}) => {

    const [timeBar, setTimeBar] = useState("00:00")

    const clickRef = useRef()
    const duracionTotal = currentSong.length ?? 0
    const porcentaje = currentSong.progress ?? 0
    const minutes = Math.floor(duracionTotal/60)
    const seconds = Math.trunc(duracionTotal % 60).toString().padStart(2, '0')
    
    
    useEffect(() =>{
        setTimeBar(() => timeBar)
        const duracionPorcentaje = (duracionTotal * porcentaje) / 100
        const minutos = Math.floor(duracionPorcentaje / 60)
        const segundos = Math.round(duracionPorcentaje % 60).toString().padStart(2, '0')

        setTimeBar(minutos+":"+segundos)

    }, [ Math.round(currentSong.progress)])

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

    const checkTime = (e) => {
        let width = clickRef.current.clientWidth
        const offset = e.nativeEvent.offsetX

        const divprogress = offset / width * 100
        audioElem.current.currentTime = divprogress / 100 * currentSong.length
    }


  return (
    <>
    <div className='grid lg:grid-cols-4 items-center m-auto justify-items-center w-4/5'>
        <div className='col-start-1'>
            <button className='bg-main p-1' onClick={skipBack}>Back</button>
            <button className=' bg-main p-1 ml-1 mr-1' onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button className='bg-main p-1' onClick={skipNext}>Next</button>
            <button className='bg-main ml-5 p-1'>auto</button>
        </div>

        <div className='flex content-around w-full lg:col-span-2 lg:col-start-2 items-center'>
            <div className=''>{timeBar}</div>
            <div className='bg-pbar h-2 w-full cursor-pointer ml-2 mr-2' onClick={checkTime} ref={clickRef} >
                <div className='bg-blue-700 h-full time-bar' style={{width: `${currentSong.progress+"%"}`}}></div>
            </div>

            <div className=''>{ duracionTotal == 0 ? '0:00' : `${minutes}:${seconds}` }</div>
        </div>

        <div className='lg:col-start-4'>
            <h3>{currentSong.title} - {currentSong.author}</h3>
        </div>

    </div>

    </>
  )
}


export default Player