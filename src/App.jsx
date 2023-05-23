import BackgroundAnimated from "./components/BackgroundAnimated"
import Card from "./components/Card"
import CharacterList from "./components/proxyCharacters/CharacterList"
import TitleCard from "./components/TitleCard"
import AudioPlayer from "./components/audioPlayer/AudioPlayer"

function App() {
  return (
    <div className="flex justify-items-center justify-center">

      <div className="grid justify-items-center w-11/12 max-w-5xl font-proxy">
        <TitleCard title="Luces de Falso Contacto"/>
        <Card/>
        <TitleCard title="Bienvenido a tu Destino"/>
        <CharacterList/>
        <TitleCard></TitleCard>
        <AudioPlayer/>
        <BackgroundAnimated/>
      </div>

    </div>
  )
}

export default App
