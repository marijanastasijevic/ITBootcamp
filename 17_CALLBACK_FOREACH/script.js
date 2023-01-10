// Callback funkcija je funkcija koja se prosledjuje kao argument drugoj funkciji;

// Funkcija 1:  prihvata niz kao parametar, for petljom prolazimo kroz svaki element niza i svaki ispisemo u konzoli;
// FUnkcija 2 :  prihvata niz kao parametar, for petljom prolazimmo kroz svaki element niza u svaki ispisemo u div elementu

// umesto ovoga mozemo da imamo jednu funkciju -- kojoj prosledjujemo niz i kojoj prosledjujemo nacin ispisa (niz, nacin ispisa) => for petljom profjemo kroz svaki element niza i svaki ispisemo na zadatu nacin

function ispisKonzola(poruka) {
    console.log(poruka);
};

function ispisStranica(poruka){
    let div = document.getElementById('container');
    div.innerHTML = poruka;
};

function ispisNiza(niz, cb) {
    let poruka = '';
    for(let i = 0; i < niz.length; i++){
        poruka += (niz[i] + ' ');
    };

    cb(poruka);
}

ispisKonzola(`BLA BLA`);
ispisStranica('bla bla bla');

let a = [4, 8, -2, 9, 10];
let b = ['pera', 'mika', 'zika'];
ispisNiza(a, ispisStranica); // ovde se poziva ispis niza pa tek kasnije, ispis stranica(iz tog razloga je ispis stranica CALLBACK funkcija);
ispisNiza(a, ispisKonzola);

ispisNiza(b, ispisKonzola);
ispisNiza(b, ispisStranica);

a.forEach(ispisKonzola);
// forEach je petlja(metoda), koja za svaki element niza poziva callback funkciju a kao parametar te funkcije prosledjje bas taj element niza

// konkretto 37 linija koda za niz a poziva sledece
// ispis konzola(4);
// ispis konzola(8);
// ispis konzola (-2);
// ispis konzola(9);
// ispis konzola(10);

b.forEach(ispisKonzola);
// ispis konzola ('pera');
// ispis konzola('mika');
// ispis konzola('zika');

a.forEach(function(element){
    console.log(element)
});

// forEach ce za svaki element niza a da pozove anonimnu funkciju i prosledice svaki put po jedan element niza

// jos jedan nacin da se iskoristi forEach funkcija

a.forEach(elem => {
    console.log(elem)
});

// pvde ce prvo put da se pozove arrow funkcija sa parametrom a[1] (elem postaje a[1]);
// 2) poziva se arrow funkcija sa parametrom a[2]  (elem postaje a[2])