import React from 'react'
import styled from 'styled-components'
import { Box } from './Styles'

export const InnerBox = styled(Box)`
    height: 4.5rem;
    margin-bottom: 2rem;
    background-color: var(--very-dark-grey);
    font-family: 'JetBrains';
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 130%;
    color: var(--grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 1.5rem 2rem;
    
    div{
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    #strength-text {
      font-family: 'JetBrains';
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;
      color: var(--almost-white);
      @media(max-width: 445px) {
        font-size: 1.125rem;
    }
    }
    
    @media(max-width: 445px) {
        height: 3.5rem;
        padding: 1rem;
        font-size: 1rem;
    }
  `

const StrengthBar = styled.span`
  display: inline-block;
  height: 1.75rem;
  width: 0.625rem;
  background-color: ${({ isColored, color }) => { return isColored ? color : 'transparent' }} ;
  border: ${({ isColored }) => { return isColored ? 'none' : '2px solid #fff' }} ;
`

export default function StrengthBox({ strength }) {
    const [color, setColor] = React.useState('#FB7C58')
    const [colored, setColored] = React.useState([])

    function updateBars(strength) {
        if (strength === 'too weak') {
            setColor('#F64A4A')
            const firstState = [
                { id: 1, isColored: true },
                { id: 2, isColored: false },
                { id: 3, isColored: false },
                { id: 4, isColored: false }]
            setColored(firstState)
        }
        else if (strength === 'weak') {
            setColor('#FB7C58')
            const secondState = [
                { id: 1, isColored: true },
                { id: 2, isColored: true },
                { id: 3, isColored: false },
                { id: 4, isColored: false }]
            setColored(secondState)
        }
        else if (strength === 'medium') {
            setColor('#F8CD65')
            const thirdState = [
                { id: 1, isColored: true },
                { id: 2, isColored: true },
                { id: 3, isColored: true },
                { id: 4, isColored: false }]
            setColored(thirdState)
        }
        else if (strength === 'strong') {
            setColor('#A4FFAF')
            const fourthState = [
                { id: 1, isColored: true },
                { id: 2, isColored: true },
                { id: 3, isColored: true },
                { id: 4, isColored: true }]
            setColored(fourthState)
        }
    }

    const bars = colored.map(elem => {
        return (
            <StrengthBar
                key={elem.id}
                isColored={elem.isColored}
                color={color}
            />
        )
    })

    React.useEffect(() => {
        updateBars(strength)
    }, [strength])

    return (
        <InnerBox>
            <span>Strength</span>
            <div>
                <span id='strength-text'>{strength}</span>
                {bars}
            </div>
        </InnerBox>
    )
}