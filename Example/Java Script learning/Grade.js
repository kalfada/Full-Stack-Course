let grade = 0, total = 0, students = 0, highest = 0, lowest = 100;

grade = prompt('Please enter the student grade: ');
while (grade != 'exit') {
    if (grade >= 0 && grade <= 100 && !isNaN(grade) && grade != '') {
        grade = Number(grade);
        if (grade > highest) {
            highest = grade;
        }
        if (grade < lowest) {
            lowest = grade;
        }
        total += grade;
        students++;
    } else {
        alert('enter a valid number');
    }
    grade = prompt('Please enter the student grade: ');
}
if (!students) {
    alert(`they are ${students} students in the class
    the avrage grade is ${total / students}
    the higest grade is ${highest}
    the lowest grade is ${lowest}`);
} else {
    alert("Don't have any Values");
}