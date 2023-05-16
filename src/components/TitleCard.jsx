import './TitleCard.css';

function TitleCard({title=''}) {
    return (
        <div className="titleContainer">
            <h1>{title}</h1>
        </div>
    );
}

export default TitleCard;