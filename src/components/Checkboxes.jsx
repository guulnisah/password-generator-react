import styled from 'styled-components'

const Checkbox = styled.div`
    margin-bottom: 1.25rem;
        
    label {
        cursor: pointer;
        font-family: 'JetBrains';
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 130%;
        color: var(--almost-white);
        display: flex;
        
        @media (max-width: 445px) {
        font-size: 1rem;
    }
        
        &:hover {
        &::before{
            border: 2px solid var(--neon-green);
        }
        }
    }

    input{
        cursor: pointer;
        opacity: 0;
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
    }

    input:checked{
        &+label::before{
        content: url("data:image/svg+xml,%3Csvg width='14' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%2318171F' stroke-width='3' fill='none' d='M1 5.607 4.393 9l8-8'/%3E%3C/svg%3E");
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--neon-green);
        background-color: var(--neon-green);
        }
    }

    label::before{
        content: '';
        border: 2px solid var(--almost-white);
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 1.5rem;
    }
    
    
`

export default function CheckboxContainer({ options, handleInputChange }) {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <Checkbox>
                <input
                    type="checkbox"
                    id={1}
                    name="hasUppercase"
                    checked={options.hasUppercase}
                    onChange={handleInputChange} />
                <label htmlFor={1}>Include Uppercase Letters</label>
            </Checkbox>
            <Checkbox>
                <input
                    type="checkbox"
                    id={2}
                    name="hasLowercase"
                    checked={options.hasLowercase}
                    onChange={handleInputChange} />
                <label htmlFor={2}>Include Lowercase Letters</label>
            </Checkbox>
            <Checkbox>
                <input
                    type="checkbox"
                    id={3}
                    name="hasNumbers"
                    checked={options.hasNumbers}
                    onChange={handleInputChange} />
                <label htmlFor={3}>Include Numbers</label>
            </Checkbox>
            <Checkbox>
                <input
                    type="checkbox"
                    id={4}
                    name="hasSymbols"
                    checked={options.hasSymbols}
                    onChange={handleInputChange} />
                <label htmlFor={4}>Include Symbols</label>
            </Checkbox>
        </div>
    )
}