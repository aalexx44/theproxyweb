import './TitleCard.css';

function TitleCard({title=''}) {
    return (
        <div className='bg-main mt-6 w-11/12 md:w-1/2'>
            <h1 className="text-5xl text-center">
                {title}
            </h1>
        </div>
    );
}

export default TitleCard;