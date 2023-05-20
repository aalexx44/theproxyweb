import './TitleCard.css';

function TitleCard({title=''}) {
    return (
        <div className='bg-main w-full mt-4'>
            <h1 className="text-5xl text-center">
                {title}
            </h1>
        </div>
    );
}

export default TitleCard;