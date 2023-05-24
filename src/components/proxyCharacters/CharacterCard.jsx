
function CharacterCard({url, urlFix, name}) {
    
    return (
        <div className="bg-second p-3 m-3 mb-5 md:mb-10 md:m-2 text-center">
            <img type="img/gif" src={url}/>
            <h3 className="pt-3 text-xl md:text-2xl">{name}</h3>
        </div>
    );
}

export default CharacterCard;