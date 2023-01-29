let list = document.querySelector('ul');
let divError = document.getElementById("error");
//let addButton = document.getElementById('add');
let form = document.querySelector('form');

/*
db.collection('tasks')
.orderBy('start_date', 'desc')
.get()
.then((snapshot) => {
    snapshot.forEach(doc => {
        let task = doc.data();
        let li = document.createElement('li');

        console.log(task)
        li.innerHTML = `${task.title} (${task.start_date.toDate()}) [${task.description}])`;

        if(task.priority == true){
            li.style.color = 'red';
        }

        list.appendChild(li)
        
    })
})
.catch((e) => {
    divError.innerHTML = `An error occured: ${e}`;
    divError.style.color = 'red';
});
*/

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let title = this.title.value;
    let start_date = this.start_date.value;
    let due_date = this.due_date.value;
    let priority = this.priority.checked;
    let description = this.description.value;
    // alert(title + ', ' + start_date + ', ' + due_date + ', ' + priority + ', ' + description)
    let date1 = new Date(start_date);
    let date2 = new Date(due_date);
    let ts1 = firebase.firestore.Timestamp.fromDate(date1);
    let ts2 = firebase.firestore.Timestamp.fromDate(date2);

    let obj = {
        title: title,
        start_date: ts1,
        due_date: ts2,
        priority: priority,
        description:description
    };

    db.collection('tasks')
    .add(obj)
    .then(() => {
        divError.textContent = `task added`;
        divError.style.color = 'green';
    })
    .catch((err) => {
        divError.textContent = `An error occured ${err}`;
        divError.style.color = 'red';
    });
});



// umesto direktnog pristupa neke kolekcije mnogo je bolje pristupati pomocu snapshot
// odnosno, osluskivati promene u kolekciji
db.collection('tasks')
.onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach( change => {
        let type = change.type; //tip promene - dodat element, promenjen, obrisan...
        let doc = change.doc; // dokument koji je promenjen
        if(type == 'added') {
            let task = doc.data();
            li = document.createElement('li');
            li.id = doc.id; //svaki doc ima svoj id a mi list itemu dodajemo id dokumenta koji ga je tu stavio
            li.textContent = `${task.title}(${task.start_date.toDate()}) [${task.description}]`;
            if(task.priority) {
                li.style.color = 'red';
            }
            list.prepend(li);

            let button = document.createElement('button');
            button.innerHTML = 'Remove task';
            li.appendChild(button);
        }
        else if(type == 'removed'){
            let id  = doc.id;
            let li = document.getElementById(id);
            li.remove();
        }
    });
});

list.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON"){
        let li = e.target.parentElement;
        let id = li.id;

        db.collection('tasks')
        .doc(id)
        .delete()
        .then(() => {
            divError.textContent = `Task successfully deleted`;
            divError.style.color = 'orange';
        })
        .catch((err) => {
            divError.textContent = `An error occured: ${err}`;
            divError.style.color = 'red';
        });
    }
})
