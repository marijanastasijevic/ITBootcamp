import Pacijent from './pacijent.js';

let p1 = new Pacijent('Ani', 165, 45);
let p2 = new Pacijent('Zoi', 202, 105);
let p3 = new Pacijent('Zika', 180, 96);
let p4 = new Pacijent('Jasmina', 173, 65);

let pacijenti = [p1, p2, p3, p4];

// console.log(p1.bmi())
// console.log(p2.bmi())
console.log(p2.bmi());
console.log(p3.bmi());

// p1.stampaj()
// console.log(p1.tezina)

//Ispisati podatke o pacijentu sa najmanjom težinom.

let btnMinTezina = document.getElementById('racunajMinTezinu');
let pMinTezina = document.getElementById('minTezina');

btnMinTezina.addEventListener('click', () => {
    let minPacijent = pacijenti[0];

    pacijenti.forEach( p => {
        if(p.tezina < minPacijent.tezina){
            minPacijent = p;
        }
        minPacijent.stampaj();
    })

    pMinTezina.innerHTML = minPacijent.stampajListu();
})

//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let btnNajveciBmi = document.getElementById('racunajMaxBmi');
let pMaxBmi = document.getElementById('maxBmi');

btnNajveciBmi.addEventListener('click', () => {
    let najveciBmi = pacijenti[0];

    pacijenti.forEach(p => {
        if(p.bmi() > najveciBmi.bmi()){
            najveciBmi = p
        }
        najveciBmi.stampaj();
    })

    pMaxBmi.innerHTML = najveciBmi.stampajListu()

});

// Ispisati sve pacijente čije ime sadrži slovo A.
let btnNadjiPacijente = document.getElementById('nadjiPacijenteSaSlovomA');
let pPacijentSaSLovomA = document.getElementById('pacijentiSaSlovomA');

let sadrziA = (pacijenti) => {
    let pacijentiSaSlovomA = [];

    pacijenti.forEach(p => {
        if(p.ime.includes('a') || p.ime.includes('A')){
            pacijentiSaSlovomA.push(p)
        }
    })

    return pacijentiSaSlovomA;
}

btnNadjiPacijente.addEventListener('click', () => {
    sadrziA(pacijenti).forEach(pacijent => {
        pPacijentSaSLovomA.innerHTML += pacijent.stampajListu()
    })

    
})

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = (pacijenti) => {
    let sumaVisina = 0;
    let brPacijenata = pacijenti.length;

    pacijenti.forEach(p => {
        sumaVisina += p.visina;
    })

    return sumaVisina / brPacijenata;
}

console.log(srednjaVisina(pacijenti));

let divAvgVisina = document.querySelector('#avgVisina');

divAvgVisina.innerHTML = `Prosecna visina svih pacijenata je: ${srednjaVisina(pacijenti)}`;
divAvgVisina.style.fontSize = '30px';
divAvgVisina.style.color = 'blue';

