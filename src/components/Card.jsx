import './Card.css';
import gatoGif from '../assets/gato.gif'
function Card() {
    return (
        <div className="inline-grid sm:grid-cols-2 items-center justify-items-center mt-6 mb-2 p-4 md:p-6 w-full bg-main">
            <div className='mb-3 sm:mb-0'>
                <h2 className='text-3xl md:text-4xl text-center'>
                    ¿Entraste? Felicidades,<br/>
                    Busca tus respuestas en las
                    Luces de Falso Contacto.
                </h2>
            </div>
            <div>
                <img src={gatoGif}/>
            </div>
        </div>
    );
}

export default Card;