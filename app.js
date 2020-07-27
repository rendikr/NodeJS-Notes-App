const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note')
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note')
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'Listing the note',
  handler: function () {
    console.log('Listing out all the notes')
  }
})

// add, remove, read, list

console.log(yargs.argv)
