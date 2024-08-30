import Header from '../components/Header';
import ImgBanner from '../components/ImgBanner';
import dragonBoatsImg from "../assets/dragonBoats.jpg"
import Schedule from "../components/Schedule"

function App() {
  return (
    <div className="App">
      <header>
        <Header
          title="Cornell Dragon Boat Club"
        />
        <ImgBanner
          source={dragonBoatsImg}
        />
      </header>
      <body>
        <Schedule />
      </body>
    </div>
  );
}

export default App;