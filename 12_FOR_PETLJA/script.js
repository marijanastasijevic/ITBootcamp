// WHILE se koristi kada ne znamo koliko ce se nesto puta izvrsiti
// FOR petlja se koristi kada ne znamo koliko ce se puta nesto izvrsiti, jer tacno znamo koliko ce se puta pozvati for petlja


// Program koji ispisuje brojeve od 1 do 5
for(i = 1; i <= 5; i++){
    
    console.log(`Na redu je broj : ${i}`)
}

//Zadatak 1 - Ispisati brojeve od 1 do 20

//WHILE
let w = 1;

while(w <= 20){
    console.log(w)
    w++;
};

//FOR
console.log(`--------------FOR PETLJA----------------`);

for(i = 1; i <= 20; i++){
    console.log(i)
}

//Zadatak 2 -- Ispisat brojeve od 20 do 1
console.log(`------------------------------------`);
for(i = 20;  i >= 1; i--){
    console.log(i);
}

console.log(`---------------- 3 -------------------`);

//Zadatak 3
// Ispisati parne brojeve od 1 do 20 

//Prvi nacin
for(i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
};

// Drugi nacin

console.log(`---------2.nacin(3)`)

for(i = 2; i <= 20; i += 2){
    console.log(i);
}


//Zadatak 4
console.log(`--------------- 4  --------------------`);
// Ispisati dvostruku vrednost brojeva od 5 do 15 *

for(i = 5; i <= 15; i++){   
    console.log(`Dvostruka vrednost od ${i} je ${i * 2}`);
};

/*
i = 5 --> 10;
i = 6 -- > 12;
i = 7 --> 14...
...
i= 14 --> 28
i= 15 --> 30
*/

//Zadatak 5
// Odrediti sumu brojeva od 1 do n
console.log(`--------------- 5 --------------------`);
let n = 3;
let suma = 0;

for(i = 1; i <= n; i++){
    suma += i;
} 

console.log(`Suma brojeva od 1 do ${n} jednaka je: ${suma}`)

// Zadatak 6
// Odrediti sumu od n do m
console.log(`-------- 6 --------------`);

n = 2;
let m = 5;
suma = 0;

for(i = n; i <= m; i++){
    suma += i;
}

console.log(`Suma brojeva od ${n} do ${m} jednaka je: ${suma}`)



// 7 Zadatak  - Odrediti proizvod brojeva od n do m

console.log(`-------- 7 --------------`);

n = 2;
m = 4;

let proizvod = 1;

for(i = n; i <= m; i++){
    proizvod *= i;
}

console.log(`Proizvod brojeva od ${n} do ${m} iznosi: ${proizvod}`)

//provera 
// k = 2 proizvod 2
// k = 3 prizvod 6
// k = 4 proizvod 24


//Zadatak 8*
//Odrediti sumu kvadrata brojeva od n do m

n = 2;
m = 3;
suma = 0;

for(i = n; i <= m; i++){
    suma += (i ** 2)
}

console.log(`Suma kvadrata brojeva od ${n} do ${m} je: ${suma}`)



//Zadatak 9
// Preuzeti proizvoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
//For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).


for(i=1; i <= 3; i++) {
    document.write(`<img src='./slike/${i}.jpg' width='20%'/>`);
}


// SAMO WHILE
// Ispisati prvih n parnih brojeva pocevsi od broja 2 == kada nemamo godnji granicnik uvek ide while

//While moze da izvrsi svaki slucaj koji moze for, ali for ne moze sva sto while

n = 3; 
i = 2;

let brParnih = 0;

while(brParnih < n){
    if(i % 2 == 0){
        brParnih++;
        console.log(`${brParnih}. od ${n} parnih je broj ${i}`)
    } 
    i++;
}

// Koliko brojeva ucestvuje u sumiranju dok suma ne prodje broj k

let k = 10;
suma  = 0;

let br_brojeva = 0; // pitam se koliko brojeva

let y = 1;

while(suma < k){
    suma += y;
    br_brojeva++;
    y++;
}

console.log(br_brojeva)

/*
    k      |      suma      |    br_brojeva       |     y
    --------------------------------------------------------
    10     |         0      |         0                   1
           |         1               1                   2
           |         3               2                   3
           |        6               3                   4
           |         10              4                   5

*/

// Koliko neparnih brojeva ucestvuje u sumiranju dok suma ne prodje broj k

k = 10;
suma  = 0;

br_brojeva = 0; // pitam se koliko brojeva

y = 1;

while(suma < k){
    if(y % 2 != 0){
        suma += y;
        br_brojeva++;
    }
   
    y++;
}

console.log(br_brojeva - 1);

// Zadatak 11
//Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

console.log(`------------- 11 ---------------`)

let br_brojeva_deljivSa13 = 0

for(i = 5; i <= 150; i++){
    if(i % 13 == 0){
        console.log(i)
        br_brojeva_deljivSa13++
       
    }
}

console.log(`U intervalu Od 5 do 13 ima ${br_brojeva_deljivSa13} brojeva koji su deljivi sa 13`); // 13, 26, 39,52, 65, 78, 91, 104, 117, 130, 143

//Zadatak 12 
//Ispisati aritmeticku sredinu od n do m
console.log(`------------- 11 ---------------`);

n = 1
m = 5 // 1 +2+3+4+5= 15 / 5 = 3

let zbir = 0;
br_brojeva = 0;


for(i = n; i <= m; i++){
    zbir += i;
    br_brojeva++;
}

let aritm_sredina = zbir / br_brojeva;
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je:  ${aritm_sredina}`);

// Zadatak 15
console.log(`------------- 15 ---------------`);
// Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

//1045 % 10 == 5  -- poslednja cifra se odredjuje %10

n = 10;
m = 30;

suma = 0;
let br_posled_cif4 = 0; // 14, 24 = 38

for(i = n; i <= m; i++){
    if(i % 10 == 4){
        br_posled_cif4++;
        suma += i
    }
};

console.log(`U opsegu od ${n} do ${m} ima ${br_posled_cif4} broja cija je poslednja cifra 4, i njihova suma je ${suma}`);

// Zadatak 16
console.log(`------------- 16 ---------------`);
//Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 5;
m = 10;
a = 2;
suma = 0

for(i = n; i <= m; i++){
    if(i % a != 0){
        suma += i
    }
}

console.log(`Suma brojeva od ${n} do ${m} koji nisu delljivi sa ${a} je : ${suma}`)

// provera 
// 5, 7, 9 = 21


//20. Zadatak
let str = '<table border="1">';
//ispis redova
for(i = 1; i <= 6; i++){
    if(i % 2 == 0){
        str += 
        `
            <tr class='roze'>
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;
    }
    else{
        str += 
        `
            <tr>
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;

    }
}
str += `</table>`
//document.body.innerHtml += str;
document.write(str)

//21 Zadatak
let lista = `<ul>`

for(i = 1; i<=10; i++){
    if(i % 3 == 0){
        lista +=
        `
            <li>
              <ul>
                    <li>Element ${i}</li>
                </ul>
            </li>
        `
    }
    else{
        lista += `<li>Element ${i}</li>`
    }
}

lista += `</ul>`
document.write(lista);


// {/* <ul>
//     <li>Element 1</li>
//     <li>Element 2</li>

//     <li>
//         <ul>
//             <li></li>
//         </ul>
//     </li>
// </ul> */}



