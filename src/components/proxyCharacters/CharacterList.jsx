import { useEffect, useState } from "react"
import characterData from '../../assets/char.js'
import CharacterCard from './CharacterCard'
import vacio from '../../assets/sara.gif'

function CharacterList() {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(characterData)
    }, [])


    return (
        <div className='md:bg-main mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 justify-items-center p-5 md:p-10'>
            {data.map(item => (
                <CharacterCard key={item.id} name={item.name} url={vacio} />
            ))}
        </div>
    );
}

export default CharacterList;