import ReactAudioPlayer from "react-audio-player"
import audioData from '../assets/audios'
import { useState } from "react";
import audio from '../assets/track1.mp3'

function AudioPlayer() {



    return (
        <div className=" grid bg-second w-full justify-items-center fixed bottom-0 left-0 right-0 z-50">
            <ReactAudioPlayer
                src={audio}
                autoPlay
                controls
                volume={0.5}
                className="w-full md:w-1/2"
            />
        </div>
    );
}

export default AudioPlayer;