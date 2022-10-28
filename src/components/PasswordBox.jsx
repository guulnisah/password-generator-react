import styled from 'styled-components'
import { Box, Text } from './Styles'

const SmallBox = styled(Box)`
    height: 5rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    
    input {
      all:unset;
      width: 100%;
      height: 42px;
      font-family: 'JetBrains';
      font-weight: 700;
      font-size: 1.9rem;
      line-height: 130%;
      opacity: ${({ value }) => { return value === 'P4$5W0rD!' ? '0.25' : '1' }};
      color: var(--almost-white);
      @media (max-width: 445px) {
          font-size: 1.5rem;
    }
    }
    
    svg {
        overflow: visible;
        @media (max-width: 445px) {
          width: 17.5px;
          height: 20px;
        }
    }
    
    &:hover {
      svg {  
        cursor: pointer;
        overflow: visible;
      }
      path {
        fill: var(--almost-white);
      } 
    }
  `

const HiddenText = styled(Text)`
  font-size: 1.125rem;
  color: var(--neon-green);
  text-transform: uppercase;
  visibility: ${({ copied }) => { return copied ? 'visible' : 'hidden' }};
  margin-right: 1rem;
`

export default function PasswordBox({ password, handleCopy, copied }) {
  return (
    <SmallBox value={password}>
      <input type="text" readOnly={true} value={password} />
      <HiddenText copied={copied}>copied</HiddenText>
      <svg
        onClick={handleCopy}
        width="21"
        height="24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
          fill="#A4FFAF" />
      </svg>
    </SmallBox>
  )
}