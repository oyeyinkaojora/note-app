console.log("Starting note.js");

const fs = require('fs');

var fetchNotes = () =>{

    try {

        var noteString=fs.readFileSync('notes-data.json');
        notes =JSON.parse(noteString);

    } catch (e) {
        return [];
    }
};

var saveNotes = () =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) =>{
   var notes = fetchNotes();
   var note ={
       title,
       body
   };

  
   
   var duplicateNotes = notes.filter((note)=>note.title === title );

   if (duplicateNotes.note === 0 ) {

        notes.push(note);
        saveNotes(notes);
        return note;
   }


};

var getAll = () =>{
    console.log("Getting all note");
};

var getNote = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=>note.title === title );
    return filteredNotes[0];
};

var removeNote = (title) =>{
    var note=fetchNotes();
    var filteredNotes= notes.filter((note)=> note.title !== title);
    saveNote(filteredNotes);
};

module.exports={
    addNote,
    getAll,
    getNote,
    removeNote
};

// module.exports.addNote=() => {
//     console.log('adding note', );
// } ;

// module.exports.add= (a,b) => {
//    return a + b ;
// };