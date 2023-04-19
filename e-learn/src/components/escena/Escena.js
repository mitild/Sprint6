import styled from "styled-components"

const StyledP = styled.p`
  border: 2px solid black;
  border-radius: 25px;
  padding: .7em 1.2em;
  margin: 1em 3em;
`;

const Escena = ( {text} ) => {
  return(
    <div>
      <StyledP> { text } </StyledP>
    </div>
  )
}

export default Escena