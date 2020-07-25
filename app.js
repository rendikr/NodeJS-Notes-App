const fs = require('fs')

// write the first text
fs.writeFileSync('notes.txt', 'My name is Rendi K.')

// append a text to the file
fs.appendFileSync('notes.txt', ' This file is created by NodeJS!')
