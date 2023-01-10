let sviParagrafi = document.querySelectorAll('p');
console.log(sviParagrafi)

//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

for(let i = 0; i < sviParagrafi.length; i++){
    if(i % 2 == 0){
        sviParagrafi[i].classList.add('error');

    }
    else{
        sviParagrafi[i].classList.add('success')
    }
}

// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.

for(let i = 0; i < sviParagrafi.length; i++){
    if(i % 3 == 0){
        sviParagrafi[i].style.fontSize = '15px'
    }
    else if(i % 3 == 1){
        sviParagrafi[i].style.fontSize = '20px'
    }
    else{
        sviParagrafi[i].style.fontSize = '25px'
    }
}

// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
// if(p.textContent.includes(’success’))

for(let i = 0; i < sviParagrafi.length; i++){
    if(sviParagrafi[i].textContent.includes('error')){
        sviParagrafi[i].classList.add
    }
}


