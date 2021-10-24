function numbers() {
    let nums = [8, 1.6, 0.1, 22, 15, 8.8, 54.1, 1000];
    let newNums = [];
    let total = 0, biggest = 0, lowest = nums[0];

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] % 1 != 0) {
            newNums.push(nums[index]);
            if (nums[index] > biggest) {
                biggest = nums[index];
            } else if (nums[index] < lowest) {
                lowest = nums[index];
            }
        } else {
            total += nums[index];
        }
    }
    console.log(`the original array is ${nums}
    the new array is ${newNums} 
    the biggest number is ${biggest}
    the lowest number is ${lowest}
    the total of all the integers is ${total}`);
}

let grades = [], grade = 0, biggest = 0, lowest = 100, total = 0;

grade = Number(prompt('enter grade'));
while (grade >= 0) {
    grades.push(grade);
    total += grade;
    grade = Number(prompt('enter grade'));
}
grades.sort(function (a, b) { return a - b });
if (grades.length > 0) {
    console.log(`The biggest grade is ${grades[grades.length - 1]}
the lowest grade is ${grades[0]}
the avrage grade is ${total / grades.length}
all the grades from low to high:
${grades}`);
}
