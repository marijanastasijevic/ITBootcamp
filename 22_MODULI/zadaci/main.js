'use strict'
/*
import { GL, GI} from "./modules/list.js";
import { generateTable, generateTableRow, generateItem  as generateTableItem} from "./modules/table.js";

let ul = generateList(document.body);

GL(ul, "images/slika_03.jpg")
GL(ul, "images/slika_02.jpg")
GL(ul, "images/slika_01.jpg")

let table = generateTable(document.body);

let tr = generateTableRow(table);
generateTableItem(tr, "images/slika_01.jpg");
generateTableItem(tr, "images/slika_02.jpg");
generateTableItem(tr, "images/slika_03.jpg");

*/

import * as Lista from "./modules/list.js"
import * as Tabela from "./modules/table.js";

let ul = Lista.GL(document.body);
// Lista.length = 2 // ne moze, ovo je read-only svojstvo

for(let i = 1; i <= Lista.length; i++){
    Lista.GI(ul, `images/slika_0${i}.jpg`)
}

let table = Tabela.generateTable(document.body);
let tr = Tabela.generateTableRow(table);

for(let i = 1; i <= Tabela.length; i++){
    Tabela.generateItem(tr, `images/slika_0${i}.jpg`)
}