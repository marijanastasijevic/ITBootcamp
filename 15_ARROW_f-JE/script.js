//imenovane funkcije: kljucna rec - function, ime funkcije, (parametri), {telo funkcije, return}

function sum(a, b){    //imenovane funkcije: kljucna rec - function, ime funkcije, (parametri), {telo funkcije, return}

    //console.log(`Zbir brojeva ${a} i ${b} jednak je ${a + b}`)
    return a + b;
};

let rez = sum(1, 2);
console.log(rez); 

let datum = new Date(); 
let dan = datum.getDate();  


// ANONIMNE FUNKCIJE -- function, (param), {telo f-je, return}
// korisite se za neke provere i slicno, nesto sto ce se koristiti samo jednom na tom mestu gde nam je potrebna
//anonimna funkcija se smesta u promenljivu

let suma = function(a, b){
    return a + b
};

let rezultat = suma(1, 2); // poziv anonimne f-jr preko promenljive suma;
console.log(rez);


// ARROW FUNKCIJE - (anonimne funkcije sa skracenim zapisom)
// Razlika je sto je sintaksa skracena 
// Druga razlika je STO RADE U KONTEKSTU BLOKA U KOME SU DEFINISANE ???? 
let suma2 = (a, b) => {
    return a + b;
};

rezultat = suma2(2, 3);
console.log(rezultat)


////////////////////

let hello = () => {
    console.log(`Hello world`);
}

hello();
hello(); 

let echo = (s1, s2) => {
    let str = s1 + " " + s2;
    console.log(str)
}

echo('Marija', 'Daskalovic')



// zadatak 1 - Napisati arrow funkciju koja prihavata 3 parametra:  ime, prezime, godine
// A koja ispisuje jedan od zadatih tekstova:
// - Osoba ____  ____ je punoletna
// - Osoba ____  ____ je maloletna

let godine = (ime, prezime, godine) => {
    if(godine >= 18){
        console.log(`${ime}  ${prezime} je punoletna`);
    }
    else{
        console.log(`${ime}  ${prezime} je maloletna`);
    }
     
}

let prikaz = godine('Marija', 'Daskalovic', 15);



//drugi nacin
let ispisHTML = (ime, prezime, god) => {
    if(godine >= 18){
        let ispis = `<p>Osoba ${ime} ${prezime} je punoletna</p>`;
        return ispis;
    }
    else{
        let ispis = `<p>Osoba ${ime} ${prezime} je maloletna</p>`;
        return ispis;
    }
}

document.body.innerHTML += ispisHTML("Marija", "Daskalovic", 33);
document.body.innerHTML += ispisHTML("Mika", "Mikic", 12);


//3. Zadatak 
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

//Varijanta 1 --> preko promenljive deklarisane sa let
// let x ima vazenje unutar skoupa funkcije;

let neparan1 = (n) => {
    let x ; 
    if(n % 2 == 1){
        x = true
    }
    else{
        x = false;
    }
   return x
}
console.log(neparan1(22));


// Varijanta 2 -->  preko promenljive deklarisane sa var
// Ovde var ne potire jedno drugo zato sto svaka ima vazenje u svom skoupu

let neparan2 = (n) => {
    if(n % 2 == 1){
        var x = true
    }
    else{
        var x = false
    }

    return x;
}

console.log(neparan2(21));


// Varijanta 3

let neparan3 = (n) => {
    if(n % 2 == 1){
        return true;
    }
    else{
        return true
    }
};

console.log(neparan3(9));

// Varijanta 4 isto kao 3 samo skraceno

let neparan4 = (n) => {
    return(n % 2 == 1);
}

console.log(neparan4(5));
console.log(neparan4(2))

// Varijanta 5 jos skracenije -- samo koristeci svojstva arrow funkcije
// 1) Ako arrow funkciji prosledjujemo TACNO JEDAN PARAMETAR zagrade nisu obavezne

let neparan5 = n => {
    return (n % 2 == 1);
}

console.log(neparan5(5));
console.log(neparan5(2))

// 2) Ako se telo funkcije sastoji SAMO od return naredbe, {} nije obavezno i nije obavezno return
// Preporuka je da se uvek stavljaju viticaste zagrade cak i ako je samo jedna komanda u pitanju
let neparan6 = n => (n % 2 == 1);

console.log(neparan4(5));
console.log(neparan4(2))

// 4. Zadatak
//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

//varijanta 1
// let max2 = (br1, br2) => {
//     let max;

//     if(br1 > br2){
//         max = br1;
//     }
//     else{
//         max = br2;
//     }

//     return max;
// };

//console.log(max2(2,5));

// //varijanta 2
// let max2 = (br1, br2) => {

//     if(br1 > br2){
//         return br1;
//     }
//     else{
//         return br2;
//     }
// }

//console.log(max2(2,5));

//Varijanta 3 sa skracenim zapisom

console.log(`-----Ternarni operator -----`)
let max2 = (br1, br2) => {
    return br1 > br2 ? br1 : br2;
}
console.log(max2(2,5));

// ili 
let maks2 = (br1, br2) => (br1 > br2 ? br1 : br2);
console.log(maks2(2,5))


// FUNKCIJA MAX 4
console.log(`-------- max4 -------`);

let max4 = (br1, br2, br3, br4) => {
    return max2(max2(br1, br2), max2(br3, br4));
}

console.log(max4(2, 5, 6, 1));


//ili

let maks4 = (br1, br2, br3, br4) => {
    return max2(max2(max2(br1, br2), br3), br4);
}

console.log(maks4(4, -5, 6, 9));

// 5. Zadatak
//Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = (adresa) => {
    document.write(`<img src= '${adresa}' width = '300px'>`);
}

slika(`https://media.istockphoto.com/id/1326144217/photo/temple-saint-sava.jpg?s=612x612&w=0&k=20&c=YY53Y6zHodEXOtaeyFSmk2Ad_C9hRvlDhwsOm2LKuTc=`);

//6. Zadatak
// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

let oboji_paragraf = (color) => {
    document.write(`<p style = 'color: ${color}'>Neki tekst</p>`)
}

oboji_paragraf(`red`);
oboji_paragraf(`blue`);
oboji_paragraf(`green`);

// 7. Zadatak
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

let sedmiDan = n => {
    if(n == 1){
        console.log(`Ponedeljak`);
    }
    else if(n == 2){
        console.log(`Utorak`)
    }
    else if(n == 3){
        console.log(`Sreda`)
    }
    else if(n == 4){
        console.log(`Cetvrtak`)
    }
    else if(n == 5){
        console.log(`Petak`)
    }
    else if(n == 6){
        console.log(`Subota`)
    }
    else{
        console.log(`Nedelja`)
    }
}

let date = new Date();
let day = date.getDay();


sedmiDan(day);




