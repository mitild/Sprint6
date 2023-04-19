import { useState } from "react"
import Escena from "./components/escena/Escena";
import Textos from "./data.json"
import Button from "./components/escena/Button"

function App() {
  const [ current, setCurrent ] = useState(0)
  const textos = Textos.textos
  const escenas = textos.map((texto, index) => <Escena key={index} text={texto} bg={ current === index ? 'pink' : 'white' } />
  )

  function handlePrevious() {
    if(current > 0){
      setCurrent(prev  => prev - 1)
    } else {
      setCurrent(3)
    }
  }

  function handleNext() {
    if(current < escenas.length - 1) {
      setCurrent(prev  => prev + 1)
    } else {
      setCurrent(0)
    }
  }

  return (
    <div className="App">
      <Button handleClick={ handlePrevious } text={ 'Anterior' }n />
      <Button handleClick={ handleNext } text={ 'Següent' }n />
      { escenas }
    </div>
  );
}

export default App;
