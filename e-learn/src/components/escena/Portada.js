import styled from "styled-components"
import Button from "./Button"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const TextBox = styled.p`
  max-width: 300px;
  text-align: center;
  margin-bottom: 3em;
`

const Portada = ({ handleStart }) => {
  return (
    <Container>
      <h1>Benvinguts</h1>
      <TextBox>Aquest és un tutorial que ens permetrà entendre-ho tot d'una manera didàctica i visual. Esperem ho gaudeixin!</TextBox>
      <Button text={'Comencem?'} handleClick={ handleStart } />
    </Container>
  )
}

export default Portada