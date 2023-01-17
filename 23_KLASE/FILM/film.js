class Film {
    //Moze ovako da se napise, da navedemo koja polja imamo
    // _naslov;
    // _reziser;
    // _godinaIzdanja;

    // ako stavimo # zabranicemo da se ova polja koriste van klase
    #naslov;
    #reziser;
    #godinaIzdanja
    #ocene;


    constructor(n, r, g, o){
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
        this.ocene = o;
    }

    set naslov(n){
        if(n.length > 0){
            this.#naslov = n;
        }
        else{
            this.#naslov = 'Film'; 
        }
    }

    get naslov(){
        return this.#naslov;
    }

    set reziser(r){
        if(r.length > 0){
            this.#reziser = r
        }
        else{
            this.#reziser = 'Reziser'
        }
    }

    get reziser(){
        return this.#reziser;
    }

    set godinaIzdanja(g){
        if(g > 1800){
            this.#godinaIzdanja = g
        }
        else{
            this.#godinaIzdanja = 1800;
        }
    }

    get godinaIzdanja(){
        return this.#godinaIzdanja;
    }

    get ocene(){
        return this.#ocene;
    }

    set ocene(o){
        if(Array.isArray(o)){
            this.#ocene = o
        }
        else{
            this.#ocene = []
        }
       
    }

    stampaj() {
        console.log(`${this.naslov} - ${this.reziser} ${this.godinaIzdanja}`)
    }

    prosek(){
        let sumaOcena = 0;
        
        this.ocene.forEach(ocena => {
            sumaOcena += ocena
    
        })

        return sumaOcena / this.ocene.length
    }
}

export default Film;