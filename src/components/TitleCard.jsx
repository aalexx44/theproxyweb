import './TitleCard.css';

function TitleCard({title=''}) {
    return (
        <div className='bg-main w-full mt-4'>
            <h1 className="text-5xl text-center p-5">
                {title}
            </h1>
        </div>
    );
}

export default TitleCard;