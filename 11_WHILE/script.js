/* 

//WHILE PETLJA -- izvrsava program sve dok je jedan uslov zadovoljen

//while(uslov){
    //blok naredbi
//}

//Obratiti paznju - obicno se uslov menja u bloku naredbi da bi se izbegao ulaz u beskonacnu petlju
let i = 1;

while(i <=  5){
    console.log('Zdravo');
    i++;
}

console.log(`Poruka nakon while petlje`);
console.log(`Vrednost promenljive i nakon petlje je: ${i}`);

//Ispis brojeva od 1 do 5

i = 1;
while(i <= 5){
    console.log(i);
    i++
}

if(uslov){...}
    while(uslov){...}

    IF --> Blok naredbi se izvrsava 0 ili 1

*/

console.log(`------------- 1. Zadatak -----------------------`)

//1.Zadatak
//Ispisati brojeve od 1 do 20:
//a. Svaki u istom redu
//b. Svaki u novom redu

//Svaki u istom redu;
let i = 1;
let y = '';

while(i <= 20){
    //y += i + " ";
    y = y + i + " "
    i++;
}
console.log(y);

/*
#   |   poruka   |   i
-----------------------
0   |   ""       |   1
1   |   "1 "     |   2
2   |   "1 2 "   |   3
3   |   "1 2 3 " |   4
... | "1 2 3 ......20" | 21
*/



//Svaki u novom redu;
i = 1;

while(i <= 20){
    console.log(i);
    i++;
}

//2. Zadatak
//Ispisati brojeve od 20 do 1.
console.log(`------------- 2. Zadatak -----------------------`)

i = 20;

while(i >= 1){
    console.log(i);
    i--;
}

// 2. nacin koji se ne preporucuje ali moze da se odradi
i = 1;
while(i <= 20){
    console.log(21 - i);
    i++;
}

/*
i = 1 cl - 20 = 21 - i
i = 2 cl - 19 = 21 - i
i = 3 cl - 18
.....

i = 19 cl 2
i = 20 cl 1
*/

// let i = 20;
// let j = '20' // string od dva karaktera -- prvi karakter je '2',drugi je '0'

//kada sabiramo broj i string izvrsice se konverzija broja u string a onda konkatanacija stringova
//20 + '30' // 2030



//3. Zadatak
//Ispisati parne brojeve od 1 do 20.

console.log(`------------- 3. Zadatak -----------------------`);

i = 1;

while(i <= 20){
    if(i % 2 == 0){
        console.log(i)
    }
    i++;
}

// beskonacna petlja ce biti ako se i++ stavi unutar if
/*
#      |    i
---------------
0      |    1
1      |    1
2      |    1
3      |    1
*/

//2. nacin
i = 2;
while(i <= 20){
    console.log(i);
    i += 2;
}

// Zadatak 4
// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

let n = 9; // broj paragrafa
let p = 1; //paragraf

while(p <= n){
    //oboji svaki treci
    if(p % 3 == 0){
        document.write(`<p style = "color: green"> Paragraf ${p}</p>`);
    }
    //oboji prvi
    else if(p % 3 == 1 ){
        document.write(`<p style = "color: yellow"> Paragraf ${p}</p>`);
    }
    // oboji drugi
    else{
        document.write(`<p style = "color: blue"> Paragraf ${p}</p>`);
    }
    p++;
}

//drugi nacin
n=10;
p=1;
while(p <= n){
    if(p % 3 == 0){
        document.body.innerHTML += `<p class = 'white'>Neki tekst</p>`;
    }
    
    else if(p % 3 == 1){
        document.body.innerHTML += `<p class = 'red'>Neki tekst</p>`;
    }
    else{
        document.body.innerHTML += `<p class = 'darkred'>Neki tekst</p>`;
    }
    p++
}

//Zadatak 5
// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

n = 4;
let img = 1;

while(img <= n){
    if(img % 2 == 0){
        document.write("<img src='./slike/1.jpg' width='200' style='border: 4px solid black'>")
    }
    else{
        document.write("<img src='./slike/1.jpg' width='200' style='border: 4px dotted black' >")
    }

    img++;

}

//Zadatak 6 --suma brojeva od 1 do 100
console.log(`-------- 6.zadatak ----------`)
i = 1;
let suma = 0;

while(i <= 100){
    suma += i;
    i++;
}

console.log(`Suma brojeva od 1 do 100 jednaka je ${suma}`);

/*
#    |    suma    |    i
---------------------------
0          0          1
1          1          2
2          3          3
3          6          4
4          10         5
5          15         6
*/


// 7. Zadatak 
//  Odrediti sumu brojeva od 1 do n

console.log(`-------- 7.zadatak ----------`);

i = 1;
n = 2;
suma = 0;

while(i <= n){
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je ${suma}`)



// 8. Zadatak
// Odrediti sumu brojeva od n do m

n = 1;
let m = 5;
suma = 0;
i = n;

while(i <= m){
    suma += i;
    i++;
}

console.log(`Suma brojeva od ${n} do ${m} jednaka je ${suma}`);

// 9. Zadatak
//Odrediti proizvod brojeva od n do m

n = 2;
m = 5;
i = n;
let proizvod = 1; // proizvod ne moze biti nula zato sto se taj prvi mnozi sa sledecim a ne kao kod sume da se na 0 dodaje svaki sledeci

while(i <= m){
    proizvod *= i
    i++;

}

console.log(`Proizvod brojeva od ${n} do ${m} iznosi ${proizvod}`);

// 10. Zadatak
//Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

//Suma kvadrata parnih brojeva
n = 2;
m = 6;
i = n;

let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;



while(i <= m){
    if(i % 2 == 0){
        //sumaKvadrataParnih += (i * i);
        sumaKvadrataParnih  += (i ** 2)
    }
    else{
        //sumaKubovaNeparnih += i * i * i;
        sumaKubovaNeparnih += i ** 3;
    }
    i++;
}

console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} jedanka je ${sumaKvadrataParnih}`)

console.log(`Suma kvadrata neparnih brojeva od ${n} do ${m} jedanka je ${sumaKubovaNeparnih}`)

// Zadatak 11
//Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 4;
i = 1;
let brojDelioca = 0;

while(i <= k){
    if(k % i == 0){
        brojDelioca++;
    }
    i++;
}
console.log(`Broj delioca broja ${k} jednak je ${brojDelioca}`);

// Zadatak 12
//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

k = 1;
if(brojDelioca == 2){
    console.log(`Broj ${k} je prost`)
}
else{
    console.log(`Broj ${k} je slozen`)
}

//uraditi drugi nacin

k = 7;
i = 2;

let prostBroj = true;

while(i < k/2){ // moze da se stavi i k/2
    if(k % i == 0){
        prostBroj = false;
        break;
    }
    i++;
}

if(prostBroj == false){
    console.log(`Broj ${k} je slozen broj`)
}
else{
    console.log(`Broj ${k} je prost broj`)
}


