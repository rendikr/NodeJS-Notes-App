const validator = require('validator')
const getNotes = require('./notes')

console.log(getNotes())

console.log(validator.isEmail('gmail.com'))
console.log(validator.isURL('https://mead.io'))
