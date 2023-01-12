import generateImg from './general.js'

let generateTable = (parent) => {
    let table = document.createElement('table');
    table.style.border = '5px solid black';

    parent.appendChild(table);

    return table;
}

let generateTableRow = (parent) => {
    let tr = document.createElement('tr');
    parent.appendChild(tr);

    return tr;
}

let generateItem = (parent, src) => {
    let td = document.createElement('td');

    let image = generateImg(src);

    td.appendChild(image);
    parent.appendChild(td);

    return td;

}

const length = 3;

export {
    generateTable,
    generateTableRow,
    generateItem,
    length
}