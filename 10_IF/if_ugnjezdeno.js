//console.log(`marija`)


// Zadatak 18
//Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.
//Učitati dva cela broja i ispitati da li je veći od njih paran. 
//Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.


let a = 10;
let b = 20;
let c = 15;

if(a > b){
    if(a > c){
        console.log(`Najveci boj je ${a}`);
        if(b > c){
            console.log(`Srednji broj je ${b}`)
            console.log(`Najmanji broj je ${c}`)
        }
        else{
            console.log(`Srednji broj je ${c}`);
            console.log(`Najmanji broj je ${b}`)
        }
    }
    else{
        console.log(`Najveci broj je ${c}`);
        console.log(`Srednji boroj je ${a}`);
        console.log(`Najmanji broj je ${b}`);
    }
}
else{
    //a < b
    // ili je b najveci ili je c najveci
    if(b > c){
        console.log(`Najveci broj je ${b}`);
        if(a > c){
            console.log(`srednji broj je ${a}`);
            console.log(`Najmanji broj je ${c}`)
        }
        else{
            console.log(`srednji broj je ${c}`);
            console.log(`Najmanji broj je ${a}`)
        }
    }
    else {
        console.log(`srednji broj je ${b}`);
        console.log(`Najmanji broj je ${a}`)
        console.log(`Najveci broj je ${c}`);
    }
}

//Zadatak 19
//Učitati dva cela broja i ispitati da li je veći od njih paran. 

let br1 = 70;
let br2 = 9;

if(br1 > br2){
    if(br1 % 2 == 0){
        console.log(`Broj ${br1} je veci i paran je`)
    }
    else{
        console.log(`Broj ${br1} je veci i neparan je`)
    }
}
else{
    if(br2 % 2 == 0){
        console.log(`Broj ${br2} je veci i paran je`)
    }
    else{
        console.log(`Broj ${br2} je veci i neparan je`)
    }
}

//20
//Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.


d1 = 12;
m1 = 12;
g1 = 2022;

d2 = 12;
m2 = 2;
g2 = 2021;

// if(d1 > d2){
//     if(m1 > m2){
//         if(g1 > g2){
//             console.log(`Drugi datum je raniji ${d2}. ${m2}. ${g2}`)
//         }
//         else{
//             console.log(`prvi datum je raniji`)
//         }
//     }
// }
// else{

// }

if(g1 < g2){
    console.log(`Raniji datum je: ${d1}.${d2}.${g1}.`)
}
else if(g2 < g1){
    console.log(`Raniji datum je: ${d2}.${m2}.${g2}`)
}
else{
    //Obuhavata kada su godine iste
    if(m1 < m2){
        console.log(`Raniji datum je: ${d1}.${d2}.${g1}.`)
    }
    else if(m2 < m1){
        console.log(`Raniji datum je: ${d2}.${m2}.${g2}`)
    }
    else{
        //Obuhvata one slucajeve kada su i meseci isti
        if(d1 < d2){
            console.log(`Raniji datum je: ${d1}.${d2}.${g1}.`)
        }
        else if(d2 < d1){
            console.log(`Raniji datum je: ${d2}.${m2}.${g2}`)
        }
        else{
            console.log(`Datumi su isti`)
        }
    }
};
