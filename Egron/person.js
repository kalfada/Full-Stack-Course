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

//Search in all persons by city.
function searchByCity(city) {
    json.forEach(element => {
        if (element.city.toLowerCase() == city.toLowerCase()) {
            toString(element);
        }
    });
}
//Search in all persons by first name and last name
//if includes the search string or part of it, prints it out.
function searchByName(name) {
    json.forEach(element => {
        if (element.lName.toLowerCase().includes(name.toLowerCase()) || element.fName.toLowerCase().includes(name.toLowerCase())) {
            toString(element);
        }
    });
}
//Print the person.
function toString(person) {
    console.log(`${person.fName} ${person.lName}
    ID: ${person.ID}
    City: ${person.city}
    Birth Date: ${person.birthDate}
    Parent ID: ${person.parentID}`);
}
searchByName('Da');