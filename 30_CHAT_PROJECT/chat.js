export class Chatroom {
    
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats'); // ne prosledjuje se kao parametar zato sto je ovo po difoltu postavaljeno, nema potrebe da se prosledjuje
    }

    get room () {
        return this._room;
    }

    set room(r){
        this._room = r;
        
    }

    get username(){
        return this._username 
    }

    set username(u) {
        this._username = u;
        
    }

    //metod za dodavanje ceta
    async addChat(message) {
        let date = new Date();
        let ts = firebase.firestore.Timestamp.fromDate(date);

        let docChat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: ts

        }
    
        return this.chats.add(docChat) 

        //let response = await this.chats.add(docChat) // cuvam dokumnent u db 

        //return response // vracam promis i od njega mogu potrazivati .than i .catch
       
    }

    // pracenje poruka u bazi i ispis dodatih poruka
    getChats(callback) { 
        this.chats
        // .where('room', '==', this.room)
        // .orderBy('created_at')
        .onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                let type = change.type;
                let doc = change.doc;
                if(type == 'added'){
                    callback(doc.data()) //iispisivanje podataka o bas tom dokumentu
                }
            })
        })
        
    }
}
