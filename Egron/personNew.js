



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
}

let pers = new person('daniel', 'kalfa', 318448032, 'jerusalem', '07/06/1997', '');
pers.setfName('yosef');
 console.log(pers);




let json = require('./data.json').persons;

let egr = []
json.forEach(element => initEgron(element)) 

function initEgron(obj) {
    egr.push(new person(obj.fName,obj.lName,obj.ID,obj.city,obj.birthDate,obj.parentID));
}

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
    while (isNaN(parentID)) {
        parentID = prompt('Enter parent ID:');
    }
    json.push(new person(fName, lName, ID, city, parentID));
}







//Search for ID in the 
function searchByID(ID) {
return json.find(element => element.ID == ID);
}

function searchByName(name) {
    return json.filter(element => element.lName == name);
}

function isNotValidWord(str) {
    return /([^A-Z])/gi.test(str);
}