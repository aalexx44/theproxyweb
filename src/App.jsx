import BackgroundAnimated from "./components/BackgroundAnimated"
import Card from "./components/Card"
import CharacterList from "./components/proxyCharacters/CharacterList"
import TitleCard from "./components/TitleCard"


function App() {
  return (
      <div className="max-w-full grid grid-cols-1 justify-items-center">
        <TitleCard title="Luces de Falso Contacto"/>
        <Card/>
        <TitleCard title="Bienvenido a tu Destino"/>
        <CharacterList/>
        <BackgroundAnimated/>
      </div>

  )
}

export default App
