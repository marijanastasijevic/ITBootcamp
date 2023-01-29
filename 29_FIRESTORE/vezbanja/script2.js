
/*
db.collection('customers')
.doc('cust001')
.delete()
.then(() => {
    console.log("Dokument je uspesno izbrisan") // ako je dokument vec izbrisam i ponovo pokrenemo nece se javiti greska
}) 
.catch((e) => {
    console.log("Greska" + e);
})

//Dodavanje dokumenta u kolekciju preko metode add -- add metoda se koristi kod collection a set metoda se koristi kod doc. --- obe sluze za dodavanje

db.collection('customers')
.add({
    name: 'Mika Mikic', 
    age: 25,
    salery: 800,
    addresses: ['Beograd', 'Novi Sad']
})
.then(() => {
    console.log("Dokument je uspesno dodat") // ako je dokument vec izbrisam i ponovo pokrenemo nece se javiti greska
}) 
.catch((e) => {
    console.log("Greska" + e);
})


// GET METODA
// 1. Moze se dohvatiti jedan dokument
// 2. Moze se dohvatiti vise dokumneta


//1.

db.collection('users')
.doc('vristic')
.get()
.then((doc) => {
    if(doc.exists){
        let data = doc.data() // data je metoda koja nam vraca podatke
        console.log("Uspesno skinut dokument: " + doc.id)
        console.log(data);
    }
    else{
       
    }
})
.catch((e) => {
    console.log("Greska" + e)
});

//2. 
db.collection('customers')
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


// GET metod kod kolekcije
//1) Prikazivanje dokumenata u odredjenom redosledu(orderBy)
// 2) Prikazivanje odredjenog broja dokumenata (limit)
// 3) Prikazivanje dokumenata koji zadovoljavaju odredjene kriterijuma  - filtriranje(where)


//orderBy
db.collection('customers')
.orderBy("salery", 'desc')
.orderBy('name', 'asc')
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




//2) limit
db.collection('customers')
.orderBy("salery", 'desc')
.orderBy('name', 'asc')
.limit(2)
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


//3) where

db.collection("customers")
//.where('selary', '>', 500) //svi oni cija je plata veca od 500
//.where('salery', '<=', 600) // svi oni cija je plata manja ili jednaka 600
//.where('name', 'in', ['Laza', 'Mika']) // ovo vec trazi kreiranje indexa
.where('name', ">=", "M")
.where('name', '<', 'N')
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



// Procitati sve customere koji imaju adresu u Nisu

db.collection('customers')
.where('addresses', "array-contains", 'Nis')
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

//Imaju platu veću ili jednaku od 500

db.collection('customers')
.where('salery', ">=", 500)
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


//Imaju platu između 300 i 800,
db.collection('customers')
.where('salery', ">", 300)
.where('salery', '<', 800)
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


//Imaju platu manju od 900, i imaju 30 godina,

db.collection('customers')
.where('salery', "<", 900)
.where('age', '==', 30)
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


// Imaju adresu u Nišu ili Beogradu,

db.collection('customers')
.where('addresses', 'array-contains-any', ["Nis", "Beograd"])
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


//Imaju 22, 25 ili 28 godina.

db.collection('customers')
.where('age', 'in', [22, 25, 28])
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

// Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.

db.collection('tasks')
.orderBy('title', 'desc')
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













