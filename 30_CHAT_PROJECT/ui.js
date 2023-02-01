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

    formatVreme(date){
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDay();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        day = String(day).padStart(2, "0");
        month = String(month).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");

        let ispisDatuma = day + "." + month + '.' + year + '.' + " " + '-' + ' ' +hours + ":" + minutes;

        return ispisDatuma;
    }

    templateLi(data){
        let date = data.created_at.toDate();
        let formaVreme = this.formatVreme(date)
        let liItem = 
        `<li>
            <span class="username">${data.username}:</span>
            <span class="message">${data.message}</span>
            <div class="data">${formaVreme}</div>
        </li>`;

        this._list.innerHTML += liItem
    }
}

