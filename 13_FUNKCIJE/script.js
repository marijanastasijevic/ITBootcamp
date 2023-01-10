console.log(`funkcije`)

//definicija funkcija treba da bude pre poziva funkcije
//u js-u prolazi da se pozove funkcija i pre definicije ali je bolje to ne praktikovati


//void funkcija
function zdravo(){
    
    console.log(`Zdravo!`);

};

zdravo();
zdravo();
console.log(`Hello`);
zdravo();

for(i = 1; i <= 5; i++){
    zdravo(); //poziva funkciju onoliko puta koliko se izvrsi for petlja
}

///////////////////////////

//Name je parametar koji moramo da argumentujemo
//parametar n
function hello(name){
    console.log(`Hello ${name}`);
}

// Imena su argumenti!!!
hello('Marija');
hello('Jelena');
hello('Nevena');

let ime = 'Zlatko';
hello(ime)

////////////
function hello_full_name(ime, prezime){
    console.log(`Hello ${ime} ${prezime}`);
}

hello_full_name('Marija', 'Daskalovic');

let im = 'Ana';
let pr = 'Ivanovic';

hello_full_name(im, pr);

/////////////////////////////

//Zadatak 2
//Napisati funkciju zbir koja računa zbir dva realna broja.
// 
function zbir(a, b){
    let zbir = a + b;7
    console.log(`Zbir ${a} i ${b}: je ${zbir}`)
}

zbir(1,2);
zbir(2,5);
zbir(3,4);


//uradi na drugi nacin kada kao treci argument stavljas operaciju

//Zadatak 5
//Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function fotografija(slika){
    document.write(`<img src = "${slika}" width='150'> `);
}

fotografija('./slike/slika_01.jpg')


//Zadaratk 6
//Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function boji_paragraf(boja) {
    document.write(`<p style = 'color: ${boja};'>Obojeni tekst</p>`)
}

boji_paragraf('red'); //ako nemam navodnike onda je to promenljiva, a kad stavim "" bice bas rec red sto je nama i potrebno

boji_paragraf('blue');
boji_paragraf('purple');

//13 zadatak
//Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function font(font){
    document.write(`<p style = 'font-size: ${font}px;'> Neki text</p>`)
}

font(50);


//14 zadatak
//Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 



// 3. Zadatak
//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
function neparan(n) {
    if(n % 2 == 0){
        return 'Paran broj';
    }
    else{
        return 'Neparan broj'; 
    }
}

let tekst = neparan(11);
console.log(tekst);
//document.write(text);


// 4 Zadatak
//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(br1, br2){
    if(br1 > br2){
        return br1;
    }
    else{
        return br2;
    }
};

let m1 = maks2(3, 6);
console.log(`Veci broj je ${m1}`)


// Drugi deo zadataka
 function maks4(br1, br2, br3, br4){
    if(br1 > br3 && br1 > br3 && br3 > br4){
        return br1;
    }
    else if(br2 > br1 && br2 > br3 && br2 > br4){
        return br2;
    }
    else if(br3 > br1 && br3 > br2 && br3 > br4){
        return br3;
    }
    else if(br4 > br1 && br4 > br2 && br4 > br3){
        return br4;
    }
};

let najveci_broj = maks4(3, 10, 16, 30);
console.log(`Najveci broj od zadatih brojeva je ${najveci_broj}`);


// drugi nacin 

function maks4_2(br1, br2, br3, br4){
    // let veci1 = maks2(br1, br2);
    // let veci2 = maks2(br3, br4);
    // let najveci = maks2(veci1, veci2);
    // return najveci;

    //let najveci = maks2((maks2(br1,br2), maks2(br3, br4)));
    // return najveci;

    return  maks2((maks2(br1,br2), maks2(br3, br4)));

}

let naj = maks4(15, 2, 14, 3);
console.log(naj)

//Zadatak 7
// Napisati program koji sadrzi funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
//Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
