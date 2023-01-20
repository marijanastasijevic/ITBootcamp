/*
let request = new XMLHttpRequest(); //pravimo http objekat
request.addEventListener('readystatechange', () => {
    //console.log(request.readyState); 
    // ispisala su se 4 razlicita stanja odnosno 5; // 0 = unsend, 1 = opend, 2 = headers_recived 3 = loading 4 = done
    if(request.readyState === 4 && request.status === 200){ //mora da se proveri stanje zato sto tek kada prodje cetvrtu fazu dobija se celokupni odgovor; i taj ready state mora bas da bude 4; osim toga proverava se i status odnosno da li je sve proslo u redu, odgovor mora da stigne do kraja i request status mora da bude 200
        let data = JSON.parse(request.responseText); // data je neki js objekat
        console.log(data);
    }   
    else{
        console.log('Desila se greska')
    }                              
});

//preko anonimne funkcije -- kada this zove taj objekat
// request.addEventListener('readystatechange', function() {
//     //console.log(request.readyState); 
//     // ispisala su se 4 razlicita stanja odnosno 5; // 0 = unsend, 1 = opend, 2 = headers_recived 3 = loading 4 = done
//     if(this.readyState === 4){ //mora da se proveri stanje zato sto tek kada prodje cetvrtu fazu dobija se celokupni odgovor; i taj ready state mora bas da bude 4
//         console.log(this.responseText);
//     }                                 
// });

request.open('GET', "https://jsonplaceholder.typicode.com/posts"); 
request.send();

// 1. Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users

// 2. Ispisati u konzoli one korisnike čiji website ima domen „.com“.

let request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', () =>{
    if(request1.readyState === 4 && request.status === 200){
        let users = JSON.parse(request1.responseText);
        console.log(users)
        users.forEach(user => {
            if(user.website.includes('com')){
                console.log(`Useri ciji doment website sadrzi 'com': ${user.name}: ${user.website}`);
            }
        })
    }
    else{
        console.log(`Desila se greska`)
    }
})

request1.open('GET', "https://jsonplaceholder.typicode.com/users");
request1.send();


// 3. Ispisati korisnike čije ime sadrži reč „Clementin“.

let request2 = new XMLHttpRequest();

request2.addEventListener('readystatechange', () => {
    if(request2.readyState === 4 && request2.status === 200){
        let users = JSON.parse(request2.responseText);
        users.forEach(user => {
            if(user.name.includes('Clementin')){
                console.log(`Useri cije ime sadrzi rec 'Clementin': ${user.name}`)
            }
        })
    }
    else{
        console.log(`Desila se greska`)
    }
})

request2.open('GET', "https://jsonplaceholder.typicode.com/users");
request2.send();

// 4. Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 

let request3 = new XMLHttpRequest();

request3.addEventListener('readystatechange', () => {
    if(request3.readyState === 4 && request3 === 200){
        let users = JSON.parse(request3.responseText);
        users.forEach(user => {
            if(user.company.name.includes('Gruoup') || user.company.name.include('LLC')){
                console.log(`Useri koji rade u kompaniji cije ime sadrzi reč „Group“, ili reč „LLC“: ${user.name}: ${company.name}`)
            }
        })
    }
})

request3.open('GET', "https://jsonplaceholder.typicode.com/users");
request3.send();
*/

// Zadaci sa slajda br 16
let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText);
            resolve(data);
            
        }
        else if(request.readyState === 4){
            reject(`Desila se greska`);
        }
    })

    request.open('GET', "https://jsonplaceholder.typicode.com/users");
    request.send();   
};

let ispisKonzola = poruka => {
    console.log(poruka)
}

let ispisivanjePodataka = (niz) => {
    console.log(niz)
}

getUsers(ispisivanjePodataka, ispisKonzola)




// zadatak2
let webSiteCom = (niz) => {
    niz.forEach(user => {
        if(user.website.includes('.com')){
            console.log(user.website)
        }
    })
}

getUsers(webSiteCom, ispisKonzola);


//zadatak 3
let imeClementin = (niz) => {
    niz.forEach(user => {
        if(user.name.includes('Clementin')){
            console.log(user.name)
        }
    })
}

getUsers(imeClementin, ispisKonzola);

// zadatak 4
getUsers((niz) => {
    niz.forEach(user => {
        if(user.company.name.includes("Group") || user.company.name.includes("LLC")){
            console.log(user.company.name)
        }
    })
}, (poruka) => {
    document.body.innerHTML += poruka
})

// zadatak 5 

let razlicitiGradovi = (niz) => {
    let gradovi = []
    niz.forEach(user => {
        if(!gradovi.includes(user.address.city)){ //ako niz gradova ne ukljucuje odredjeni grad, smesti ga u niz -- zato sto nam trebaju razliciti gradovi
            gradovi.push(user.address.city)
        }
    })

    console.log(gradovi)
}

getUsers(razlicitiGradovi, ispisKonzola)

// zadatak 6

let geoSirinaDuzina = (niz) => {
    let br = 0;

    niz.forEach(user => {
        if(user.address.geo.lat < 0 && user.address.geo.lng < 0){
            br++
        }
    })

    console.log(br)
    
}


getUsers(geoSirinaDuzina,ispisKonzola)