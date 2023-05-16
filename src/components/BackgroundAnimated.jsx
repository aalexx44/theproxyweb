import ReactPlayer from 'react-player'
import videoBg from '../assets/animacion.mp4'
import './BackgroundAnimated.css'

function BackgroundAnimated() {
    return (
        <>
            <div>
                <ReactPlayer url={videoBg} playing muted loop playsinline/>
            </div>

            <div className='layer2'></div>
        </>
    );
}

export default BackgroundAnimated;