console.log(1);
console.log(2);

window.setTimeout(() => {
    console.log('Poruka ispisana nakon tri sekunde')
},1000 * 3)

console.log(3);
console.log(4);

let i = 5;
setInterval(() => {
    console.log(i);
    i++;
}, 1000)

let btn1 = document.querySelector('#click1');
let btn2 = document.querySelector('#click2');
let btn3 = document.querySelector('#click3');
let btn4 = document.querySelector('#click4');
let ispis = document.querySelector('#ispis');

// let osoba = {
//     ime: 'Marija',
//     prezime:'Daskalovic',
//     ispis: function(){
//         console.log(this.ime + ' ' + this.prezime) // ako ovo zapisemo kao arrow funkciju this je window objekat i ispis ce nam vratiti kao undefind, zato kada pisemo metode se uvek upisuju kao anonimne funkcije
//     }
// }

// osoba.ispis()

let tajmer = null

btn1.addEventListener('click', function(e) {
    e.preventDefault();
    let datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();

    if(tajmer === null){
        setTimeout(function(){
            ispis.innerHTML = `${h}:${m}:${s}`;
            tajmer = null;
        }, 1000 * 2)
    } 
})

btn2.addEventListener('click', (e) => {
    e.preventDefault();
    clearTimeout(tajmer);
    tajmer = null;
})

let vr = 0;
let clock = null; // stavlja se zato sto clock ne pokazuje ni na sta// kada prvi put kliknemo -> pokazuje na sat1, kada drugi put kliknemo => sat2, ali sat1 se ne prekida

btn3.addEventListener('click', () => {
    if(clock === null){ // jedino ako nije postavljen sat postavi ga, da ne bi otkucavali istovremeno vise satova
        clock = setInterval(() => {
            // let datum = new Date();
            // let h = datum.getHours();
            // let m = datum.getMinutes();
            // let s = datum.getSeconds();
            // ispis.innerHTML = `${h}:${m}:${s}`;
            vr++;
            ispis.innerHTML = vr;
        },1000)
    
    }
    
})

btn4.addEventListener('click', () => {
    clearInterval(clock);
    clock = null; // ova promenljiva ne pokazuje vise ni na jedan sat, nema sata koji otkucava i moze ponovo novi sat da se uvede u program
});


let btnStart = document.getElementById('click5');
let btnStop = document.getElementById('click6');
let input = document.getElementById('brojac');


let brojac = 0;

btnStart.addEventListener('click', () => {
    if(clock === null){
        clock = setInterval(() => {
            brojac++;
            input.value = brojac;
    
        },1000)
    }
    
})



btnStop.addEventListener('click', () => {
    clearInterval(clock);
    clock = null;
    brojac = 0;
    input.value = '';
})