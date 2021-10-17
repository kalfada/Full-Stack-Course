//TODO: 1.check how to work with chrome running time.
//      2.how to integrate with other js files. 
//      3.how to use DDMMYYYY Date() format or how to convert to this format easily.
//      4.where the validation of the data is happaning and where to write that code.
//      5.how to write the Person() object properly and how to require some fields to be a must.

//Object of person
function Person(fName, lName, ID, city, birthDate, parentID) {
    this.fName = fName;
    this.lName = lName;
    this.ID = ID;
    this.city = city;
    this.birthDate = birthDate;
    this.parentID = parentID;

    //Add person to the Json file
    this.addPerson = function (fName, lName, ID, City, birthDate, parentID) {
        let newPerson = new Person(fName, lName, ID, City, birthDate, parentID);
        return newPerson;
    }
}

let json = require('./data.json').persons;
let egr = [];
for (const key in json) {
     egr.push(new Person(json[key]));
}


//console.log(json);
//Search in all persons by city.
function searchByCity(city) {
    json.forEach(element => {
        if (element.city.toLowerCase() == city.toLowerCase()) {
            toString(element);
        }
    });
}
//Search in all persons by ID.
function searchByID(ID) {
    return json.find(element => element.ID == ID);

}

//console.log(searchByID('318448032'));

//Search in all persons the chidren of one person by the ID of the parent
function searchByParentID(parentID) {
    json.forEach(element => {
        if (element.parentID == parentID) {
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
//get age from user andsearch for all persons who are in this age or older.
function searchByAge(age) {
    let currentDate = new Date();
    json.forEach(element => {
        let userBirthDate = new Date(correctDateFormat(element.birthDate));
        if (currentDate.getFullYear() - userBirthDate.getFullYear() > age) {
            toString(element);
        }
    });
}
//search for all the persons who born in even
//OR has at least two childs
//OR that there first name is palindrom.
function searchBySomething() {
    json.forEach(element => {
        let userBirthDate = new Date(correctDateFormat(element.birthDate));
        if (searchForPalindroms(element.ID) || (userBirthDate.getMonth() + 1) % 2 == 0 || howManyChilds(element.ID) >= 2) {
            toString(element);
        }
    });
}
//search for palindrom in person first and last name or in his child's name.
function searchForPalindroms(ID) {
    if (checkPalindrom(searchByID(ID).fName) || checkPalindrom(searchByID(ID).lName)) {
        return true;
    } else {
        for (let index = 0; index < json.length; index++) {
            if (json[index].parentID == ID && (json[index].fName.checkPalindrom() || json[index].lName.checkPalindrom())) {
                return true;
            }
        }
    }
    return false;
}
//Check if string is a palindrom, if so, return true, otherwise return false
function checkPalindrom(str) {
    return reverseString(str).toLowerCase() == str.toLowerCase();
}
//reverse a string and return it
function reverseString(str) {
    return str.toLowerCase().split("").reverse().join("");
}
//return how many childs does person have.
function howManyChilds(ID) {
    let counter = 0;
    json.forEach(element => {
        if (element.parentID == ID) {
            counter++;
        }
    });
    return counter;
}
//correct the date format from DDMMYYYY to MMDDYYYY
//(couse js stupid)
function correctDateFormat(date) {
    let dateParts = date.split("/");
    return `${dateParts[1]}/${++dateParts[0]}/${dateParts[2]}`;
}
//Print the person.
function toString(person) {
    console.log(`${person.fName} ${person.lName}
    ID: ${person.ID}
    City: ${person.city}
    Birth Date: ${person.birthDate}
    Parent ID: ${person.parentID}`);
}
//searchBySomething();




function addPerson(fName, lName, ID, City, birthDate, parentID) {
    let newPerson = new Person(fName, lName, ID, City, birthDate, parentID);
    return newPerson;
}

function deletePerson(params) {

}

/////////////////////////////////////////////////////////////////////
//Validation functions

function validName(str) {
    if (condition) {

    }
}