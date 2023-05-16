import videoBg from '../assets/animacion.mp4'
import './BackgroundAnimated.css'

function BackgroundAnimated() {
    return (
        <>
            <video muted autoplay playsinline loop>
                <source src={videoBg} type='video/mp4'/>
            </video>

            <div className='layer'></div>
        </>
    );
}

export default BackgroundAnimated;