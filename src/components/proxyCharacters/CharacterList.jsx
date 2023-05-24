import { useEffect, useState } from "react"
import characterData from '../../assets/char.js'
import CharacterCard from './CharacterCard'
import vacio from '../../assets/sara.gif'
import vacioFix from '../../assets/fix.png'

function CharacterList() {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(characterData)
    }, [])
//arreglar margin bot (ahora esta con un titlecard y mb de 20)

    return (
        <div className='md:bg-main mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center p-5 md:p-10 mb-20'>
            {data.map(item => (
                <CharacterCard key={item.id} name={item.name} url={vacio} urlFix={vacioFix} />
            ))}
        </div>
    );
}

export default CharacterList;