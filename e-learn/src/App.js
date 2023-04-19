import Escena from "./components/escena/Escena";
import Textos from "./data.json"

function App() {
  const textos = Textos.textos
  const escenas = textos.map((texto, index) => <Escena key={index} text={texto} />)

  return (
    <div className="App">
      { escenas }
    </div>
  );
}

export default App;
