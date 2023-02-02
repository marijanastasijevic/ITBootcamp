import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js'

let formaMessage = document.getElementById('formMessage');
let inputMessage = document.getElementById('message');
let formaUpdate = document.getElementById('formUpdate');
let inputUpdate = document.getElementById('update')

//ako postoji u lokalnoj memoriji setuj na to ime umesto postojeceg a ako ne postoji nista onda setuj na anonimus
let chatroom = new Chatroom("#js", "Jelena");

let user = 'Anonymus';

if(localStorage.username == true){
    user = localStorage.username
}

chatroom.getChats(data => {
    console.log(data)
});

////////////////////////

let ul = document.getElementById('listMessage');
let chatUI = new ChatUI(ul);

chatroom.getChats(data => {   //data salje document po document(snapshot)
    chatUI.templateLi(data)
})


formaMessage.addEventListener('submit', e => {
    e.preventDefault();

    let poruka = inputMessage.value;

    chatroom.addChat(poruka)
    .then(() => {
        //inputMessage.value = ''
        formaMessage.reset() //prednost ovoga je ako ima vise input polja resetovace sve
    })
    .catch((err) => {
        console.log(err)
    })
})

formaUpdate.addEventListener('submit', e => {
    e.preventDefault();

    let updateUser = inputUpdate.value;
    chatroom.username = updateUser;

    //setuj u lokalnoj memoriji
    localStorage.setItem('username', updateUser);

    formaUpdate.reset()
})

// chatroom2.addChat('Hr trening je sutra u 18h')
// .then(() => {
//     console.log('Uspesno dodat chat!')
// })
// .catch((err) => {
//     console.log('Greska' + err);
// })

