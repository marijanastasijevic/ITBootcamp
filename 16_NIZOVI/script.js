let cars = ['Toyota', 'BMW', 'Volvo'];

console.log(cars);
console.log(cars[0]);// Toyota
console.log(cars[1]); // BMW
console.log(cars[2]) // Volvo
console.log(cars[3]); // bice undefined zato sto cetvrti element ne postoji

cars[1] = 'Peugot';
console.log(cars);

cars[1] = cars[1] + '208'
console.log(cars);


let razno = [15, -3.5, 'hello', true, [1,2,3]];
console.log(razno);

// ispis elemenata niza cars -- 

// 1. Nacin da se prodje kroz ceo niz je for petlja

//for(i = 0; i <= cars.length - 1; i++);

// ili 

for(var i = 0; i < cars.length; i++){ // mora strogo jednako da bi ispisivlao pravu duzinu niza, a s obzirom da krece od 0 uvek je to length n-1
    console.log(cars[i]);
}

console.log(i)// ako ovako stavimo bice 3 zato sto nam je i var

// kada zelimo samo da prolazimo kroz niz i kada nam je i samo kao pomocna promenljiva da iterarimo kroz niz onda stavljamo let i i to je u 99% slucajeva tako jer nam i nece trebati van petlje

for(let i = 0; i < cars.length; i++){ // mora strogo jednako da bi ispisivlao pravu duzinu niza, a s obzirom da krece od 0 uvek je to length n-1
    console.log(cars[i]);
}

// Pristup elementima niza razno sa medjupromenljivom

for( let i = 0; i < razno.length; i++){
    console.log(razno[i]);
}

let unutrasnjiNiz = razno[4];

for(let i = 0; i < unutrasnjiNiz.length; i++){
    console.log(unutrasnjiNiz[i]);
}

//Pristup unutrasnjem nizu bez medju promenljive;
for(let i = 0; i < razno[4].length; i++){
    console.log(razno[4][i])
}

razno[4][1] = 5;
for(let i = 0; i < razno[4].length; i++){
    console.log(razno[4][i])
}

// Uvecanje vrednosti unutrasnjeg niza za po 10%;

for(let i = 0; i < razno[4].length; i++){
    //razno[4][i] *= 1.1;
    
    //ili
    razno[4][i] =  razno[4][i] * 1.1;
    console.log(razno[4][i]); // moze i odmah ovde da ispisuje i to je jos bolje resenje nego ponovo da pisemo petlju

}

// for(let i = 0; i < razno[4].length; i++){
//     console.log(razno[4][i])
// }

// 2. Zadatak
// Odrediti zbir elemenata celobrojnog niza

let brojevi1 = [1, 2, 3, 4, 5];

let zbir = 0;

for(let i = 0; i < brojevi1.length; i++){
    zbir += brojevi1[i];
}

console.log(zbir);

// dopuna - ako imam vise nizova, imacemo funkciju
let suma = (niz) => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
    }

    return suma;
}

let brojevi2 = [3, 4, 5];

//pozivi funkcija
console.log(suma(brojevi2));
console.log(suma(brojevi1));


// 3. Zadatak
// Odrediti proizvod elemenata celobrojnog niza.

let brojevi3 = [3, 5, 8, 2];

let proizvodEl = (niz) => {
    let proizvod = 1;
    for(let i = 0; i < niz.length; i++){
        proizvod *= niz[i];
    }

    return proizvod;
}

console.log(proizvodEl(brojevi3));
console.log(proizvodEl(brojevi1));
console.log(proizvodEl(brojevi2));

// 4. Zadatak
// Odrediti srednju vrednost elemenata celobrojnog niza.

let srednjaVrednost = (niz) => {
    let suma = 0;
    let br_brojeva = 0;

    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
        br_brojeva++;
    }

    return suma / br_brojeva;
};

let nizBrojeva = [1, 2, 3, 4, 5];
let nizBrojeva2 = [2, 5, 10]

console.log(srednjaVrednost(nizBrojeva)); 
console.log(srednjaVrednost(nizBrojeva2));

// 2. Varijata kada delimo sa duzinom niza i iskoristimo funkciju koju imamo
let srednjaVrednost2 = (niz) => {
    let zbir = suma(niz);
    let br = niz.length;
    return zbir / br
}

console.log(srednjaVrednost2(nizBrojeva));

// Treca varijanta
let srVrednost3 = niz => suma(niz) / niz.length;
console.log(srVrednost3(nizBrojeva)); 

// zadatak 4a) Naci srednju vrednost parnih elemenata celobrojnog niza

let srednjaVrednostParnih = (niz) => {
    let suma = 0;
    let br_brojeva = 0;

    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0){
            suma += niz[i];
            br_brojeva++;
        } 
    }
    return suma / br_brojeva;
};

console.log(srednjaVrednostParnih(nizBrojeva));


// 5. Zadatak
//Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVrednostEl = (niz) => {
    let max = niz[0];

    for(i = 1; i < niz.length; i++){ //krecem od 1 zato sto sam prvi element vec stavila da mi bude max, zato sada obradjujem od drugog elem
        if(niz[i] > max){
            max = niz[i];
        };
    };

    return max;
}

let nizBrojeva3 = [-2, 5, 1, 8, 6]

console.log(maxVrednostEl(nizBrojeva));
console.log(maxVrednostEl(nizBrojeva2));
console.log(maxVrednostEl(nizBrojeva3));

// 6. Zadatak
//Odrediti minimalnu vrednost u celobrojnom nizu.

let minVrednostEl = (niz) => {
    let min = niz[0];

    for(i = 1; i < niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
        };
    };

    return min;
};

console.log(minVrednostEl(nizBrojeva));
console.log(minVrednostEl(nizBrojeva2));
console.log(minVrednostEl(nizBrojeva3));

// 7. Zadatak
//Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexOfMax = (niz) => {
    let max = niz[0];
    let index = 0;

    for(i = 0; i < niz.length; i++){
        if(niz[i] > max){
            max = niz[i];
            index = i;

        };
    };

    return index;
}

console.log(indexOfMax(nizBrojeva3));

// radila Jelena --  kada je element jednak maximumu mi treba da sacuvamo taj index
// Ovakva funkcija vraca poslednji index sa maksimalnom vrednoscu
let indexMaxNiza = (niz) => {
    let max = maxVrednostEl(niz);
    let index = -1; // stavljamo -1 da bi bili sigurno da nam je apdejtovan index zato sto index -1 ne postoji

    for(let i = 0; i < niz.length; i++){
        if(max == niz[i]){
            index = i;
        };
    };

    return index;
}

//[15, 13, 10];
// 1. max = 15;
// 1. index = 0; 
let numbers = [15, 13, 15, 10, 15]
console.log(indexMaxNiza(numbers));

//max = 15;
// index = 4

// Ovakva funkcija vraca index prvog maksimuma
let indexMaxNiza2 = (niz) => {
    let max = maxVrednostEl(niz);
    let index = -1; // stavljamo -1 da bi bili sigurno da nam je apdejtovan index zato sto index -1 ne postoji

    for(let i = 0; i < niz.length; i++){
        if(max == niz[i]){
            index = i;
            break;
        };
    };
    return index;
};

console.log(indexMaxNiza2(numbers));

// Druga varijanta;
let indexMaxNiza3 = (niz) => {
    let max = maxVrednostEl(niz);
    let index = -1; // stavljamo -1 da bi bili sigurno da nam je apdejtovan index zato sto index -1 ne postoji

    for(let i = 0; i < niz.length; i++){
        if(max == niz[i]){
            index = i;
            return index; // ovo mozemo i bez promenljive index nego samo da kazemo return i;
        };
    };
};

console.log(indexMaxNiza3(numbers));


// 9 Zadatak
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brElVeciOdSrVr = (niz) => {
    let brElem = 0;
    let sredVred = srednjaVrednost(niz);
    
    for(let i = 0; i < niz.length; i++){
        if(niz[i] > sredVred){
            brElem++;
        }
    }

    return brElem;
}

let numbers2 = [2, 5, 6, 7, 10];
let numbers3 = [20, 50, 80];

//srednja vred = 6 // output 2
// srednja vrednost 50 // output 1

console.log(brElVeciOdSrVr(numbers2));
console.log(brElVeciOdSrVr(numbers3))

// 10 Zadatak 
// Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPozitivnihEl = (niz) => {
    let zbir = 0;

    for(let i = 0; i < niz.length; i++){
        if(niz[i] > 0){
            zbir += niz[i]
        }
    }

    return zbir;
}

let numbers4 = [2, 5, -1, 7, -6, 10]; // 24
console.log(zbirPozitivnihEl(numbers4));


// 11. Zadatak
//Odrediti broj parnih elemenata u celobrojnom nizu.

let brParnihElem = (niz) => {
    let brParnih = 0;

    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0){
            brParnih++
        };
    };

    return brParnih;
};

console.log(brParnihElem(numbers2));

// 12. Zadatak 
// Odrediti broj parnih elemenata sa neparnim indexom;
let paranBrNeparanInd = (niz) => {
    let br = 0;

    for (let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0 && i % 2 != 0){
            br++
        };
    };

    return br;
};

let num5 = [10, 12, 11, 13, 14, 16];
console.log(paranBrNeparanInd(num5));// output 2
console.log(paranBrNeparanInd(numbers4)); // output 1

//Drugi nacin

let paranBrNeparanInd2 = (niz) => {
    let br = 0;

    for (let i = 1; i < niz.length; i+=2){
        if(niz[i] % 2 == 0){
            br++
        };
    };

    return br;
};

console.log(paranBrNeparanInd2(num5));

// 13. Zadatak
//  Izračunati sumu elemenata niza sa parnim indeksom.

let sumaElNepInd = (niz) => {
    let suma = 0;

    for(let i = 0; i < niz.length; i++){
        if(i % 2 != 0){
            suma += niz[i];
        };
    };

    return suma;
}

let num6 = [2, 5, 10, 1] // 6

console.log(sumaElNepInd(num6));

// 14. Zadatak
//Promeniti znak svakom elementu celobrojnog niza.

let promenaZnakaElNiza = (niz) => {
    let elSaPromZnakom = 0;
    let nizSaPromenjenimZnakom = [];

    for(let i = 0; i < niz.length; i++){
        elSaPromZnakom = 0 - niz[i];
        nizSaPromenjenimZnakom.push(elSaPromZnakom);
    };

    return nizSaPromenjenimZnakom;
};

let num7 = [-2, 5, 8, -1];
let num8 = [5, -1, -13, 10, 6]
console.log(promenaZnakaElNiza(num7));
console.log(promenaZnakaElNiza(num8));


// Nelin nacin

let znak = (niz) => {
    for(let i = 0; i < niz.length; i++){
        niz[i] = niz[i] * (-1);
    };
};

znak(num8);
console.log(num8);


// 15. Zadatak
// Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let neparIndexZnak = niz => {
    for(let i = 0; i < niz.length; i++){
        if(i % 2 == 0 && niz[i] % 2 != 0){
            niz[i] = niz[i] * (-1);
        };
    };
};

neparIndexZnak(num8);
console.log(num8);


// 24. Zadatak
// Dati su nizovi
// a[0], a[1], ..., a[n - 1] i 
// b[0], b[1], ..., b[n - 1].
//Formatirati niz c[0], c[1], ..., c[2n - 1] ciji su elementi a[0], b[0], a[1], b[1], ... a[n - 1], b[n - 1];

let zad24a = (a, b) => {
    let n = a.length // mozemo da kazemo i b.length zato sto su iste duzine
    let c = [];

    for(let i = 0; i < n; i++){
        c.push(a[i], b[i]);
    } // c = [a[0], b[0], a[1], b[1], ... a[n-1], b[n-1]];

    return c;
}

//drugi nacin
let zad24b = (a, b) => {
    let n = a.length // mozemo da kazemo i b.length zato sto su iste duzine
    let c = [];

    for(let i = 0; i < n; i++){
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    } // c = [a[0], b[0], a[1], b[1], ... a[n-1], b[n-1]];
      //     0        1     2     3          2n-2    2n-1

    return c;
}

let a = [1, 3, 5, 7];
let b = [1, 2, 3, 4, 5];
let c = zad24a(a,b);
let c1 = zad24b(a,b);
console.log(c);
console.log(c1)

// Zadatak 25

let zad25 = (a, b) => {
    let n = a.length
    let c = [];
    for(let i = 0; i < n; i++){
        c[i] = a[i] * b[i];
    };

    return c;
}

c = zad25(a, b);
console.log(c)


//26. Zadatak

let zad26 = a => {
    let n = a.length;
    let c = [];

    for(let i = 0; i < n / 2; i++){
        b[i] = (a[i] + a[n - 1 - i]) / 2;
    }

    return b
};

c = zad26(a);
console.log(c)








