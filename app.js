const chalk = require('chalk')
const getNotes = require('./notes')

const command = process.argv[2]

if (command === 'add') {
  console.log('Adding notes!')
} else if (command === 'remove') {
  console.log('Removing note!')
}
