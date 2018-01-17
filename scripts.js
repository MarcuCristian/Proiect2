


var imgcard = new Image();
imgcard.src="card.png";



// AJAX





const list = document.getElementById('list');
const formName = document.getElementById('formName');
const formUrl = document.getElementById('formUrl');
const addButton = document.getElementById('addButton');
let updateButton = document.getElementById('updateButton');

// fetch the cards list
function getCards() {
    fetch('http://localhost:3000/cards')
        .then(function (response) {
            // Trasform server response to get the cards
            response.json().then(function (cards) {
                appendcardsToDOM(cards);
            });
        });
};

// post cards

function postcard() {
    // creat post object
    const postObject = {
        name: formName.value,
        img: formUrl.value
    }
    // post card
    fetch('http://localhost:3000/cards', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
        // Get the new cards list
        getcards();
        // Reset Form
        resetForm();
    });
}



// delete card

function deletecard(id) {
    // delete card
    fetch(`http://localhost:3000/cards/${id}`, {
        method: 'DELETE',
    }).then(function () {
        // Get the new cards list
        getcards();
    });
}


// update card
function updatecard(id) {
    // creat put object
    const putObject = {
        name: formName.value,
        img: formUrl.value
    }
    // update card
    fetch(`http://localhost:3000/cards/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(putObject)
    }).then(function () {
        // Get the new cards list
        getcards();

        // change button event from update to add
        addButton.disabled = false;

        // remove all event from update button
        clearUpdateButtonEvents();

        // Reset Form
        resetForm();
    });
}

// copy edited card information to form and add event listener on update button
function imgcar1(card) {
    // copy card information to form
    formName.value = card.name;
    formUrl.value = card.img;
    imgcard.src=card.img;
    // disable add button
    addButton.disabled = true;

    // clear all events update button events
    clearUpdateButtonEvents();

    // enable and add event on update button
    updateButton.disabled = false;
    updateButton.addEventListener('click', function () {
        updatecar(card.id)
    });

}

// Create and append img and name DOM tags
function appendcardsToDOM(cards) {
    // remove card list if exist
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // create and append tags
    for (let i = 0; i < cards.length; i++) {
        // create image obj
        let img = document.createElement('img');
        img.src = cards[i].img;
        // create name obj
        let name = document.createElement('span');
        name.innerText = cards[i].name;

        // create button and event for edit and delete
        let thiscard = document.createElement('button')
        // add event on btn and pass card id more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
        thiscard.addEventListener('click', function () {
            imgcard1(cards[i]);
        });
        thiscard.innerText = 'Masina asta';
        let deleteButton = document.createElement('button')
        // add event on btn and pass card object more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
        deleteButton.addEventListener('click', function () {
            deletecard(cards[i].id)
        });
        deleteButton.innerText = 'Delete';
        // create a container for img and name
        let container = document.createElement('div');
        // append elements to container
        container.appendChild(img);
        //container.appendChild(name);
        //container.appendChild(thiscard);
        container.appendChild(deleteButton);

        // append container to DOM (list div)
        list.appendChild(container);
    }
}

// reset form
function resetForm() {
    formName.value = '';
    formUrl.value = '';
}
//  remove Update Button to clear events more at https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
function clearUpdateButtonEvents() {
    let newUpdateButton = updateButton.cloneNode(true);
    updateButton.parentNode.replaceChild(newUpdateButton, updateButton);
    updateButton = document.getElementById('updateButton');
}
// add event listener on add button
addButton.addEventListener('click', postcard);

// get cards
getCards();



