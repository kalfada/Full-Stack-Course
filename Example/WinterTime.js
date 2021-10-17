/*let person = {
    name : 'Daniel',
    age : 24,
    city : "Jerusalem",
    isMarried : false
};
person.height = prompt('enter your height:');
person.changed = person.height;
delete person.height;
console.log(`the key 'city' : ${person.hasOwnProperty("city")}`);

let monster = {
    eyes: 2,
    legs: 4,
    hands: 2,
    ears: 2,
    mouth: 1
}

let num = prompt('please enter number: ');
print(howMany(monster));


function howMany(obj) {
    let arr = [];
    for (const key in obj) {
        if (obj[key] == num) {
            arr.push(key);
        }
    }
    return arr;
}

function print(arr) {
    let msg = '';
    for (const key of arr) {
        msg += `${key}\n`;
    }
    alert(`Number : ${num}
Appear : ${arr.length}
${msg}`);
}

let calc = {
    sum: function (num1, num2) {
        return num1 + num2;
    },
    sub: function (num1, num2) {
        return num1 - num2;
    },
    mul: function (num1, num2) {
        let result = 0;
        for (let index = 0; index < num2; index++) {
            result += calc.sum(num1, num2);
        }
        return result
    },
    div: function (num1, num2) {
        let result = 0, num = num1;
        while (num >= num2) {
            num = calc.sub(num, num2);
            result++;
        }
        return result
    }
}

let num1 = prompt('please enter a number');
let num2 = prompt('please enter another number a number');

let choise = prompt(`choose one of the options:
    [1] Sum
    [2] Subtraction
    [3] Multiplication
    [4] Division`);

switch (choise) {
    case '1':
        alert(calc.sum(Number(num1), Number(num2)));
        break;
    case '2':
        alert(calc.sub(Number(num1), Number(num2)));
        break;
    case '3':
        alert(calc.mul(Number(num1), Number(num2)));
        break;
    case '4':
        alert(calc.div(Number(num1), Number(num2)));
        break;
}
function Person (name, age, ID) {
    this.name = name,
    this.age = age,
    this.ID = ID,
    this.print = function () {
        console.log(`name : ${this.name}\nage: ${this.age}\nisLegal: ${this.ID}`);
    }

}
let animal = {
    name : 'dog',
    age : 7,
    color : 'white',
    print : function () {
        console.log(`name : ${this.name}\nage: ${this.age}\ncolor: ${this.color}`);
    }
}
let country = {
    name : 'israel',
    age : 73,
    isLegal : false,
    print : function () {
        console.log(`name : ${this.name}\nage: ${this.age}\nisLegal: ${this.isLegal}`);
    }
}
let arr = [];
let daniel = new Person('daniel', 24, '318448032');
let yosef = new Person('Yosef', 24, '31833533')
arr.push(daniel, animal, country);
//console.log(arr);
daniel.print()
yosef.print()

function Student(name, units, grades = []) {
this.name = name;
    this.units = units;
    this.grades = grades;
    this.getAverage = () => {
        let total = 0;
        for (const grade of this.grades) {
            total += grade;
        }
        return total / this.grades.length;
    }
}

let students = [
    new Student('Daniel', 1, [100, 100, 100, 100]),
    new Student('Yonatan', 1, [90, 65, 87, 100]),
    new Student('Michael', 1, [90, 10, 70, 40]),
    new Student('Avraham', 1, [100, 90, 40, 86]),
];
let choise = 0;


while (choise != 4) {
    choise = prompt(`Welcome to the grades Data base:
    [1] Add student
    [2] Search for student
    [3] Print average grades of all class
    [4] Exit`);
    
    switch (choise) {
        case '1':
            addStudent();            
            break;
        case '2':
            searchStudent();
            break;
        case '3':
            getAverage();
            break;
    }
}

function searchStudent() {
    let name = prompt('Enter the student name:');

}

function getAverage() {
    let total = 0;

    for (const grades of students) {
        total += grades.getAverage();
    }
    return total / students.length;
}
let students = ['daniel', 'michael', 'tishbi', 'chanoch', 'moshe', 'avi', 'aviad', 'yerachmiel', 'yosef', 'mike', 'steve', 'ruben'];

let short = students.filter((val) => {
    return val.length <= 5;
});

let includeI = students.filter((val) => {
    return val.toLowerCase().includes('i') && val[val.length-1].toLowerCase() != 'i';
});
console.log(includeI);
*/

