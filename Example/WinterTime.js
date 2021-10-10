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
*/

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
        msg += key + '\n';
    }
    alert(`Number : ${num}
Appear : ${arr.length}
${msg}`);
}