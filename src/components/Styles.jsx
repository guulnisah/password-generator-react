import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 40rem;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        width: 90%;
    }
  `

export const Box = styled.div`
    width: 100%;
    height: 33rem;
    background-color: var(--dark-grey);
    padding: 1.5rem 2rem;
    @media (max-width: 445px) {
        padding: 1rem;
        height: 30rem;
    }
  `

export const Title = styled.h1`
  font-family: 'JetBrains';
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;
  text-align: center;
  color: var(--grey);
  margin-bottom: 1.9rem;
  
  @media (max-width: 445px) {
       font-size: 1rem;
    }
  `

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const Text = styled.span`
  font-family: 'JetBrains';
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 130%;
  color: var(--almost-white);
  
  @media (max-width: 445px) {
       font-size: 1rem;
    }
`

export const Number = styled.span`
  font-family: 'JetBrains';
  font-weight: 700;
  font-size: 2rem;
  line-height: 130%;
  color: var(--neon-green);
  @media (max-width: 445px) {
       font-size: 1.5rem;
    }
`
