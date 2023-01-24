console.log('callback');

let getResponse = (resource) => {
    // 1. kreiranje XML objekta
    let request = new XMLHttpRequest();
    //callbackFunction()

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);

    //3. Sslanje zahteva
    request.send();

    let obj = new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                resolve(request.responseText) // sve je ok i koristimo resolve kome prosledjujemo podatke iz json.fajla
            }
            else if(request.readyState === 4){
                reject('Nije moguce dohvatiti podatke'); // nesto nije ok i koristimo reject kome saljemo tekst greske
            }
        });
    })

    return obj;
}

getResponse('../JSON/prvi.json').then(sadrzaj => {
    console.log('prvi.json izvrsen(resolved)', sadrzaj);
    return getResponse("../JSON/drugi.json") //vraca Promis ukoliko je resolved, na njega se odnosi naredni then
}).then(sadrzajDrugog => {
    console.log('drugi.json resolved', sadrzajDrugog)
    return getResponse("../JSON/treci.json") //vraca Promis, ukoliko je resolved, na njega se odnosi naredni then
}).then(sadrzajTreceg => {
    console.log('treci.json resolved', sadrzajTreceg)
})
.catch(greska => {
    console.log('Promise reject', greska);
})

console.log('KRAJ');