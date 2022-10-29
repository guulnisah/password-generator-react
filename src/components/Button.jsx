import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 4rem;
  background-color: var(--neon-green);
  border: none;
  font-family: 'JetBrains';
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  color: var(--dark-grey);
  
  &:hover {
    background-color: transparent;
    border: 2px solid var(--neon-green);
    color: var(--neon-green);
    
    path {
      fill: var(--neon-green);
    }
  }
  
  @media(max-width: 445px) {
      height: 3.5rem;
    }
`

export default function Button({ handleClick, children }) {
  return (
    <StyledButton onClick={handleClick}>
      {children}
    </StyledButton>
  )
}