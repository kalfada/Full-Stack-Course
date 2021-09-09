//check if number is bigger smaller or equale to 10
let n1 = 10;
let n2 = prompt('enter number: ');

if (n2 < n1) {
    alert(`${n2} is smaller than ${n1}`);
} else if (n2 > n1) {
    alert(`${n2} is bigger than ${n1}`);
} else {
    alert(`${n2} is equale to ${n1}`);
}
alert('done');



//check between 3 numbers who is the bigger
let num1 = prompt('enter number: ');
let num2 = prompt('enter number: ');
let num3 = prompt('enter number: ');

if (n1 > n2) {
    if(n1 > num3){
        alert(`num1 ${n1} is the bigger`);
    }
}else if (n2 > num3) {
    alert(`num2 ${n2} is the bigger`);
}else{
    alert(`num3 ${num3} is the bigger`);
}
