let addNumberBtn = document.querySelector('.add_phone');
let divWithNumbers = document.querySelector('.numbers');
let formAddUser = document.querySelector('form');

function addPhoneNumber () {
    let newInput = document.querySelector('.input-phone-number').cloneNode(false);
    let copyNumberBtn = document.querySelector('.add_phone').cloneNode(true);
    newInput.value = '';

    divWithNumbers.lastElementChild.remove();
    
    divWithNumbers.append(newInput);
    divWithNumbers.append(copyNumberBtn);

    divWithNumbers.lastElementChild.addEventListener('click', addPhoneNumber);
}   

addNumberBtn.addEventListener('click', addPhoneNumber);

class person {
    constructor(atributes) {
    this.firstName = atributes.firstName
    this.lastName = atributes.lastName
    this.phoneNumber = atributes.phoneNumber
    this.comment = atributes.comment
    }

    send() {
        document.querySelector('.input-name').value = this.firstName;
        document.querySelector('.input-second-name').value = this.lastName;
        document.querySelector('.numbers').firstElementChild.value = this.phoneNumber;
        document.querySelector('.input-comment').value = this.comment;
    }
}

const kiryl = new person ({
    firstName: 'Kiryl',
    lastName: 'Arkhipenka',
    phoneNumber: +375297443055,
    comment: 'no'
})

formAddUser.addEventListener('submit',(event) => {
    event.preventDefault();
    kiryl.send();
});