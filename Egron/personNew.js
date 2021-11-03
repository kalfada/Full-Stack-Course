/**
 * @author Daniel Kalfa
 * @copyright
 * This program represents a mini Egron
 * that have many objects of Person type
 * can add and delete persons from the egron
 * can search for persons
 */

/**
 * @param {String} fName 
 * @param {String} lName 
 * @param {String} ID 
 * @param {String} city 
 * @param {String} birthDate 
 * @param {String} parentID 
 */
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
//let egron = [];
//require('./data.json').persons.forEach(element => egron.push(new person(element.fName, element.lName, element.ID, element.city, element.birthDate, element.parentID)));

//Update the data.json file
function updateJsonFile() {
    let json = JSON.stringify(egron);
    let fs = require('fs');
    fs.writeFileSync('./data.json', json, function (err) {
            if (err)
                throw err;
            console.log('deleted');
        });
}

//Allow the user to add person to the Egron.
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

//deletePerson();
function deletePerson() {
    let pers = '318448032'//prompt('Enter the ID of the person you want to delete:');


    if (searchByID(pers) != -1) {
        // egron[searchByID(pers)].toString();
        console.log();
        egron.splice(searchByID(pers),1);
        printEgron();
        updateJsonFile();
    }
}
//Search for ID in the 
function searchByID(ID) {
    return egron.findIndex(element => element.ID == ID);
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

//Print all the Egron.
function printEgron() {
    egron.forEach(element => element.toString());
}

//Allow the user to set all properties of person object
//except from birthday.
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

//Allow the user to implement different searchs on the Egron.
function searchForPerson() {
    let choise = 0
    while (choise != 6) {
        choise = prompt(`Choose one of the options:
        [1] Search by name
        [2] Search by ID number
        [3] Search by age
        [4] Search by city
        [5] Search for one of the options:
            A. Born in even month
            B. Has at least two childrens
            C. Person name or his childrens is a palindrom
        [6] Exit`);
    }
    switch (choise) {
        case '1':
            searchByName(prompt('Please enter name:'))
            break;
        case '2':
            searchByID(prompt('Please enter ID:'))
            break;
        case '3':
            searchByAge(prompt('Please enter age:'))
            break;
        case '4':
            searchByCity(prompt('Please enter city:'))
            break;
        case '5':
            searchBySomething();
            break;
    }
}

let choise = 0;

// while (choise != 10) {
//     choise = prompt(`Welcome to the Egron, Please choose what you want to do:
//     [1] Add person
//     [2] Delete person
//     [3] Edit person details
//     [4] Print all persons
//     [5] Search for person
//     [6] Exit`);

//     switch (choise) {
//         case '1':
//             addNewPerson();
//             break;
//         case '2':
//             deletePerson();
//             break;
//         case '3':
//             setPerson();
//             break;
//         case '4':
//             printEgron();
//             break;
//         case '5':
//             searchForPerson();
//             break;
//         case '7':
//             addNewPerson();
//             break;
//     }
// }
