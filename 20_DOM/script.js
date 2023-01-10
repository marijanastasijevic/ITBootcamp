console.log(document); // objekat (koren DOM stabla);
console.log(document.body); // // objekat (koren DOM stabla);

let el1 = document.getElementById('p2');
console.log(el1); // objekat iz DOM STABLA I ON ODGOVARA ONOM CVORU KOJI IMA ZADATI ID

let el2 = document.getElementsByClassName("par");
console.log(el2) //html collection objekata iz dom stabla

let el3 = document.getElementsByTagName("p");
console.log(el3) // vraca html collection iz DOM stabla

let el4 = document.getElementsByTagName('a');
console.log(el4);

let el5 = document.getElementsByName('p');//NodeList objekata iz DOM stabla
console.log(el5)

//Pristup elemeentima html kolekcije

for(let i = 0; i < el2.length; i++){
    console.log(el2[i]); //el2[i] je element(objekat) iz HTML kolekcije el2
}

// ovako ne moze 
//postoji razlika izmedju html kolekcije i niza, a to je da HTML KOLEKCIJA NE POSEDUJE FOREACH
// el2.forEach(e =>{
//     console.log(e)
// });

//kako da html kolekciju konvertujemo u niz
let elems = Array.from(el2);
elems.forEach(e => {
    console.log(e);
})

//Pristup elementima NodeList -- moze i preko for i preko forEach
el5.forEach(e => {
    console.log(e)
})

//priemna metoda querySelector
let t1 = document.querySelector("#p2") // kao parametar ide css selektor
console.log(t1) //objekat // vraca jedan objekat

let t2 = document.querySelector('.par')
console.log(t2) // objekat - vraca PRVI objekat obuhvacen prosledjenim css selektorom // vraca nod list

let t3 = document.querySelectorAll('.par:nth-child(odd') // moze bilo koji css selektor
console.log(t3)


t1.innerHTML += 'Novi tekst paragraf sa id-jem <span class="bold">p</span>';

for(let i = 0; i < t3.length; i++){
    t3[i].innerHTML = 'Promena teksta u elementu sa klasom <span class="bold">par</span>'
}

let link = document.querySelector("a");
link.href = "https://wwww.google.com";
link.target = "_blank";


link.style.color = 'red';
link.style.border = '1px solid blue';
link.style.fontSize = "24px";

//link.style = 'color: red; border: 2px solid blue; font-size: 24px' -- ovo nije pogodno za ispravku

//jos jedan nacin

link.setAttribute("style", 'color: red; border: 2px solid blue; font-size: 24px');

let table = document.querySelector("table")
console.log(table);

console.log(table.parentNode);
console.log(table.childNodes[0]);
console.log(table.childNodes[1]);//tbody
console.log(table.childNodes[1].childNodes[0]); //tr


for(let i = 0; i < document.body.childNodes.length; i++){
    let element = document.body.childNodes[i];
    console.log(element);
}

let naslov = document.createElement('h1');
naslov.innerHTML = 'Naslov kreiran iz js-a';

//document.body.appendChild(naslov) // poslednji potomak
document.body.prepend(naslov) //prvi potomak
naslov.remove() // brisanje


console.log("------------------------")
console.log(document)

let tabela = document.createElement('table');
document.body.appendChild(tabela)

let book1 = {
    naziv: "Knjiga 1",
    autor: "Autor 1"
};

let book2 = {
    naziv: "Knjiga 2",
    autor: "Autor 2"
};

let knjige = [book1, book2];

for (let i = 0; i < knjige.length; i++) {
    let row = document.createElement('tr');
    let col1 = document.createElement('td');
    let col2 = document.createElement('td');

    col1.innerHTML = knjige[i].naziv;
    col2.innerHTML = knjige[i].autor;
    row.appendChild(col1);
    row.appendChild(col2);

    tabela.appendChild(row);
}

