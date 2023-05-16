import videoBg from '../assets/animacion3.mp4'
import './BackgroundAnimated.css'

function BackgroundAnimated() {
    return (
        <>
            <video autoPlay loop muted>
                <source src={videoBg} type='video/mp4'/>
            </video>

            <div className='layer'></div>
        </>
    );
}

export default BackgroundAnimated;