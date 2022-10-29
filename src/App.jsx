import React from 'react'
import * as styles from './components/Styles'

import PasswordBox from './components/PasswordBox'
import Slider from './components/Slider'
import CheckboxContainer from './components/Checkboxes'
import Strength from './components/Strength'
import Button from './components/Button'

import getPassword from './utils'


function App() {
  const [password, setPassword] = React.useState('P4$5W0rD!')
  const [strength, setStrength] = React.useState('weak')
  const [options, setOptions] = React.useState({
    length: 10,
    hasUppercase: true,
    hasLowercase: true,
    hasNumbers: true,
    hasSymbols: false
  })
  const [copied, setCopied] = React.useState(false)

  const { length, hasUppercase, hasLowercase, hasNumbers, hasSymbols } = options

  function validatePassword(length) {
    if (length === 0) { setStrength('') }
    else if (length > 0 && length <= 5) { setStrength('too weak') }
    else if (length > 5 && length <= 10) { setStrength('weak') }
    else if (length > 10 && length <= 15) { setStrength('medium') }
    else if (length > 15 && length <= 20) { setStrength('strong') }
  }

  function handleClick() {
    setPassword(prevPassword =>
      prevPassword = getPassword(hasUppercase, hasLowercase, hasNumbers, hasSymbols, length))
  }

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    validatePassword(length)
    setOptions(prevOptions => {
      return {
        ...prevOptions,
        [name]: value
      }
    })
  }

  function handleCopy(e) {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true)
      setTimeout(() => { setCopied(false) }, 2000)
    });
  }

  return (
    <styles.Container>
      <styles.Title>Password Generator</styles.Title>
      <PasswordBox password={password} handleCopy={handleCopy} copied={copied} />

      <styles.Box>

        <styles.TextContainer>
          <styles.Text>Character Length</styles.Text>
          <styles.Number>{length}</styles.Number>
        </styles.TextContainer>

        <Slider
          max={20}
          value={length}
          name="length"
          onChange={handleInputChange}
        />

        <CheckboxContainer
          options={options}
          handleInputChange={handleInputChange}
        />

        <Strength strength={strength} />

        <Button handleClick={handleClick}>
          <span>Generate</span>
          <svg
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#24232C"
              d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
          </svg>
        </Button>

      </styles.Box>

    </styles.Container >
  )
}

export default App
