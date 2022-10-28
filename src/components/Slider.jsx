import styled from 'styled-components'

const Slider = styled.input.attrs({ type: 'range' })`
-webkit-appearance: none;
-moz-appearance: none;
cursor: pointer;
outline: 0;
width: 100%;
height: 0.5rem;
margin-bottom: 2rem;
background: ${({ value }) =>
        `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${value * 5}%, #18171F ${value * 5}%, #18171F 100%);`};

::-webkit-slider-thumb {
-webkit-appearance: none;
width: 1.75rem;
height: 1.75rem;
background-color: #fff;
border-radius: 50%;
}

::-moz-range-thumb {
-moz-appearance: none;
width: 1.75rem;
height: 1.75rem;
background-color: #fff;
border-radius: 50%;
}

&:hover, &:focus {
&::-webkit-slider-thumb {
  background-color: var(--very-dark-grey);
  border: 2px solid var(--neon-green);
}
&::-moz-range-thumb {
background-color: var(--very-dark-grey);
border: 2px solid var(--neon-green);
}
}
`

export default Slider