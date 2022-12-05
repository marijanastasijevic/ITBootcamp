//1
// let sati = 17;
// let minuti = 43;

// let vremeUMinutima = sati * 60 + minuti;
// console.log(vremeUMinutima)

// Zadatak 1 

let sati = 23;
let minuti = 59;
let odPonoci = sati * 60 + minuti;
console.log(odPonoci);

let doPonoci = 24 * 60 - odPonoci
console.log(doPonoci)

//zadatak 2
//1.nacin
let minOdPonoci = 90;

let hours = Math.floor(minOdPonoci / 60); //Math.floor -- nazi donji veci broj
let minutes = minOdPonoci % 60;

console.log(hours + ":" + minutes);

//2.nacin

minutes = minOdPonoci % 60; // 95 % 60 = 35
hours = (minOdPonoci - minutes) / 60; // (95 - 35) = 60 / 60 - 1

//ZADATAK 4
let datum = new Date() //datum je objekat koji sadrzi info o trenutnom datumu i vremenu;
//let mesec = datum.getMonth() + 1;
//console.log(datum.getFullYear() + '/' + mesec)

let h = datum.getHours();
let m = datum.getMinutes();
console.log(h + ":" + m)
let mop = h * 60 + m;
console.log(mop)

