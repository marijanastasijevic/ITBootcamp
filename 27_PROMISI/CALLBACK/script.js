console.log('callback');

let getTodos = (resource, callbackFunction) => {
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

getTodos("../JSON/todos.json", (data, err) => {
    //console.log('Callback okinuta!');
    //console.log(data,err)
    if(data){
        console.log(data); // ispisuje podatke sa kojima moze dalje da se raspolaze
    }
    else{
        console.log(err); // ispisuje gresku
    }
});

console.log('KRAJ');