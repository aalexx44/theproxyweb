import video from '../assets/animacion.mp4'
import './BackgroundAnimated.css'

function BackgroundAnimated() {
    return (
        <>
            <video playsInline autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>

            <div className='layer'></div>
        </>
    );
}

export default BackgroundAnimated;