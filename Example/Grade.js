let grade = 0, total = 0, students = 0, highest = 0, lowest = 100;

grade = prompt('Please enter the student grade: ');
while (grade != 'exit') {
if (grade >= 0 && grade <= 100 && !isNaN(grade) && grade != '') {
        if (grade > highest) {
            highest = Number(grade);
        } else if (grade < lowest) {
            lowest = Number(grade);
        }
        total += Number(grade);
        students++;
    }else{
        alert('enter a valid number');
    }
    grade = prompt('Please enter the student grade: ');
}
alert(`They are ${students} students in the class
The avrage grade is ${(total / students).toFixed(2)}
The higest grade is ${highest}
The lowest grade is ${lowest}`);