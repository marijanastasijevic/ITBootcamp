class Auto {
    constructor(marka, boja, imaKrov){
        // this._marka = marka;
        // this._boja = boja;
        // this._imaKrov = imaKrov;

        this.marka = marka; // ovako se pozivaju seteri
        this.boja = boja;
        this.imaKrov = imaKrov;
    }

    sviraj() {
        console.log(`Auto marke ${this._marka} svira: Beep! Beep!`)
    }

    //Seteri - to su metode - postavljaju vrednosti
    
    // ispituje se da li je vrednost validna
    set marka(m) {
        if(m.length > 0){
            this._marka = m;
        }
        else{
            this._marka = 'Skoda'
        }
        console.log('Pozvan je seter za polje _marka')
    }

    set boja(b) {
        if(b.length > 0){
            this._boja = b;
        }
        else{
            this._boja = 'bela'; // u seterima se pristupa poljima i zato je OBAVEZNA _ (donja crtica), zato sto se sam seter zove kao i polje
        }
    }

    set imaKrov(ik) {
        if(ik == true && ik == false){
            this._imaKrov = ik
        }
        else{
            this._imaKrov = false
        }
    }

    // Geteri - citaju vrednosti, odnosno dohvataju vrednosti
    // tretiraju se koa polja ali poziva se metoga

    get marka() {
        return this._marka;
    }

    get boja(){
        return this._boja
    }

    get imaKrov() {
        return this._imaKrov
    }



}

export default Auto;