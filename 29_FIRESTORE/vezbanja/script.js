console.log(db); // db  - objekat "baze podataka"

let users = db.collection('users');
console.log(users);

let user1 = users.doc('mdaskalovic');
console.log(user1);

let user2 = db.doc('users/jmatejic'); // preko ovih objekata koje smo dobili ide asinhroni poziv prema serveru
console.log(user2);

/*
Kada "pikiramo" dokument preko ovih komandi,
mozemo da izvrsimo jednu od osnovne 4 operacije:
    CRUD(Create, Read, Update, Delete)
    Create: doc.set(...)
    Read: doc.get(...)
    Update: doc.update(...)
    Delete: doc.delete(...)

    Sve ove metode rade asinhrono
    Sve cetiri metode kao rezultat vracaju Promise zato sto je to nacin da se sinhronizuju asinhroni pozivi
    To za posledicu ima da MOZEMO DA LANCAMO then() i catch() na bilo koju od ove 4 metode
*/

db.collection('customers')
.doc('cust001')
.set({
    neme: 'Laza Lazic',
    age: 35,
    adresses: ["Beograd", "Cacak"],
    salery: 400 // nakon set metode mora then i catch
})
.then(() => {
    console.log('Uspesno dodat musterija')
})
.catch((err) => {
    console.log('Greska' + err)
})

db.collection('customers')
.doc('cust001')
.set({
    height: 185,
}, {
    merge: true
})
.then(() => {
    console.log('Uspesno dodat musterija')
})
.catch((err) => {
    console.log('Greska' + err)
})

console.log(1);
console.log(2);

let datum1 = new Date("2022-01-28 15:00:00");
let datum2 = new Date("2022-01-28 18:00:00")

db.collection('tasks')
.doc('task01')
.set({
    title: "Slikanje",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: 'Radionica'
})
.then(() => {
    console.log('Task uspesno dodat')
})
.catch(() => {
    console.log('Greska' + err)
})


// db.collection('tasks')
// .doc(task01)
// .update({
//     description: 'Slikanje ako stignem'
// })
// .then(() => {
//     console.log('Task uspesno dodat')
// })
// .catch(() => {
//     console.log('Greska' + err)
// })

db.collection('users')
.doc('mantic')
.set({
    name: "Mika",
    surname: 'Antic',
    age: 70,
    usename: 'ma'
})
.then(() => {
    console.log('Task uspesno dodat')
})
.catch(() => {
    console.log('Greska' + err)
})


// Update
db.collection('users')
.doc('mantic')
.update({
    age: 75,
    adresses: ['Beograd', 'Smederevo']
})
.then(() => {
    console.log('Korisnik uspesno promenjen');
    return db.collection('users')
    .doc('mantic')
    .update({
        age: 75,
        adresses: firebase.firestore.FieldValue.arrayUnion('Sabac') // ovako dodajemo jos jedan element u niz adrese
    })
})
.then(() => {
    console.log('Korisnik uspesno promenjen')
})
.catch(err => {
    console.log(err)
})



