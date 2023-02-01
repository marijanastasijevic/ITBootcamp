import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js'

let formaMessage = document.getElementById('formMessage');
let inputMessage = document.getElementById('message');

let chatroom = new Chatroom("#js", "Jelena");

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
        formaMessage.reset()
    })
    .catch((err) => {
        console.log(err)
    })
})

// chatroom2.addChat('Hr trening je sutra u 18h')
// .then(() => {
//     console.log('Uspesno dodat chat!')
// })
// .catch((err) => {
//     console.log('Greska' + err);
// })

