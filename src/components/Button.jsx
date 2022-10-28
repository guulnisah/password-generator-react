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

export default function Button({ handleClick }) {
  return (
    <StyledButton onClick={handleClick}>
      <span>Generate</span>
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#24232C"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
      </svg>
    </StyledButton>
  )

}