function person(fName, lName, ID, City, birthDate, parentID) {
    this.fName = fName;
    this.lName = lName;
    this.ID = ID;
    this.city = city;
    this.birthDate = birthDate;
    this.parentID = parentID;
}

let json = require('./data.json');
json = json.persons;

function searchByCity(city) {
    json.forEach(element => {
        if (element.city == city) {
            toString(element);    
        }
    });
}
function searchByFName(name) {
    json.forEach(element => {
        if (element.fName.toLowerCase().includes(name.toLowerCase())) {
            toString(element);    
        }
    });
}
function searchByLName(name) {
    json.forEach(element => {
        if (element.lName.toLowerCase().includes(name.toLowerCase())) {
            toString(element);    
        }
    });
}

function toString(person) {
    console.log(`${person.fName} ${person.lName}
    ID: ${person.ID}
    City: ${person.city}
    Birth Date: ${person.birthDate}
    Parent ID: ${person.parentID}`);
}
searchByLName('Da');