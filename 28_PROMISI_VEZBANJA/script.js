let form = document.getElementById('order');
let truckCap = document.getElementById('cap');
let result = document.getElementById('result')

function getItems(resourse, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function(){
        if(request.readyState === 4 && request.status === 200){
            //sve ok, obradi zahtev
            let data = JSON.parse(request.responseText);
            //u slucaju kada je resource  = "stock.json" uradi jednu stvar
            //u slucaju kada je resource  = "weights.json" uradi drugu stvar
            //u slucaju kada je resource  = "price.json" uradi trecu stvar
            resolve(data)
        }
        else if(request.readyState === 4){
            //desila se neka graska
            reject("Greska!");
        }
    })
    request.open("GET", resourse); // osim get postoji i post metoda
    request.send();
}

function submitForm1(e) {
    e.preventDefault()
    // 1. Iz fajla stock.json dohvati sve artikle koji nisu na stanju

    let ids = []
    getItems("./JSON/stock.json", (data) => {
        data.forEach(artikal => {
            if(artikal.stock == 0){
                ids.push(artikal.id);
            }
        })

         //2. Iz fajla weights.json dohvati njihovu tezin
        getItems("./JSON/weights.json", (data) =>{
            let totalWeight = 0
            data.forEach(artikal => {
                if(ids.includes(artikal.id)){
                    totalWeight += artikal.weight
                }
            })

            if(totalWeight > truckCap.value){
                result.innerHTML += "Kamion nema dovoljni kapacitet"
            }
            else{
                // 3. AKo tezina nije veca od kapaciteta kamiona, iz fajla prices.json dohvati njihovu cenu
                getItems("./JSON/prices.json", (data) => {
                    let totalPrice = 0;
                    data.forEach(artikal => {
                        if(ids.includes(artikal.id)){
                           totalPrice += artikal.price;
                           
                        }
                    });

                    result.innerHTML = `Ukupna cena proizvoda koji treba da se naruce je ${totalPrice}`;

                }, (message) => {
                    result.innerHTML = message;
                })
            }
            
        }, (message) => {
            result.innerHTML = message;
        })

    }, message => {
        result.innerHTML = message;
    })
   
}

/*
PRVI PRISTUP: Da se funkcije getItems() zovu jedna ispod druge
    OVO NIJE DOBRO
jer svaki poziv getItems je asinhroni poziv, sto znaci da se oni ne izvrsavaju tim redom

DRUGI PRISTUP: Redosled asinhronih poziva se odvija preko callback funkcija
    JESTE TACAN ali je jako nepraktican(callback hell)

TRECI PRISTUP: Pozivi se lancaju preko promisa
    TACAN I PRAKTICAN
*/

//form.addEventListener('submit', submitForm1)

function getItemsReturnPromise(resourse) {

    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.addEventListener("readystatechange", function(){
            if(request.readyState === 4 && request.status === 200){
                //sve ok, obradi zahtev
                let data = JSON.parse(request.responseText);
                //u slucaju kada je resource  = "stock.json" uradi jednu stvar
                //u slucaju kada je resource  = "weights.json" uradi drugu stvar
                //u slucaju kada je resource  = "price.json" uradi trecu stvar
                resolve(data)
            }
            else if(request.readyState === 4){
                //desila se neka graska
                reject("Greska!");
            }
        })

        request.open("GET", resourse); // osim get postoji i post metoda
        request.send();
    })
    
}

function submitForm12(e) {
    e.preventDefault();
    let ids = [];
    getItemsReturnPromise("./JSON/stock.json") //ovde dobijamo promis kao rezultat
    .then((data) => {
        data.forEach(artikal => {
            if(artikal.stock == 0){
                ids.push(artikal.id);
            }
        });
        return getItemsReturnPromise("./JSON/weights.json");
    })
    .then((data) => {
        let totalWeight = 0
        data.forEach(artikal => {
            if(ids.includes(artikal.id)){
                totalWeight += artikal.weight;
            }
        });

        if(totalWeight > truckCap.value){
            result.innerHTML += "Kamion nema dovoljni kapacitet"; // posto ovde ne vracamo promis 
        }
        else{
            return getItemsReturnPromise("./JSON/prices.json")
        }
    })
    .then((data) => {
        if(data !== undefined){ // ali cak i ako ne vracamo promis mi svakako ulazimo u then granu ( upali smo u if granu gde se ne vraca promis i u tom slucaju nam je data undefined i zato kazemo ako je razlicito od undefined onda uradi sledece)
            let totalPrice = 0;
            data.forEach(artikal => {
                if(ids.includes(artikal.id)){
                   totalPrice += artikal.price;
                   
                }
            });

            result.innerHTML = `Ukupna cena proizvoda koji treba da se naruce je ${totalPrice}`;
        }
    })
    .catch((message => { //u bilo kom promisu da se nadje neka greska catch grana ce uhvatiti tu gresku
        result.innerHTML = message;
    }))
}

form.addEventListener('submit', submitForm12)

