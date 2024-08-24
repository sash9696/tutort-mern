#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command('new <note>', 'create a new note', (yargs) => {
    return yargs.positional('note', {
        describe:'The content of the note you want to create',
        type:'string'
    })
  }, 
  (argv) => {
    console.info('argv',argv)
  })
  .option('tags', {
    alias:'t',
    type:'string',
    description:'tags to add to the note'
  })
  .command('all', 'get all the notes', () => {}, 
  (argv) => {
    console.info('argv',argv)
  })
  .command('find <filter>', 'get matching notes', (yargs) => {
    return yargs.positional('filter', {
        describe:'The search text to filter notes',
        type:'string'
    })
  }, 
  (argv) => {
    console.info('argv',argv)
  })
  .command('remove <id>', 'remove a note by id', (yargs) => {
    return yargs.positional('id', {
        describe:'The id of the note you want to remove',
        type:'number'
    })
  }, 
  (argv) => {
    console.info('argv',argv)
  })
  .command('web [port]', 'launch wwebsite to see notes', (yargs) => {
    return yargs.positional('port', {
        describe:'port to bind on',
        default:5000,
        type:'number'
    })
  }, 
  (argv) => {
    console.info('argv',argv)
  })
  .demandCommand(1)
  .parse()

//create the logic for allowing users to add a new note in app

//command to use in terminal
//command can accepts arguments and flags
//use the value of that argument to create a new note





//inbuilt modules,
//user defined modules


//fs module
//http
//require, import
//node:fs/promises
