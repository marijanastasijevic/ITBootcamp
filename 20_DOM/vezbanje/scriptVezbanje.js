let paragraf = document.getElementsByTagName("p");
console.log(paragraf);

let div = document.getElementsByClassName("error");
console.log(div)

let poslednjiRed = document.querySelector("tr:last-child");
console.log(poslednjiRed);

let sviLinkovi = document.querySelectorAll("a");
console.log(sviLinkovi);

for(i = 0; i< sviLinkovi.length; i++){
    console.log(sviLinkovi)
}

let sveSlike = document.querySelectorAll("img");
console.log(sveSlike);

//Selektovati sve paragrafe i u svakom od njih pridodati tekst 'VAZNO'
let sviParagrafi = document.querySelectorAll("p");
console.log(sviParagrafi);

for(i = 0; i < sviParagrafi.length; i++){
    sviParagrafi[i].innerHTML += ' '+ 'vazno!'
}

//Svim divovima na stranici sa klasom 'error' dodati po jedan naslov najvece velicine sa tekstom 'Greska';

let sviDivoviError = document.querySelectorAll('.error');

for(let i = 0; i < sviDivoviError.length; i++){
    sviDivoviError[i].innerHTML += '<h1>GRESKA</h1>'
};

// Neka je n broj paragrafa u datom elementu. U svakom i-tom paragrafu dodati broj i2, za svako i = 1,2,3

for(let i = 0; i < sviParagrafi.length; i++){
    sviParagrafi[i].innerHTML += `${(i + 1)**2}`
}

//Svim slikama dodati alternativni naslov

let sveSLike = document.querySelectorAll('img');

for(let i = 0; i < sveSLike.length; i++){
    sveSLike[i].alt = 'slika'
}

console.log(sveSlike);

//Svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom

for(let i = 0; i < sviParagrafi.length; i++){
    sviParagrafi[i].style.color += 'purple'
};

// Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
// Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.

for(let i = 0; i < sviLinkovi.length; i++){
    sviLinkovi[i].style.padding = '5px';
    sviLinkovi[i].style.fontSize = '18px';
    sviLinkovi[i].style.textDecoration = 'none';

    if(i % 2 == 0){
        sviLinkovi[i].style.backgroundColor = 'green';
        sviLinkovi[i].style.color = 'purple';
    }
    else{
        sviLinkovi[i].style.backgroundColor = 'blue';
        sviLinkovi[i].style.color = 'white';
    }
}

// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 

for(let i = 0; i < sveSLike.length; i++){
    if(sveSLike[i].src.includes('.png')){
        sveSLike[i].style.border = '2px solid red';
    }
}

// Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 

for(let i = 0; i < sviLinkovi.length; i++){
    if(sviLinkovi[i].target == '_blank'){
        sviLinkovi[i].target = '_top'
    }
    else{
        sviLinkovi[i].target = '_blank'
    }
}

console.log(sviLinkovi)





