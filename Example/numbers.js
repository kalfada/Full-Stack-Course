let num = prompt('enter number');
console.log(num);
let counter = 0;
let newNum = 0;

while(num){
    newNum += num % 10;
    newNum *= 10;
    num = parseInt(num / 10);
    console.log(num);
}
console.log(newNum);
/*do {
    counter++;
    num /= 10;
} while (parseInt(num));
console.log(counter);


*/