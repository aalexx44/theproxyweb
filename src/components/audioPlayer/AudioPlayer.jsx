import { useEffect, useRef, useState } from "react"
import audioRef from '../../assets/track2.mp3'
import songsData from '../../assets/audios'
import Player from "./Player"

const AudioPlayer = () => {
    const [songs, setSongs] = useState(songsData)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(songsData[0])

    const audioElem = useRef()
    
    const onPlaying = () => {
        const duration = audioElem.current.duration
        const cTime = audioElem.current.currentTime

        setCurrentSong({...currentSong, "progress": cTime / duration * 100, "length": duration})
    }

    useEffect(() => {
        if(isPlaying){
            audioElem.current.play()
        }else{
            audioElem.current.pause()
        }
    }, [isPlaying])

    return(
        <div className="bg-second p-3 w-full fixed bottom-0 left-0 right-0 z-50">
            <audio src={audioRef} ref={audioElem} onTimeUpdate={onPlaying}/>
            <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
        </div>
    )
}

export default AudioPlayer