import './Card.css';
import gatoGif from '../assets/gato.gif'
function Card() {
    return (
        <div className="inline-grid grid-cols-2 bg-main mt-6 w-11/12  md:w-1/2 p-5 md:p-10 text-center justify-items-center ">
            <div>
                <h2 className='text-3xl'>
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