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

let blog4 = {
    title: 'RESOPNSIVE WEB DESIGN',
    likes: 3,
    dislikes: 15,
};

let blog5 = {
    title: 'NoSQL DB',
    likes: 200,
    dislikes: 15,
};

let blog6 = {
    title: 'Event Listener',
    likes: 70,
    dislikes: 7,
};

let user1 = {
    username: 'Marija',
    age: 14,
    blogs: [blog1, blog2],

    // U objektu user napraviti metod koji ispisuje sve naslove blogova  korisnika

    logBlogs: function() {
        this.blogs.forEach(blog =>{
            console.log(blog.title)
        })
    }
};

let user2 = {
    username: 'Jelena',
    age: 28,
    blogs: [blog3, blog4],
    logBlogs: function() {
        this.blogs.forEach(blog =>{
            console.log(blog.title)
        });
    },
}

let user3 = {
    username: 'JohnDoe',
    age: 15,
    blogs: [blog5, blog6],
    logBlogs: function() {
        this.blogs.forEach(blog =>{
            console.log(blog.title)
        });
    },
}

//ispisati sve blogove korisniika user\
console.log(user1.blogs);

// ispisati nalov prvog bloga koji je napisao korisnik user
console.log(user1.blogs[0].title) //blogs[0] // ovo je prvi blog korisnika

user1.logBlogs()


let users = [user1, user2, user3]

// ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(u => {
    if(u.age < 18){
        console.log(u.username);
    }
})

// ispisati naslove onih blogova koji imaju vise od 50 lajkova
users.forEach(user => {
    let blogs = user.blogs;// niz blogova tekuceg usera (onaj koji je na redu u foreach petlji)

    blogs.forEach(blog => {
        if(blog.likes > 50){
            console.log(blog.title)
        }
    });
});

// Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(user => {
    if(user.username == 'JohnDoe'){
        user.logBlogs();
    }
})

// Napraviti arrow funkciju kojoj se prosledjuje username autora, a ona ispisuje sve njegove blogove
let printBlogs = username =>{
    users.forEach(user => {
        if(user.username == username){
            user.logBlogs();
        }
    });
}

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

// let viseOd100Lajkova = (users)=>{
//     users.forEach(user => {
//         let blogovi = user.blogs;

//         let suma = 0;
//         blogovi.forEach(blog => {
//             suma += blog.likes;
//         })

//         if(suma > 10){
//             console.log(user.username)
//         }
//     })

    
// };

// viseOd100Lajkova(users);



// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let avgLikes = users => {
    let sum = 0;
    let br = 0

    for(let i = 0; i < users.length; i++){
        let user = users[i]; // ovo daje objekat
        let blogs = user.blogs; // ovo daje niz blogova za 'selektovanog' korisnika

        for(let j=0; j < blogs.length; j++){
            let blog = blogs[j]; // ovo daje objekat blog (jedan element iz niza blogs)
            sum += blog.likes; //dodajem lajkove na sumu
            br++; // dodajem da sam naisla na jos jedan blog
        }
    }

    return sum / br;
}

let iznadProsekaLajkovi = (users) =>{
    let prosekLajkova = avgLikes(users);
    for(let i = 0; i < users.length; i++){
        let user = users[i];
        let blogs = user.blogs;

        for(let j = 0; j < blogs.length; i++){
            let blog = blogs[j];
            if(blog.likes > prosekLajkova){
                console.log(blog.title);
            }
        }
    }
}

console.log(`Prosecan broj lajkova je ${avgLikes(users)}`);
iznadProsekaLajkovi(users);

printBlogs('Marija')





