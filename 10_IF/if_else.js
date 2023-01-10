let x = 5;
let y = 7;

if(x == y){
    console.log('Jednake vrednosti')
}
else{
    console.log('Razlicite vrednosti');
}

//isto kao prethodni samo kontra pitanje
if(x != y){
    console.log('Razlicite vrednosti')
}
else{
    console.log('Iste vrednosti')
}

//Zadatak 1

//Za unetu zapreminu proizvoda, u paragrafu ispisati 'Throw away', ukoliko je proizvod zapremine vece od 100ml. U suprotnom ispisati 'Pack up'

let proizvod = 100;

if(proizvod > 100){
    document.write('<p>Throw away</p>');

}
else{
    document.write('<p>Pack up</p>');
}


//Zadatak 2
//Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.

let temp = 0;

if(temp >= 0){
    document.write('<p style = "color:red;">Temperatura u plusu</p>');
}
else{
    document.write('<p style = "color: blue;">Temperatura u minusu</p>');
}

//Zadatak 3
//U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu). 


let pol = 'm';

if(pol == 'm'){
    document.write("<img src='https://www.shutterstock.com/image-illustration/male-avatar-icon-portrait-handsome-260nw-646179073.jpg' width='100px'>")
}
else{
    document.write("<img src='https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg' width='100px'>")
}

//Zadatak 4
//U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
//Popodne je kada prođe 12:00 sati, ne računajući i to vreme.

let t = new Date();
let time = t.getHours();

if(time > 12){
    document.write('<p>Trenutno je podne</p>')
}
else(
    document.write('<p>Trenutno je jutro</p>')
   
)

// Zadatak 5
// 5.   Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.

let godina = t.getFullYear();
let birthYear = 2022;

let trenutneGodine = godina - birthYear

if(trenutneGodine >= 18){
    document.write('<p>Osoba je punoletna</p>')
}
else{
    document.write('<p>Osoba je maloletna</p>')
}

//Zadatak 6
//Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora

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










    