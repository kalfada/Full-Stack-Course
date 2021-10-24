function Student(name, unit, grades = []) {
    this.name = name;
    this.unit = unit;
    this.grades = grades;
    this.getAverage = function () {
        let total = 0;
        for (const grade of this.grades) {
            total += grade;
        }
        return total / this.grades.length;
    }
    this.printStudent = function () {
        let grades = '';
        for (let i = 0; i < this.grades.length; i++) {
            grades += ` ${String(this.grades[i])}`
        }
        return (`Name : ${this.name}
        Class : ${this.unit}
        Grades :${grades}
        Average grade : ${this.getAverage()}`);
    }
}

let choise = 0;
let students = [
    new Student('Daniel', 1, [100, 100, 100, 100]),
    new Student('Yonatan', 1, [90, 65, 87, 100]),
    new Student('Michael', 1, [90, 10, 70, 40]),
    new Student('Avraham', 1, [100, 90, 40, 86]),
];

while (choise != 5) {
    choise = prompt(`Welcome to the grades Data base:
        [1] Add student
        [2] Search for student
        [3] Print average grades of all class
        [4] search student by class
        [5] Exit`);

    switch (choise) {
        case '1':
            addStudent();
            break;
        case '2':
            searchStudentByName();
            break;
        case '3':
            printAvrage(students);
            break;
        case '4':
            searchStudentByClass();
            break;
    }
}


function addStudent() {
    let name = prompt('Enter name:');
    let unit = prompt('Enter class number:');
    let grades = [];
    let grade = prompt('enter grade, if you want to finish enter "done"');
    while (grade !=  'done') {
        grades.push(grade);
        grade = prompt('enter grade, if you want to finish enter "done"');
    }
    students.push(new Student(name, unit, grades));
}

function searchStudentByName() {
    let name = prompt('Enter the student name:');
    students.find(element => name.toLowerCase() == element.name.toLowerCase()).printStudent();
    
}

function searchStudentByClass() {
    let unit = prompt('Enter the class number:');
    let result = students.filter(element => Number(unit) == element.unit);
    let msg = '';
    result.forEach(element => {
        msg += element.printStudent();
    });
    msg += ('\nThe average grade of the class is: ' + getAverage(result) + '\n');
    alert(msg);
}

function printAvrage(students) {
    alert(getAverage(students));
}

function getAverage(unit) {
    let total = 0;

    for (const grades of unit) {
        total += grades.getAverage();
    }
    return total / unit.length;
}

