
let x = 3;
let y = 3;
let z = 40;

console.log(x == y);

if(x == y){
    console.log('Vrednosti promenljivih x i y su jednake');
    console.log('Jos jedna poruke');
    console.log('Vrednosti ' + x + ' i ' + y + ' su jednake')
    console.log(`Vrednosti ${x} i ${y} su jednake`)
}

console.log('Komanda posle if grananja');

x = 5;
x = 4.5;
x = '4';
//y = 4; // isti su po vrednosti ali se razlikuju po tipu -- 
y = '4' // izvrsice se if zato sto su jednake i po tipu i po vrednosti

if(x === y){
    console.log(`Vrednosti x i y su jednake po tipu i po vrednosti`)
}

//x = 4 // ovo ce se izvrsiti
x = '4' // ovo se nece izvrsiti
y = '4'; 


if(x !== y){
    console.log(`Vrednosti x i y su razlicite ili po tipu ili po vrednsoti`)
}

