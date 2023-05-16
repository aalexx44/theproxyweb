import videoBg from '../assets/animacion.webm'
import './BackgroundAnimated.css'

function BackgroundAnimated() {
    return (
        <>
            <video muted autoPlay loop>
                <source src={videoBg} type='video/webm'/>
            </video>

            <div className='layer'></div>
        </>
    );
}

export default BackgroundAnimated;