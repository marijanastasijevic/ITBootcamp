class Pacijent {
   
    constructor(i, v, t){
        this.ime = i;
        this.visina = v;
        this.tezina = t
    }

    get ime() {
        return this._ime
    }

    set ime(i){
        if(i.length > 0){
            this._ime = i;
        }
        else{
            this._ime = 'Ime'
        }
    }

    get visina(){
        return this._visina;
    }

    set visina(v){
        if(v > 0 && v < 250){
            this._visina = v
        }
        else{
            this._visina = 'Dzin :)'
        }
    }

    get tezina(){
        return this._tezina;
    }

    set tezina(t){
        if(t > 0 && t < 550){
            this._tezina = t;
        }
        else{
            this._tezina = 'Greska!!!'
        }
    }

    stampaj() {
        console.log(`Ime pacijenta - ${this.ime}, tezina - ${this.visina}, tezina - ${this.tezina}`)
    }

    stampajListu() {
        let htmlLista = 
        `<ul>
            <li>Ime: ${this.ime} </li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina} </li>
        </ul>
        `
        return htmlLista;
    }

    bmi(){
        let bmi = this._tezina / ((this._visina / 100) * (this._visina / 100));

        return bmi;
    }

    kritican(){
        let x = false
        if(this.bmi() < 15 || this.bmi() > 40){
            x = true;
        }
        
        return x;
    }

}

export default Pacijent;