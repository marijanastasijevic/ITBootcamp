//Iz kolekcije tasks, pročitati sve zadatke, i koji:

//Su prioritetni
/*
db.collection('tasks')
.where('priority', '==', true)
.get()
.then((snapshot) => {
    snapshot.forEach(doc => {
        console.log('Uspesno skinut dokument' + doc.id);
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska" + e)
})



//Treba da se izvrše u tekućoj godini,
let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1) // 1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1) // 1. januar sledece godine
//let datum2 = new Date(godina, 11, 31, 23, 59, 59, 999) // mora da se stavi i vreme sati, minuti, sekunde i milisekunde

let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

db.collection('tasks')
.where('due_date', '>=', ts1)
.where('due_date', '<', ts2)
//.where('due_date', '<=, ts2') // ovo bi bilo sa dodavanjem vremena
.get()
.then((snapshot) => {
    snapshot.forEach(doc => {
        console.log('Uspesno skinut dokument' + doc.id);
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska" + e)
})



//Su završeni

let datum = new Date();
let ts = firebase.firestore.Timestamp.fromDate(datum);

db.collection('tasks')
.where('due_date', '<', ts)
.get()
.then((snapshot) => {
    snapshot.forEach(doc => {
        console.log('Uspesno skinut dokument' + doc.id);
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska" + e)
})
*/

// Tek treba da počnu.
let datum = new Date();
let ts = firebase.firestore.Timestamp.fromDate(datum);

db.collection('tasks')
.where('start_date', '>', ts)
.get()
.then((snapshot) => {
    snapshot.forEach(doc => {
        console.log('Uspesno skinut dokument' + doc.id);
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska" + e)
})





