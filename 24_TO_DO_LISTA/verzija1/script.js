let liAll = document.querySelectorAll('li');


liAll.forEach(li => {
    //1. nacin
    li.addEventListener('click', () => {
        //     if(li.style.textDecoration == 'line-through'){
        //         li.style.textDecoration = 'none';
        //     }
        //     else{
        //         li.style.textDecoration = 'line-through';
        //     }  
        // 

        //2. nacin
        li.classList.toggle("precrtaj")
    })

})