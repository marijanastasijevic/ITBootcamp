let btnDodaj =  document.getElementById('submit');
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");

btnDodaj.addEventListener("click", () => {
    let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja

    if(inputTaskValue != "") {
        let liNewTask = document.createElement("li"); // Kreiram novi <li>
        liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
        //ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
        inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>

        let inputRadio = document.querySelector('input[name="cekiranje"]:checked');
        //console.log(inputRadio)
        if(inputRadio.value === "beggin"){ //dodajemo li cvor na pocetak //iz radio buttona uvek ispitujemo value zato sto radio treba uvek da ima value a id nije obavezan
            ulTasks.prepend(liNewTask);
        }
        else{
            ulTasks.appendChild(liNewTask) // dodaje,p li cvor na kraj
        }
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