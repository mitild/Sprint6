import { useState } from "react"
import Escena from "./components/escena/Escena"
import Textos from "./data.json"
import Button from "./components/escena/Button"
import Portada from "./components/escena/Portada"

function App() {
  const [ current, setCurrent ] = useState(0)
  const [ isStarted, setIsStarted ] = useState(false)
  const textos = Textos.textos
  const escenas = textos.map((texto, index) => <Escena key={index} text={texto} bg={ current === index ? 'pink' : 'white' } />
  )

  function handleStart() {
    setIsStarted(true)
  }

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
      {
        !isStarted ? 
        <>
        <Portada handleStart={handleStart}/>
        </>
        :
        <>
        <Button handleClick={ handlePrevious } text={ 'Anterior' } />
        <Button handleClick={ handleNext } text={ 'Següent' } />
        { escenas }
        </>
      }
      
    </div>
  );
}

export default App;
