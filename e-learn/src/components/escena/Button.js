import styled from "styled-components"

const StyledBtn = styled.button`
 width: 50%;
 padding: 1em 0;
 cursor: pointer;
`

const Button = ({ text, handleClick }) => {
  return (
    <StyledBtn onClick={ handleClick }>
     { text }
    </StyledBtn>
  )
}

export default Button