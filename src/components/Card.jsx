import './Card.css';
import gatoGif from '../assets/gato.gif'
function Card() {
    return (
        <div className="inline-grid sm:grid-cols-2 justify-items-center mt-6 mb-2 p-4 md:p-6 w-full bg-main">
            <div className='mb-3 sm:mb-0'>
                <h2 className='text-3xl text-center'>
                    ¿Entraste? Felicidades
                    Busca tus respuestas en las
                    luces de falso contacto
                </h2>
            </div>
            <div>
                <img src={gatoGif}/>
            </div>
        </div>
    );
}

export default Card;