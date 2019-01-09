console.log("Starting app");

const fs= require('fs');
const os = require('os');
const yargs=require('yargs');
const argv=yargs.argv;
const notes= require('./notes.js');
const _=require('lodash');//third partymodel

let command = argv._[0];

console.log('Command:',command);
console.log("processs",process.argv);
console.log("yargs",argv);

if (command =='add') {

   var note=notes.addNote(argv.title,argv.body);
    if (note) {
    console.log('Note Created');
    console.log('--');
    console.log(`Title:${title}`);
    console.log(`Body:${body}`); 
    } else {
    console.log('note taken already');
    }

} else if (command =='list') {

    notes.getAll();

} else if (command == 'read') {

    notes.getNote(argv.title);
    if (note) {
        console.log('Note Found');
        console.log('--');
        console.log(`Title:${title}`);
        console.log(`Body:${body}`);
    } else {
    console.log('Note not found');
    }

} else if (command == 'remove') {

    var NoteRemoved=notes.removeNote(argv.title);
    var message = NoteRemoved ? 'Note was removed':'Note not found';
    console.log('message'); 

} else {

    console.log("Command not recongnized");
    
} 
    

    
 
    





