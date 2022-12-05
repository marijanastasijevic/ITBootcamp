console.log('Poruka iz JS datoteke');

//promenljiva mora da se deklarsise pre nego sto ce da se koristi -- var ili let --- let x = 5

let y; // deklarisanje
let x = 3; // deklarisali smo promenljivu i dodelili joj vrednost
console.log(x);
x = 'Pera';
console.log(x);

y = -10; // dodeljuje se pocetna vrednost promenljive y
console.log(y)

x = 8;
console.log(x - y);

let z = true;
console.log(z);

const pi = 3.141592;
console.log(pi);

// const e; // ovo ne moze, mora odmah da joj se dodeli vrednost
// e = 2.71

// primitivni tipovi podataka: 

let age; // age - undefined
console.log(age);
console.log(age + 3) // vraca NaN - NOT A NUMBER;

let age2;
age2 = null; //null je prazna vrednost koju browser pretvara u nulu i krajnji rezultat nem je 3
console.log(age2);//null
console.log(age2 + 3);

let firstName = 'Marija';
console.log(firstName);

let firstName2 = "Marija";
console.log(firstName2);

let firsName3 = "Marija's room";
console.log(firsName3);

let ime4 = 'This was a "funny" joke';
console.log(ime4);

let ime5 = "This was \"funny\" joke"
console.log(ime5);

x = 5;
//x = x + 3;
x += 3
console.log(x)

//x = x / 2;
x /= 2
console.log(x);

x = 6;
x++;
console.log(x);

++x;
console.log(x);

x = 6;
console.log(x++) // 6 - prvo sr iskoristi stara vrednost promenljiv x pa se ina uveca // postikrementiranje
console.log(x); // 7

console.log(++x); //8 - prvo se uveca vrednost promenljive x pa se onda korisi //preinkrementiranje

x = 6;
console.log(x--); // 6 //postdekrementisanje
console.log(--x) // 4 //predekrementiranje


//OSTATAK PRI DELJENJU - MODUO
console.log(7 / 3); // 7 = 2 * 3 + 1 --> kolicnik je 2, a ostatak je 1
console.log(7 % 3); // 1 -- ostatak pri deljenju -- moduo
console.log(24 % 18) // 6 -- kolicnik je 1 a ostatak je 6

console.log((52 % 13) + 1); //1

//STEPENOVANJE **

x = 5;
y = 3;
console.log(x ** 3)





