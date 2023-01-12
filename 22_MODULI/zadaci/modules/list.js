import generateImg from './general.js'

let generateList = (parent) => {
    let ul = document.createElement('ul');
    ul.style.overflow = 'hidden';
    ul.style.listStyle = 'none'
    parent.appendChild(ul);

    return ul;

}

let generateItem = (parent, src) => {
    let li = document.createElement('li');
    li.style.float = 'left';

    let image = generateImg(src);

    li.appendChild(image);
    parent.appendChild(li);

    return li;
}

export {generateList as GL, generateItem as GI};
