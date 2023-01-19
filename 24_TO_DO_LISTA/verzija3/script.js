let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");

inputTask.addEventListener("keyup", e => {
    console.log(e)
    console.log(e.key, e.keyCode);


    if(e.key === 'Enter'){

        let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja

        if(inputTaskValue != "") {
            let liNewTask = document.createElement("li"); // Kreiram novi <li>
            liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
             //ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
                

            let inputRadio = document.querySelector('input[name="cekiranje"]:checked');
            //console.log(inputRadio)
            if(inputRadio.value === "beggin"){ //dodajemo li cvor na pocetak //iz radio buttona uvek ispitujemo value zato sto radio treba uvek da ima value a id nije obavezan
                ulTasks.prepend(liNewTask);
            }
            else{
                ulTasks.appendChild(liNewTask) // dodaje,p li cvor na kraj
            }
        }

        inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
    }

})

ulTasks.addEventListener('click', (e) => { //e - event - vraca razne funkcionalnosti, propertije...
    // console.log('KLiknuto na ul')
    // console.log(e);
    // console.log(e.target)
    // console.log(e.target.tagName)

    if(e.target.tagName === 'LI'){
        console.log('Kliknuti na li');
        //e.target.tagName.toggle('precrtaj');
        e.target.remove()
    }
});




////////////LOCAL STORAGE//////////////////////
// Smestanje u lokalnu memoriju
localStorage.setItem('username', 'Marija')  //set item prihvata dva parametra  - tipa string, ne vraca nista(void), samo postavlja vrednosti
localStorage.setItem('city', 'Beograd')

// ovo se pojavljuje u lokalnoj memoriji i ako se makar sam jednom pojavi u scriptu, cak i ono sto zakomentarisemo bice u lokalnoj memoriji

//Update u lokalnoj memoriji
localStorage.setItem('username', 'Jelena') // istoj promenljivoj postavljamo drugu vrednost
//ukoliko key postoji vec u local storage onda vrsi update vrednosti za taj key
// ukoliko key ne postoji u local storage, onda vrsi dodavanje(novi unos) u local storage


//Uzimanje vrednosti iz locale storage
console.log(localStorage.getItem('city'));
let n = localStorage.getItem('username');
console.log(n);

localStorage.setItem('year', 28);
let god = localStorage.getItem('year');
god++;
localStorage.setItem('year', god);
console.log(`Imam ${god} godina`);