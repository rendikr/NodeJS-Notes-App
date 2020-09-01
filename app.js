const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'The note title',
      demandOption: true, // this parameter will set the "required" option
      type: 'string'
    },
    body: {
      describe: 'The note contents',
      demandOption: true, // this parameter will set the "required" option
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'The note title',
      demandOption: true, // this parameter will set the "required" option
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading a note')
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'Listing the note',
  handler() {
    console.log('Listing out all the notes')
  }
})

// add, remove, read, list

console.log(yargs.argv)
