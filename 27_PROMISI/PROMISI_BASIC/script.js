let getSomething = () => {
    let obj = new Promise((resolve, reject) => { //kreira se promis
        //resolve('Nesto resolve') //ako je sve proslo ok onda je resolve
        reject('Nesto reject') // ako nesto nije proslo ok onda je reject
    });

    return obj; // vraca objekat Promise
}



getSomething().then(a => {
    console.log(`Aktivirana je .then grana ${a}`) //kada funkcija vrati resolve automatski se poziva THAN (realizuje se then grana)
}).catch(b => {
    console.log(`Aktivirana je .catch grana ${b}`) // CATCH se automatski poziva (realizuje) kada funkcija vrati reject

}) //ove funkcije then i catch postoje samo zato sto funkcija vraca promis



