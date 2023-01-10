let naslov = document.createElement("h3");
naslov.innerHTML = "Naslov kreiran iz js-a"

document.body.append(naslov);

let lista = document.createElement("ul");
document.body.append(lista);

let li1 = document.createElement("li");
li1.innerHTML = "Prva stavka liste";
lista.appendChild(li1);

let li2 = document.createElement("li");
li2.innerHTML = "Druga stavka liste";
lista.appendChild(li2);


for(let i = 0; i < 3; i++){
    let paragraf = document.createElement('p');
    paragraf.innerHTML = `${i + 1}-a stavka liste`;
    let li = document.createElement('li');

    li.append(paragraf);
    lista.append(li);
}