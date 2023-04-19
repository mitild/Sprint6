import styled from "styled-components"

const StyledP = styled.p`
  border: 2px solid black;
  border-radius: 25px;
  padding: .9em 1.4em;
  margin: 1.5em 3em;
  font-size: .8rem;
`;

const Escena = ({ text, bg }) => {
  return(
    <div>
      <StyledP style={{ backgroundColor: `${bg}` }}> { text } </StyledP>
    </div>
  )
}

export default Escena