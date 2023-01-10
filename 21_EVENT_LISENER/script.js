console.log(`events`);

//1. Dohvatiti element na koji zelimo da postavimo osluskivac
let btnHello = document.getElementById('hello');

//2. Postavljamo osluskivac na element koji smo dohvatili
btnHello.addEventListener('click', () => {
    console.log('Hello');
});


//////////////////////
let btnHelloHello = document.getElementById("hello2");
btnHelloHello.addEventListener("dblclick", () => {
    console.log('Hello hello')
});

////////////////////////
let btnEvents = document.getElementById('hello3')
btnEvents.addEventListener('click', () => {
    console.log('Event click')
})

btnEvents.addEventListener("dblclick", () => {
    console.log('Event dbl click')
})

// 1. Zadatak
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.getElementById('brojac');
let brojac = 1
btnBrojac.addEventListener('click', () => {
    console.log(`Brojac je ${brojac}`);
    let paragraf = document.getElementById('paragraf');
    paragraf.innerHTML = brojac;
    brojac = brojac + 1; //brojac++ / brojac+=1
})

// 2. Zadatak
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

// 3. Zadatak
//Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

let btnMinus = document.getElementById('minus');
let btnPlus = document.getElementById('plus');
let spanRez = document.getElementById('rezultat');

let br = 0;

btnMinus.addEventListener('click', () =>{
    br--;
    if(br < 0){
        br = 0;
    }
    spanRez.innerHTML = br;
})

btnPlus.addEventListener('click', () => {
    br++;
    spanRez.innerHTML = br;

    if(br >= 0 && br < 10){
        spanRez.style.color = 'green';
    }
    else if(br > 10){
        spanRez.style.color = 'red'
    }
})


//4.Zadatak
//  Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.


// Brojevi između 0 i 10 zelenom bojom.
// Brojevi preko 10 crvenom bojom.


//5. Zadatak
let inputUnos = document.getElementById('ime');
let btnPrikazi = document.getElementById('prikazi');
let spanPrikaz = document.getElementById('prikaz');
//let inputPol = document.querySelectorAll('input[name="pol"]'); // ili sa getElementsByName

btnPrikazi.addEventListener('click', () => {
    let value = inputUnos.value; // dohvatam vrednost polja, stavlja se ovde zato sto nam treba tek kada kliknemo na dugme
    spanPrikaz.innerHTML = `Hello ${value}`; // ispis vrednosti koju unesemo
    //inputUnos.value = '';
   
})

btnPrikazi.addEventListener("dblclick", () => {
    //Selektovanje samo jednog radio buttona koji je cekiran
    let checkedPol = document.querySelector("input[name='pol']:checked"); //jedan radio button koji je cekiran, vraca html tag
    console.log(checkedPol)
    let valueCheckedPol = checkedPol.value; // daje vrednost (value) iz selektovanog html taga
    console.log(valueCheckedPol);
    //console.log(checkedPol.value);

    //// selektovanje svih radio buttona prema name atributu
    let inputRadios = document.getElementsByName('pol');
    // console.log(inputRadios) //vraca listu

    inputRadios.forEach(input => {
        console.log(input);

        // kako da pitam da li je cekirano bas to polje
        if(input.checked) {
            console.log(input.value);
        }
    })

    // isto postizemo i ukoliko koristimo query selectorAll

    let inputRadiosQuery = document.querySelectorAll('input[name = "pol"]');
    // inputRadiosQuery.forEach(input => )
});

// 7 zadatak

let inputBr1 = document.getElementById('kvadrat');
let btn1 = document.getElementById('izracunaj1');


let inputBr2 = document.getElementById('polovina');
let btn2 = document.getElementById('izracunaj2');

let inputBr3 = document.getElementById('pKruga');
let btn3 = document.getElementById('izracunaj3');

let spanIspis1 = document.getElementById("ispis1")
let spanIspis2 = document.getElementById("ispis2")
let spanIspis3 = document.getElementById("ispis3")


btn1.addEventListener('click', () => {
    let value = inputBr1.value;
    spanIspis1.innerHTML = `${value * value}`;

})

btn2.addEventListener('click', () => {
    let value = inputBr2.value;
    spanIspis2.innerHTML = `${value / 2}`;
})

btn3.addEventListener('click', () => {
    let value = inputBr3.value;
    spanIspis3.innerHTML = `${value * value * 3.14}`;
})