export class ChatUI {

    constructor(l){
        this.list = l;
    }

    get list(){
        return this._list;
    }

    set list(l){
        this._list = l
    }

    formaVreme(data){
        let date = data.created_at.toDate();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDay();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        day = String(day).padStart(2, "0");
        month = String(month).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");

        let ispis = day + '.' + month + '.' + year + '.' + ' ' + '-' + ' ' +hours + ':' + minutes;

        return ispis;
    }

    templateLi(data){
        let formaVreme = this.formaVreme(data);

        let liItem = 
        `<li>
            <span class="username">${data.username}:</span>
            <span class="message">${data.message}</span>
            <div class="data">${formaVreme}</div>
        </li>`;

        this._list.innerHTML += liItem
    }

    //brisemo poruke - metodu pozivam u app.js
    clearUL() {
        this.list.innerHTML = '';
    }
}

