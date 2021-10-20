



function person(fName, lName, ID, city, birthDate, parentID) {
    this.fName = fName;
    this.lName = lName;
    this.ID = ID;
    this.city = city;
    this.birthDate = birthDate;
    this.parentID = parentID;
    this.setfName = function (n) {
        this.fName = n;
    }
    this.setlName = function (lName) {
        this.lName = lName;
    }
    this.setCity = function (city) {
        this.city = city;
    }
    this.setID = function (ID) {
        this.ID = ID;
    }
    this.setParentID = function (parentID) {
        this.parentID = parentID;
    }
    this.toString = function () {
        console.log(`${this.fName} ${this.lName}
        ID: ${this.ID}
        City: ${this.city}
        Birth Date: ${this.birthDate}
        Parent ID: ${this.parentID}`);
    }
}

//Initialization of the egron object which is an array of person objects.
let egron = [];
require('./data.json').persons.forEach(element => egron.push(new person(element.fName, element.lName, element.ID, element.city, element.birthDate, element.parentID)));

let pers = new person('daniel', 'kalfa', 318448032, 'jerusalem', '07/06/1997', '');


function addNewPerson() {
    let fName = prompt('Enter first name:');
    while (isNotValidWord(fName)) {
        fName = prompt('Enter first name:');
    }
    let lName = prompt('Enter last name:');
    while (isNotValidWord(lName)) {
        lName = prompt('Enter last name:');
    }
    let ID = prompt('Enter ID:');
    while (isNaN(ID) || ID == '' || !searchByID(ID)) {
        ID = prompt('Enter ID:');
    }
    let city = prompt('Enter city:');
    while (isNotValidWord(city)) {
        city = prompt('Enter city:');
    }
    let parentID = prompt('Enter parent ID:');
    while (!searchByID(parentID) || parentID != '') {
        parentID = prompt('Enter parent ID:');
    }
    egron.push(new person(fName, lName, ID, city, parentID));
}

//Search for ID in the 
function searchByID(ID) {
    return egron.find(element => element.ID == ID);
}

//Search for person by given name
//and return array with all the match persons.
function searchByName(name) {
    return egron.filter(element => element.lName == name);
}

//Search for childrens by given parent ID
//and return array with all the childrens.
function searchForChilds(parentID) {
    return egron.filter(element => element.parentID == parentID);
}


//Check if string is not a valid word,
//meaning don't have any chars except from letters.
function isNotValidWord(str) {
    return /([^A-Z])/gi.test(str);
}

function setPerson(pers) {
    let choise = 0;
    while (choise != 6) {
        choise = prompt(`Choose with date you want to edit:
        [1] First name
        [2] last name
        [3] ID
        [4] City
        [5] Parent ID
        [6] Exit`);
        switch (choise) {
            case '1':
                pers.setfName(prompt('Enter new first name'))
                break;
            case '2':
                pers.setlName(prompt('Enter new last name'))
                break;
            case '3':
                pers.setID(prompt('Enter new ID'))
                break;
            case '4':
                pers.setCity(prompt('Enter new city'))
                break;
            case '5':
                pers.setParentID(prompt('Enter new parent ID'))
                break;
        }
    }
}

let choise = 0;

while (choise != 10) {
    choise = prompt(`Welcome to the Egron, Please choose what you want to do:
    [1] Add person
    [2] Delete person
    [3] Edit person details
    [4] Print all persons
    [5] Search for person
    [6] Exit`);

    switch (choise) {
        case '1':
            addNewPerson();
            break;
        case '2':
            deletePerson();
            break;
        case '3':
            setPerson();
            break;
        case '4':
            printEgron();
            break;
        case '5':
            searchForPerson();
            break;
        case '7':
            addNewPerson();
            break;
    }
}