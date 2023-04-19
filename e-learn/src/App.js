import { useState } from "react"
import Escena from "./components/escena/Escena"
// import Textos from "./data.json"
import { stories } from "./data"
import Button from "./components/escena/Button"
import Portada from "./components/escena/Portada"
import styled from "styled-components"

function App() {
  const [ current, setCurrent ] = useState(0)
  const [ isStarted, setIsStarted ] = useState(false)
  // const textos = Textos.textos
  // const escenas = textos.map((texto, index) => <Escena key={index} text={texto} bg={ current === index ? 'pink' : 'white' } />
  // )

  const escenas = stories.map((story, index) => <Escena key={index} text={story.txt} bg={ current === index ? 'pink' : 'white' } />
  )

  const bgImage = isStarted ? stories[current].img : ""

    const StyledBg = styled.div`
      background-image: url('${bgImage}');
      background-color: white;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 100vh;
    `;

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
    <StyledBg>
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
    </StyledBg>
  );
}

export default App;
