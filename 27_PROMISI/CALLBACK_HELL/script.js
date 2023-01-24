console.log('callback');

let getResponse = (resource, callbackFunction) => {
    // kreiranje XML objekta
    let request = new XMLHttpRequest();
    //callbackFunction()

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            //sve OK
            //console.log(request.responseText);
            callbackFunction(request.responseText, undefined) // undefined -- ako nema greske samo da nam se vrati undefined
        }
        else if(request.readyState === 4){
            //nesto nije ok
            //console.log('Nije moguce dohvatiti podatke');
            callbackFunction(undefined, 'Nije moguce dohvatiti podatke')
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);
    request.send();
}

getResponse("../JSON/prvi.json", (data, err) => {
    // Ukoliko je sve OK sa prvi.json fajlom, ispisi podatke i potom ucitaj drugi json.fajl
    if(data){
        console.log(data); // ispisuje podatke sa kojima moze dalje da se raspolaze
        getResponse("../JSON/drugi.json", (data, err) => {
            if(data){
                //ukoliko je sve ok sa drugi.json ispisi njegove podatke i potom ucitaj treci.json fajl
                console.log(data);
                getResponse("../JSON/treci.json", (data, err) => {
                    if(data){
                        console.log(data)
                    }
                    else{
                        console.log(err); //ispisuje greskub ako treci.json nije prosao
                    }
                })
            }
            else{
                console.log(err); //ispisuje greskub ako drugi.json nije prosao
            }
        })
    }
    else{
        console.log(err); // ispisuje greskub ako prvi.json nije prosao
    }
});

console.log('KRAJ');