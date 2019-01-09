// var obj ={
//     name:"Andrew"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString='{"name":"Andrew" , "age":"19"  }' ;
// var person=JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs= require('fs');

var OriginalNote={
    title:title,
    body:body
}

var OriginalNoteString = JSON.stringify(OriginalNote);

//original note
fs.writeFileSync('notes.json',OriginalNoteString);



var Notestring=fs.readFileSync('notes.json');
var note =JSON.parse(Notestring);
console.log(typeof note);
console.log(note.title);





