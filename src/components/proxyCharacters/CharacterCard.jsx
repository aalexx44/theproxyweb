
function CharacterCard({url, name}) {
    return (
        <div className="bg-second p-10 mb-5 md:mb-10 md:m-2 text-center">
            <img src={url}/>
            <h3>{name}</h3>
        </div>
    );
}

export default CharacterCard;