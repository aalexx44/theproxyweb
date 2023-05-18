import { useEffect, useState } from "react"
import characterData from '../../assets/char.js'
import CharacterCard from "./CharacterCard"


function CharacterList() {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log(characterData[0])
        setData(characterData)
    }, [])


    return (
        <div className='bg-main mt-6 w-11/12 md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center p-5 md:p-10'>
            {data.map(item => (
            <CharacterCard key={item.name} name={item.name} url={'https://picsum.photos/200'} />
            ))}
        </div>
    );
}

export default CharacterList;