/*let cost = Number(prompt('Enter number: '));

if (!cost < 50 || cost > 200) {
    alert('Total: ' + Math.round(cost * 1.3));
} else {
    alert('Total: ' + Math.round(cost * 1.1));
}*/
/*let tip, cost;
cost = Number(prompt('enter number'));
tip = (!(cost < 50 || cost > 200))? 0.3 : 0.1;
alert(`The cost is ${cost}
The tip is: ${cost * tip}
The total payment is: ${cost * (1+tip)}`);*/

let fName = prompt("enter your first name: ");
let lName = prompt("enter your last name: ");
let uName = prompt("enter your user name: ");

alert((`Hello ${fName||lName||uName||'anounimus'}`));


// (alert('1')||alert('2')||alert('3'));