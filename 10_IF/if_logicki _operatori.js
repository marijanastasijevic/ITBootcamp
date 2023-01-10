// and &&
//daje true iskljucivo ako imamo true && true

//Prioritet u logickim operatorima:
// 1. !
// 2. &&
// 3. ||
/*
let a = 5;
let b = 6;

if(a == 5 && b == 6){
    console.log(`Hello!`)
}

//or - ||
//Ne daje true iskljucivi ako su oba izraza netacna
//tj. daje true ako je ukoliko makar jedan izraz tacan

if(a == 5 || b == 6){
    console.log('World')
}

//PRIORITET IMA && najbolje je koristiti zagrade
let c = 7;

if(a == 5 && b == 6 || c == 7){
    console.log(`Sva tri uslova su tacna`)
}
else{
    console.log('Neki od uslova nije tacan');
}

if(a == 5 || b == 6 || c == 7){
    console.log('Makar jedan od ulslova je tacan')
}
else(
    console.log(`Ni jedan od uslova nije tacan, tj. svi uslovi su netacni`)
)


// Negacija !a tacno je ako je !()

if(c != 7){
    console.log(`c je razlicito od 7`);
}

// ! preokrece u suprotno true u false i false u true
if( !(c == 7) ){
    console.log(`c je razlicito od 7`)
}



//21 Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora. 

let a = 3;
let b = 10;
let c = 20;

if(a > b && a > c){
    console.log(`Najveci broj je ${a}`)
}
else if(b > a && b > c){
    console.log(`Najveci broj je ${b}`)
}
else{
    console.log(`Najveci broj je ${c}`)
}

//22. Zadatak - U promenljivu uneti broj koji predstavlja temperaturu vazduha. Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let temp = 10;

if(temp < -15 || temp > 40){
    document.write(`<p>Eksteremna temperatura</p>`)
}
else{
    document.write(`<p>Temperatura je adekvatna</p>`)
}

// 23 Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.


// let d = new Date();
// let godina = d.getFullYear();
// console.log(godina)

let godina = 2020;

if((godina % 4 == 0 && !(godina % 100 == 0)) || godina % 400 == 0){
    console.log(`Godina je prestupna`)
}
else{
    console.log(`Godina nije prestupna`)
}

*/

// 24. Zadatak 
//Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
//U suprotnom ispisati “zatvoreno”.

//Ko bude imao vremena: 
//Ukoliko je butik trenutno otvoren, prikazati i sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati i sličicu zatvorenih vrata.

let dan = 2;
let sat = 15;

if(dan == 0 || dan == 6){
    //vikend
    if(sat >= 10 && sat < 18){
        console.log(`Vikend je i butik je trenutno otvoren`);
        document.write(`<img src='https://t4.ftcdn.net/jpg/03/35/35/49/360_F_335354979_mk5uvGb7pFazluH56HAQ0kAS3efjd1rFjpg'>`);
    }
    else{
        console.log(`Vikend je i butik je trenutno zatvoren`);
        document.write(`<img src='https://www.shutterstock.com/image-vector/close-stencil-font-stamp-square-260nw-1540700669.jpg'>`)
    }
} 
else{
    //radni dan
    if(sat >= 9 && sat < 20) {
        console.log(`Radni dan je i butik je trenutno otvoren`)
        document.write(`<img src='https://t4.ftcdn.net/jpg/03/35/35/49/360_F_335354979_mk5uvGb7pFazluH56HAQ0kAS3efjd1rF.jpg'>`)
        
    }
    
    else{
        console.log(`Radni dan je i butik je trenutno zatvoren`);
        document.write(`<img src='https://www.shutterstock.com/image-vector/close-stencil-font-stamp-square-260nw-1540700669.jpg'>`)
        
    }
}