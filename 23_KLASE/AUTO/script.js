import Auto from './auto.js';

let a1 = new Auto('Skoda', 'crna', true); // ovako se pravi objekat klase
console.log(a1);
console.log(a1._marka);
console.log(a1.marka) // ovde se poziva geter marka

let a2 = new Auto('Opel', 'crvena', false);
console.log(a2);

// Klasa - sablon, korisnicki tip
// Objekat - instanca(realizacija) klase

a1.sviraj();
a2.sviraj();

a1._marka = 'Audi';
console.log(a1);

a1._marka = '';
console.log(a1);


a1.marka = 'Peugeot'; // kada se pozivaju SETERI oni se ponasaju kao POLJA, a poziva se metoda i kao parametar se prosledjuje string 
console.log(a1);

a1.marka = '';
a1.boja = 'zuta'
a1.imaKrov = false;
console.log(a1);

//pozivanje getera

console.log(a1.marka + ' ' + a1.boja + ' ' + a1.imaKrov);

let a3 = new Auto("", "", 0);
console.log(a3)