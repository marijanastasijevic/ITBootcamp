console.log('Primeri callback funkcija');

let myFunction = (callback) => {
    callback();
}

myFunction(() => {
    // realizacija callback funkcije
    console.log('Callback funkcija okinuta!')
});

////////////////////

// Callback funkcija za sabiranje dva broja

let sum = (callback) => {
    callback(5, 7)
}

//1. nacin
// kreirali smo posebnu funkciju kao realizacija i koju cemo prosledjivati kao parametar
function printSum(a, b){
    console.log(a + b);
}

sum(printSum) // poziv funkcije koja realizuje callback ide bez zagrada
// sum kao argument prima print sum; printsum se smesta u callback(16.linija), i tom callbacku prosledjujemo a i b zato sto printSum ocekuje 2 parametra

//2. nacin
sum((a, b) => {
    console.log(a + b)
});

////////////////////////////
let racunaj = (str, cb) => {
    console.log(str);
    let rez = cb(10, 5);
    console.log(rez);
}

racunaj('Oduzimanje', (x, y) => {
    return x - y;
})

racunaj('Deljenje', (x, y) => {
    return x / y;
})

/////////////
let racunaj2 = (str, br1, br2, cbFunkcija) => {
    console.log(str);
    console.log(cbFunkcija(br1, br2))
}

racunaj2('Mnozenje', 4, 7, (x, y) => {
    return x * y;
})

