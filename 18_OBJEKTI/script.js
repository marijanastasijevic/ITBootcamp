let blog1 = {
    title: 'HTML', 
    content: 'Ovo je blog o osnovnim html tagovima',
    author: 'Marija',
};

//ispis celog objekta
console.log(blog1);
console.log(typeof blog1);

//ispis jednog propertija
console.log(blog1.title);
console.log(blog1.content);

console.log(blog1[`title`])// drugi nacin pristup propertiju

// izmena propetija
blog1.content = 'Osnove html-a'

console.log(blog1);

blog1[`author`] = 'Stefan';
console.log(blog1)

////// 

let user = {
    username: 'Marija',
    age: 33,
    blogs: ['IF naredba grananja', 'for petlja', 'WHILE petlja'],
    login: function(){   // ovde ne moze arrow funkcija
        console.log(`Ulogovani ste`);
    },
    logout: function(){
        console.log('Izlogovani ste')
    },
    logBlogs: function(){
        //console.log(this.blogs)   // da bi pristupili propertiju unutar objekata moramo da koristimo kljucnu rec this, this se odnosi iskljucivo na propertije i metode unutar objekta
        this.blogs.forEach(b => {
            console.log(b);
        }); 
    },

};

user.login();
user.logout();
user.logBlogs();
user.blogs.forEach(b => {
    document.write(`<p>${b}</p>`)
})

//console.log(this) // ovo ce ispisati window objekat, roditeljski objekat u kome se sadrze svi ostali objekti

// Zadatak -- Formirati dan koji sadrzi: 
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

let dan = {
    datum: `2022/12/22`,
    kisa: false,
    sunce: true,
    oblacno: false,
    vrednosti_temperature: [5, 10, 15, 10, 15, 20],

    //1.ZADATAK
    prosecnaTemp: function(){
        let sumaTemp = 0;

        this.vrednosti_temperature.forEach(temp => {
            sumaTemp += temp;
        });

        return sumaTemp / this.vrednosti_temperature.length;
    },

    //2. ZADATAK
    brNatprosecnih: function(){
        let br = 0;
        let avg = this.prosecnaTemp();

        this.vrednosti_temperature.forEach(temp => {
            if(temp > avg){
                br++;
            }
        })

        return br;
    },

    //3. Zadatak
    brMerenjaSaMaxTemp: function(){
        let max = this.vrednosti_temperature[0];
        let br = 0;
    
        this.vrednosti_temperature.forEach(temp => {
            if(temp > max){
                max = temp;
            };
        });

        this.vrednosti_temperature.forEach(temp => {
            if(temp == max){
                br++;
            };
            
        });

        return br;
    },

    //4. zadatak

    tempIzmedjuDveZadate: function(temp1, temp2){
        let brMerenjaIzmedjuDveVr = 0;

        this.vrednosti_temperature.forEach(temp => {
            if(temp > temp1 && temp < temp2){
                brMerenjaIzmedjuDveVr++
            };
            
        });

        return brMerenjaIzmedjuDveVr;
    },

    // 5. zadatak

    iznadProsekaUVeciniDana: function(){
        let brIzmerenih = this.vrednosti_temperature.length;
        let brNatpr = this.brNatprosecnih();
        let vecinaDana = false;
        
        if(brNatpr > brIzmerenih/2){
            vecinaDana = true;
        };

        return vecinaDana;
    },



    //2. varijanta

    toplo: function() {
        // if(this.brNatprosecnih() > this.vrednosti_temperature.length / 2){
        //     return true;
        // }
        // else{
        //     return false;
        // }

        return this.brNatprosecnih() > this.vrednosti_temperature.length / 2;
    },


    // 6. Zadatak
    ledenDan: function(){
        let ledenDan = true;

        this.vrednosti_temperature.forEach(temp => {
            if(temp > 0){
                ledenDan = false;
            };
        });

        return ledenDan;
    },

    // druga varijanta ==> pisemo for petlju zato sto mozemo da pisemo return u for petlji
    leden: function(){
        for(let i = 0; i < this.vrednosti_temperature.length; i++){
            if(this.vrednosti_temperature[i] > 0){
                return false;
            };
        };

        return true;
    },

    // treci nacin

    leden1: function(){
        let brIznadNule = 0;
        this.vrednosti_temperature.forEach(temp => {
            if(temp > 0){
                brIznadNule++
            }
            if(brIznadNule == 0){
                return true;
            }
            else{
                return false;
            }
        })
    }

};

console.log(dan.prosecnaTemp());
console.log(dan.brNatprosecnih());
console.log(dan.brMerenjaSaMaxTemp());
console.log(dan.tempIzmedjuDveZadate(5, 20));
console.log(dan.tempIzmedjuDveZadate(0,30));
console.log(dan.iznadProsekaUVeciniDana());
console.log(dan.ledenDan());


// jelenina verzija
console.log(dan.toplo());
console.log(dan.leden());
console.log(dan.leden1());
