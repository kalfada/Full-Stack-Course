let person = {
    name : 'Daniel',
    age : 24,
    city : "Jerusalem",
    isMarried : false
};
person.height = prompt('enter your height:');
person.changed = person.height;
delete person.height;
for (const key in person) {
    if (key == 'city') {
        console.log(person.city);
    }
}