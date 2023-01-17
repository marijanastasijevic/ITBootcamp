import Film from './film.js'

let film1 = new Film('Gospodar Prstenova', 'Peter Jackson', 2001, [10, 10, 10, 9, 9, 9]);


let film2 = new Film('Nemoguca misija', 'Bard Bird', 2011, [7, 6, 5, 4, 3, 5, 6, 7]);


let film3 = new Film('Betman Begins', 'Christopfer Nolan', 2006, [9, 9 ,9, 9, 8, 10]);


film1.stampaj();
film2.stampaj();
film3.stampaj();

film3.naslov = 'Betman Begins';
film3.godinaIzdanja = 2005;
film3.stampaj();


let filmovi = [film1, film2, film3];

console.log(film1.ocene);

console.log(`Prosecna ocena ${film1.naslov} filma je: ${film1.prosek()}`)

//Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

let vekFilma = (filmovi, vek) => {
    let poslednjaGodina = vek * 100;
    let pocetnaGodina = vek * 100 - 99;

    filmovi.forEach(film => {
        if(film.godinaIzdanja <= poslednjaGodina && film.godinaIzdanja >= pocetnaGodina){
            //film.stampaj();
            console.log(`${film.naslov} - ${film.godinaIzdanja}`)
        }
    })
}

vekFilma(filmovi, 21);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

// ovo nije resenje - ovo racuna prosecnu ocenu prosecnih ocena
// let prosecnaOcena = (filmovi) => {
//     let sumaProseka = 0
//     let brOcena = filmovi.length


//     filmovi.forEach(film => {
//         sumaProseka += film.prosek();
//     });

//     return sumaProseka / brOcena;
// }

//console.log(prosecnaOcena(filmovi));


let prosecnaOcena1 = (filmovi) => {
    let suma = 0;
    let br = 0;

    filmovi.forEach(film => {
        film.ocene.forEach(ocena => {
            suma += ocena;
            //br++
        })

        br += film.ocene.length

    })

    return suma / br;
}

console.log(`Prosecna ocena svih filmova je: ${prosecnaOcena1(filmovi)}`);

// Najbolje ocenjeni film
let najboljeOcenjeni = (niz) => {
    let naj = niz[0];
    niz.forEach((f) => {
      if (naj.prosek() < f.prosek()) {
        naj = f;
      }
    });
    return naj;
  };

  console.log(najboljeOcenjeni(filmovi));

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = (filmovi) => {
    let avgSvihFilmova = prosecnaOcena1(filmovi); // prosecna ocena svih filmova u nizu

    // avgSvihFilmova = 7;
    // 6.5 - 7 = -0.5
    // 6.6 - 7 = -0.4
    // 7.1 - 7 = -0.1
    let minFilm = filmovi[0]; // pretpostavka za film najblizi proseku
    let minRastojanje = Math.abs(avgSvihFilmova - minFilm.prosek());
    

    filmovi.forEach(film => {
        let rastojanje = Math.abs(avgSvihFilmova - film.prosek()) // Koliko se razlikuje prosecna ocena svih filmova od prosecne ocene posmatranog filma
        //console.log(film.prosek())
        if(minRastojanje > rastojanje){
            minRastojanje = rastojanje;
            minFilm = film
        }
    })

    return minFilm;
}

console.log(`Osrednji film: ${osrednjiFilm(filmovi)}`)

//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = (filmovi) => {
    let najboljiFilm = filmovi[0]

    filmovi.forEach(film => {
        if(film.prosek > najboljiFilm.prosek){
            najboljiFilm = film;
        }
    })

    let ocene = najboljiFilm.ocene;
    let najmanjaOcena = ocene[0];

    ocene.forEach(ocena => {
        if(ocena < najmanjaOcena){
            najmanjaOcena = ocena;
        }
    })

    return {film: najboljiFilm.naslov, najmanjaOcena: najmanjaOcena}
}

console.log(najmanjaOcenaNajboljeg(filmovi));

//jelena

let najmanjaOcenaNajboljeg1 = (niz) => {
    let najFilm = najboljeOcenjeni(niz);
    let najslabijaOcena = najFilm.ocene[0];

    najFilm.ocene.forEach(ocena => {
        if(najslabijaOcena > ocena){
            najslabijaOcena = ocena
        }
    })

    console.log(najslabijaOcena)
}

najmanjaOcenaNajboljeg1(filmovi)

//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = (filmovi) => {
    let najmanja = filmovi[0].ocene[0];

    filmovi.forEach(film =>{
        film.ocene.forEach(ocena =>{
            if(ocena < najmanja){
                najmanja = ocena;
            }
        })
    })

    return najmanja;
};

console.log(najmanjaOcena(filmovi))

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
let sveOcene = (filmovi) => {
    let sveOcene = [];

    filmovi.forEach(film => {
        sveOcene = sveOcene.concat(film.ocene)
    })

    //console.log(sveOcene)

    return sveOcene;
}

console.log(sveOcene(filmovi));

let najcescaOcena = (sveOcene) => {
    let brojPonavljanja = 1
    let najcescaOcena = sveOcene[0];

    for(let i = 0; i < sveOcene.length; i++){
        if(najcescaOcena == sveOcene[i]){
            brojPonavljanja++
        }


    }
}

//jelena

let sveOcene1 = niz => {
    let arrSveOcene = []
    
    niz.forEach(film =>{
        //arrSveOcene.push(film.ocene)
        arrSveOcene = arrSveOcene.concat(film.ocene)
    });

    return arrSveOcene;
}

console.log(sveOcene1(filmovi))

let najcescaOcena1 = (nizOcena) => {
   let pretpostavkaNajucestalijiElem = nizOcena[0];
   let brPojavljivanjaPretpostavke = 1; // sigurno se jednom pojavila ta ocena

   for(let i = 0; i < nizOcena.length; i++){
        let tekuci = nizOcena[i]; // ovo je zvezdica (obelezava tekuci element)
        let tekuciBrPojavljivanja = 0;

        for(let j = 0; j < nizOcena.length; j++){
            if(tekuci == nizOcena[j]){
                tekuciBrPojavljivanja++// nasli smo isti element i treba povecati broj pojavljivanja tekuceg
            }
        }

        if(tekuciBrPojavljivanja > brPojavljivanjaPretpostavke){
            brPojavljivanjaPretpostavke = tekuciBrPojavljivanja;
            pretpostavkaNajucestalijiElem = tekuci;
        }

    }
   
   return pretpostavkaNajucestalijiElem;
}

let nizSvihOcena = sveOcene1(filmovi);
console.log(najcescaOcena1(nizSvihOcena));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (ocena, filmovi) => {
    let nizFilmova = [];

    filmovi.forEach(film => {
        if(film.prosek() > ocena){
            nizFilmova.push(film)
        }
    })

    return nizFilmova;
}

console.log(film1.prosek(), film2.prosek(), film3.prosek())
console.log(iznadOcene(8.5, filmovi))

//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (ocena, filmovi) => {
    let nizFIlmova = iznadOcene(ocena, filmovi);
    let noviji = nizFIlmova[0];

    nizFIlmova.forEach(film => {
        if(film.godinaIzdanja > noviji.godinaIzdanja){
            noviji = film
        }
    })

    console.log(noviji)
}

iznadOceneNoviji(8, filmovi)
