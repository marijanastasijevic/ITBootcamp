import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js'


// DOM
let ul = document.getElementById('listMessage');
let formaMessage = document.getElementById('formMessage');
let inputMessage = document.getElementById('message');
let btnMessage = document.getElementById('btnSend')
let formaUpdate = document.getElementById('formUpdate');
let inputUpdate = document.getElementById('update');
let divPromenaSobe = document.getElementById('promenaSobe');

//ako postoji u lokalnoj memoriji setuj na to ime umesto postojeceg a ako ne postoji nista onda setuj na anonimus
let user = 'Anonymus';

if(localStorage.username == true){
    user = localStorage.username
}

// OBJEKTI KLASE
let chatroom = new Chatroom("#js", user);
let chatUI = new ChatUI(ul);


chatroom.getChats(data => {   //data salje document po document(snapshot)
    chatUI.templateLi(data)
})


formaMessage.addEventListener('submit', e => {
    e.preventDefault();

    let poruka = inputMessage.value;

    if(poruka != ""){
        chatroom.addChat(poruka)
        .then(() => {
            //inputMessage.value = ''
            formaMessage.reset() //prednost ovoga je ako ima vise input polja resetovace sve
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
})

formaUpdate.addEventListener('submit', e => {
    e.preventDefault();

    let updateUser = inputUpdate.value;
    chatroom.username = updateUser;

    //setuj u lokalnoj memoriji
    localStorage.setItem('username', updateUser);

    formaUpdate.reset();

    let divUsernameIspis = document.getElementById('username-ispis');

    let pUsername = document.createElement('p')

    divUsernameIspis.appendChild(pUsername);
    pUsername.textContent = updateUser;
    pUsername.classList.add('novi-username');

    setInterval(() => {
       divUsernameIspis.removeChild(pUsername)
       pUsername.style.border = 'none';
    }, 3000)

})

// promenljiva hoja "hvata" u kojoj ste sobi tj. na koje dugme ste kliknuli
divPromenaSobe.addEventListener('click', e => {
    e.preventDefault();

    if(e.target.tagName === 'BUTTON'){
       //1. Uzimam ime sobe na koju je kliknuto
       let novaSoba = e.target.textContent;
        
       //2. Update sobe na koju je kliknuto
       chatroom.updateRoom(novaSoba);

        // Izbrisati sve poruke sa ekrana
       chatUI.clearUL();

       //4.Prikazi cetove
        chatroom.getChats(data => {   //data salje document po document(snapshot)
            chatUI.templateLi(data)
        })
    }
})

