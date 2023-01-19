//let btnDoodaj = document.getElementById('dodaj');
let inputUnosObaveze = document.getElementById('unesiObavezu');
let list = document.getElementById('listaObaveza')

inputUnosObaveze.addEventListener('keypress', e => {
    e.preventDefault();

    
    if(e.key === 'Enter'){
        let inputValue = inputUnosObaveze.value;

        if(inputValue === ''){
            let spanObavestenje = document.createElement('span');
            let obaveza = document.getElementById('obaveza');
            obaveza.appendChild(spanObavestenje);
    
            spanObavestenje.innerHTML = 'Morate uneti obavezu!!!!'
            spanObavestenje.style.fontSize = '25px'
        }
        
        let li = document.createElement('li');
        li.textContent += inputValue;

        let inputRadio = document.querySelector('input[name=cekiranje]:checked');

        if(inputRadio.id === 'pocetak'){
            list.prepend(li)
        }
        else{
            if(inputRadio.id === 'kraj'){
                list.appendChild(li)
            }
        }

        inputUnosObaveze.value = '';
    }
    else{
        inputUnosObaveze.value += e.key;

    }
    
})

list.addEventListener('click', e => {
    if(e.target.tagName == 'LI'){
        e.target.remove()
    }
})




