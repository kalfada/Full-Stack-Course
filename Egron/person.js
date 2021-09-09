function person(fName, lName, ID, City, birthDate, parentID) {
    this.fName = fName;
    this.lName = lName;
    this.ID = ID;
    this.City = City;
    this.birthDate = birthDate;
    this.parentID = parentID;
}

//let pers = new person('Daniel', 'Kalfa' , '318448032', 'Jerusalem', '07/06/1997', '318');
let json = require('./data.json');
console.log(json);