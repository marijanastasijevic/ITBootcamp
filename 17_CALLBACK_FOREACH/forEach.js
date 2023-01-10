// Zadatak 2

let sumaElem = niz => {
    let suma = 0;
    niz.forEach(element => {
        suma += element
    }); // ova arrow funkcija JESTE CALLBACK funkcija

    return suma;
};

let a = [1, 2, 3, 4, 5];

console.log(sumaElem(a)); //  sumaElem NIJE callback funkcija


// Zadatak 5
// Naci maksimalnii element

let maxVr = niz => {    //kada se trazi maksimalni element razlika od for je samo u tome sto se kod for petlje kreceod prvog elementa
    let max = niz[0];
    niz.forEach(el => {
        if(el > max){
            max = el;
        };
    });

    return max;
};

console.log(maxVr(a));

// Zadatak 7
// Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexMaxVr = niz => {
    let max = niz[0];
    let index = 0; 
    niz.forEach((elem, i) => {  // ako se prosledjuju dva parametra prvi je uvek vrednost, drugi je index
        if(elem > max){
            max = elem;
            index = i;
        };
    });

    return index;
}

console.log(indexMaxVr(a));

let b = [1, 3, 6, -8, 6, 6, 4];
console.log(indexMaxVr(b)); //2 --> zato sto kada dodje do prve sestice nijedana sectica nije veca od te

let indexMaxVr2 = niz => {
    let max = maxVr(niz);
    
    niz.forEach((el, i) => {
        if(el == max){
            return i; // kada koristimo forEach petlje ne mozemo da prekinemo izvrsenje sa return i sa break, jer forEach poziva bukvalno za svaki element niza callBack funkciju, tako da OVAKO NE MOZE DA SE RESI ZADATAK; vratice se undefined zato sto f-ja indexMaxVr2 nema return
        };
    });
};

console.log(indexMaxVr2(b));

let indexMaxVr3 = niz => {
    let max = maxVr(niz);
    let index = -1;
    
    niz.forEach((el, i) => {
        if(el == max){ // ovako dobijamo poslednji element  a ak pored ovoga u uslovu stavimo && index == -1 dobicemo prvo pojavljivanje maksimalne vrednosti
            index = i;
        };
    });

    return index;
};

console.log(indexMaxVr3(b)); 


let indexSvihMaxVredbosti = niz =>{
    let max = maxVr(niz);
    let indexi = [];

    niz.forEach((el, i) => {
        if(el == max){
            indexi.push(i);
        }
    });

    return indexi;
}

console.log(indexSvihMaxVredbosti(b));


// Zadatak 19
//Ispisati dužinu svakog elementa u nizu stringova. 

let duzineStringova = (niz) => {
    let duzinaStringa = 0;
    niz.forEach((el, i) => {
        duzinaStringa = el.length;
        console.log(`Duzina ${i +1}. stringa je: ${duzinaStringa} `)
    });
};

let nizImena = ['Marija', 'Nela', 'Stefan', 'Jelena', 'Vuk', 'Aleksandra'];

console.log(duzineStringova(nizImena));


// Stefanova varijanta

let duzineSvihStringova = (niz) => {
    niz.forEach(el => {
        console.log(el.length);
    });
};

console.log(duzineSvihStringova(nizImena));

// Zadatak 20
//Odrediti element u nizu stringova sa najvećom dužinom.

let najvecaDuzina = (niz) => {
    let maxDuzina = niz[0].length;

    niz.forEach(el => {
        if(el.length > maxDuzina){
            maxDuzina = el.length
        };
    });

    return maxDuzina;
}

console.log(najvecaDuzina(nizImena));


// Stefanova verzija

let maxDuzinaPoslednji = (niz) => {
    let maxD = 0;
    niz.forEach(el => {
        if(el.length > maxD){
            maxD = el.length
        };
    });

    let maxStr = undefined;
    niz.forEach(el => {
        if(el.length == maxD){
            maxStr = el;
        }
    })

    return maxStr;
}

console.log(maxDuzinaPoslednji(nizImena)); // Jelena


// ova funkcija vraca prvi element sa maksimalnom duzinom
let maxDuzinaPrvi = (niz) => {
    let maxD = 0;
    niz.forEach(el => {
        if(el.length > maxD){
            maxD = el.length
        };
    });

    let maxStr = undefined;
    niz.forEach(el => {
        if(el.length == maxD && maxStr == undefined){
            maxStr = el;
        }
    })

    return maxStr;
}

console.log(maxDuzinaPrvi(nizImena)); // Marija


//Zadatak 21
let prosecnaDuzina = (niz) => {
    let duzina = 0;
    niz.forEach(el => {
        duzina += el.length
    });

    return duzina / niz.length;
};

let brojNatprosecnoDugih = (niz) => {
    let prosDuz = prosecnaDuzina(niz);
    let brStingova = 0;

    niz.forEach(el => {
        if(el.length > prosDuz){
            brStingova++;
        };
    });

    return brStingova;
}

console.log(prosecnaDuzina(nizImena));
console.log(brojNatprosecnoDugih(nizImena))

//Zadatak 22
//Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let brojStrSadrziA = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el.includes('a') || el.includes('A')){
            br++;
        };
    });

    return br;
};

console.log(brojStrSadrziA(nizImena));

// Zadatak 23
// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 

let brojStrPocinjuA = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el[0] == 'a' || el[0] == 'A'){
            br++;
        };
    });

    return br;
};

console.log(brojStrPocinjuA(nizImena));

