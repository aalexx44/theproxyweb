import './Card.css';
import gatoGif from '../assets/gato.gif'
function Card() {
    return (
        <div className="container">
            <div className="text">
                <h3>
                    ¿Entraste? Felicidades
                    Busca tus respuestas en las
                    luces de falso contacto pico3
                </h3>
            </div>
            <div className="gif">
                <h3>
                    aqui un gif
                </h3>
                <img src={gatoGif}/>
            </div>
        </div>
    );
}

export default Card;