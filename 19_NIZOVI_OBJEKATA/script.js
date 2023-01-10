console.log(`nizovi objekata`);

let blog1 = {
    title: 'HTML!',
    likes: 40,
    dislikes: 5,
};

let blog2 = {
    title: 'CSS',
    likes: 30,
    dislikes: 15,
};

let blog3 = {
    title: 'JAVA SCRIPT',
    likes: 70,
    dislikes: 7,
};

let blogs = [blog1, blog2, blog3];
console.log(blogs); // ispis niza objekata

//ispis jednog objekta iz niza
console.log(blogs[2]);

//ispis propertija 
console.log(blogs[2].title);

// ispis svih naslova blogova u konzoli
blogs.forEach(blog => {
    console.log(blog.title)
    
});

// ispis svih naslova blogova na stranici
for(let i = 0; i < blogs.length; i++){
    document.body.innerHTML += `<h2>${blogs[i].title}</h2>`;
    document.body.innerHTML += `<p>likes: ${blogs[i].likes}</p>`;
    document.body.innerHTML += `<p>dislikes: ${blogs[i].dislikes}</p>`;
};

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova
let sumLikes = arrObjs => {
    let sumaLajkova = 0; 

    arrObjs.forEach(obj => {
        sumaLajkova += obj.likes;
    })

    return sumaLajkova;
};

console.log(sumLikes(blogs));

// Napraviti arrow funkciju 
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let avgLikes = blogs => {
    return sumLikes(blogs) / blogs.length;
};

console.log(`Prosecan broj lajkova je ${avgLikes(blogs)}`);

// Zadatak 3
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
//a)
let blogoviSaVisePozitOcena = (blogs) => {
    blogs.forEach(blog => {
        if(blog.likes > blog.dislikes){
            console.log(blog.title);
        } 
    })
}

blogoviSaVisePozitOcena(blogs);

// b) Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploViseLikes = (blogs) => {
    blogs.forEach(blog => {
        if(blog.likes >= blog.dislikes * 2){
            console.log(blog.title);
        }
    })
}

duploViseLikes(blogs);

// c) Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let nasloviSaZnakomUzvika = (arrObj) =>  {
    arrObj.forEach(obj => {
        if(obj.title[obj.title.length-1] == '!'){
            console.log(obj.title)
        }
    });
};

nasloviSaZnakomUzvika(blogs);

/////////////////////////////

