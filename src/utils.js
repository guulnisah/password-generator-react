const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '~`!@#$%^&*()_-+={[}],|:;<>.?/'

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

export default function getPassword(hasUppercase, hasLowercase, hasNumbers, hasSymbols, length) {
    let result = ''
    for (let i = 0; i < length; i++) {
        hasUppercase ? result += getRandomElement(uppercase) : ''
        hasLowercase ? result += getRandomElement(lowercase) : ''
        hasNumbers ? result += getRandomElement(numbers) : ''
        hasSymbols ? result += getRandomElement(symbols) : ''
    }
    result = result.slice(0, length).split('').sort(() => { return 0.5 - Math.random() }).join('');
    return result
}