/*let broj = 1;

if(broj < 0){
    console.log('Broj je manji od nule')
}
else if(broj == 0){
    console.log('Broj je jednak nuli')
}
else if(broj === 1){
    console.log('Broj je jednak jedinici')
}
else(
    console.log('Broj je veci od jedinice')
)

console.log('Kraj grananja')

//Zadatak

let a = 5;
let b = 5;
let c = 5;


//Ako nesto moze da pripada na dva mesta onda ide IF IF IF ..
// Ako nesto pripada samo jednom onda ce ici IF - ELSE IF - ELSE

if(a == b & a==c){
    console.log('Jednakostranicni')
}
if(a == b || a==c || b==c){
    console.log('jednakostranicni')
}

// Zadatak 7
//Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

let d = new Date();
let dan = d.getDay()
console.log(dan);
// dan = 7


if(dan == 0){
    console.log('vikend je')
}
else if(dan < 6){
    console.log('radni dan je')
}
else if(day == 6){
    console.log('vikend je')
}

// //drugi nacin
// if(day == 0){
//     console.log('Vikend')
// }
// else if(day == 6){
//     console.log('Vikend')
// }
// else{
//     console.log('Radni dan')
// }
    


//Zadatak 8
//Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

// let poeni = 80;


// obrni redosled
// if(poeni > 90){
//     console.log('Ucenik je dobio ocenu 10')
// }
// if(poeni > 80){
//     console.log('Ucenik je dobio 9')
// }
// if(poeni > 70){
//     console.log('Ucenik dobija ocenu 8')
// }
// if(poeni > 60){
//     console.log('Ucenik dobija ocenu 7')
// }
// if(poeni > 50){
//     console.log('Ucenik dobija ocenu 6')
// }

// else{
//     console.log('Ucenik je pao ispit')
// }

//Zadaatak 10
//Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let vreme = d.getHours()
console.log(vreme);

if(vreme >= 9 && vreme < 17){
    console.log('Firma radi')
}
else{
    console.log('Ne radi')
}

//Zadatak 11

let p1 = 8;
let k1 = 16;
let p2 = 16;
let k2 = 20;


if(k1 < p2){ 
    console.log("Nema preklapanja")
} 
else if(k2 < p1){ 
    console.log("Nema preklapanja") 
} 
else{ 
    console.log("Ima preklapanja") 
} 

// Zadatak 12
//Ispitati da li je broj paran ili nije

let br = 2;
// 10 / 2 = 5 + ostatak 0
// 8 / 2 = 4 + ostatak 0
// 6 / 2 = 3 + ostatak 0
// 206 / 2 = 103 + ostatak 0
// 0 / 2 = 0
// 2 / 0 -- NIJE DEFINISANO, ne mozemo da delimo sa nulom

let ostatak = br % 2
if(ostatak == 0){
    console.log('Paran broj')
}
else{
    console.log('Neparan broj')
}

//Moze i ovako
if(br%2 == 0){
    console.log('Paran broj')
}
else{
    console.log('Neparan broj')
}

//13
//Za uneti broj ispisati da li je deljiv sa 3 ili ne.  ostaci pri deljenju sa 3 su: 1,2,3

br = 13


if(br % 3 == 0){
    console.log('Broj je deljiv sa 3')
}
else(
    console.log('broj nije deljiv sa 3')
)

//14

// let br1 = 10;
// let br2 = 2;

// if(br1 > br2){
//     console.log(broj1 - broj2)
// }

//16 
//Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 

let num1 = 5;
let num2 = 3;
let num3 = 1;

let max = num1;

if(max < num2){
    max = num2;
}

if(max < num3){
    max = num3
}

document.write(`<p>Maksimum je ${max}</p>`)


// Sa minimumom

let min = num1;
if(num2 < min){
    min = num2;
}
if(num3 < min){
    min = num3
}

document.write(`<p>Minimum je ${min}</p>`)


//odredjivnje srednjeg broja
let srednjiBroj = num1 + num2 + num3 - max - min

document.write(`<p>${srednjiBroj}</p>`)

//Zadatak 15
//Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
//Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.


// let br = 0;
// let prethodnik = br - 1;
// let sledbenik = br + 1

// if(br <= 0){
//     console.log(`Prethodnik  broja ${br} je ${prethodnik}`)
// }
// else{
//     console.log(`Sledbenik broja ${br} je ${sledbenik}`)
// }



//Zadatak 17
//Za učitani broj ispitati da li je ceo.

// let nr = 10;
// console.log(Nunmber.isIntiger(nr);
// if(Number.isInteger(nr)){
//     console.log('ceo broj')
// }
// else{
//     console.log('decimalan broj')
// }
 
let br = 3.8;

if(br % 1 == 0){
    console.log(`Broj ${br} je ceo broj`)
}
else{
    console.log(`Broj ${br} nije ceo broj`)
}

*/






