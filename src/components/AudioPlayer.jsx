import { useEffect, useState } from "react"
import audioRef from '../assets/track1.mp3'

const audio = new Audio(audioRef)
export const AudioPlayer = () => {
    
    const [ isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if(isPlaying){
            audio.play()
        }else{
            audio.pause()
        }
        
    }, [isPlaying])


    return(
        <div className="bg-second p-3 grid w-full justify-items-center fixed bottom-0 left-0 right-0 z-50">
            <button className="text-xl md:text-2xl" onClick={() => setIsPlaying(!isPlaying)} >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    )
}
