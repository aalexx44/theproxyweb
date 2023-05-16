import './TitleCard.css';

function TitleCard({title=''}) {
    return (
        <div className="titleContainer">
            <h2>{title}</h2>
        </div>
    );
}

export default TitleCard;