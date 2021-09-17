let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6"
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14"
let animalArr = (txt1 + ", " + txt2).split(", ");
const notExist = -1;
for (let index = 0; index < animalArr.length; index++) {
    animalArr[index] = formatAnimalName(animalArr[index]);
}
let choose = 0;

while (choose != 6) {

    choose = prompt(`Welcome to the Data Base.
    Please choose from one of the options:
    [1] Search by animal code
    [2] Search by animal name
    [3] Add new animal
    [4] Delete animal
    [5] See all the animals
    [6] Exit`);

    switch (choose) {
        case '1': printAnimalName(searchAnimalByCode(prompt('Enter animal code:')));
            break;
        case '2': printAnimalCode(searchAnimalByName(prompt('Enter animal name:')));
            break;
        case '3': addAnimal();
            break;
        case '4': deleteAnimal(prompt('enter code for the animal you want to delete'));
            break;
        case '5': printAnimals();
            break;
    }
}
//Search animal in the array by the name of the animal
//and return the index of the animal.
//if doesn't exist, return false
function searchAnimalByName(str) {
    str = formatAnimalName(str);
    for (let index = 0; index < animalArr.length; index++) {
        if (str == seperateName(animalArr[index])) {
            return index;
        }
    }
    return notExist;
}
//Search animal in the array by the code of the animal
//and return the index of the animal.
//if doesn't exist, return false
function searchAnimalByCode(str) {
    for (let index = 0; index < animalArr.length; index++) {
        if (str == seperateCode(animalArr[index])) {
            return index;
        }
    }
    return notExist;
}
//Get animal index and print the name of the animal
function printAnimalName(index) {
    index != notExist ? alert(seperateName(animalArr[index])) : alert("Animal doesn't axist");

}
//Get animal index and print the code of the animal
function printAnimalCode(index) {
    index != notExist ? alert(seperateCode(animalArr[index])) : alert("Animal doesn't axist");
}
//Add animal to the array.
function addAnimal() {
    let name = prompt('enter animal name:');
    if (searchAnimalByName(name) == notExist) {
        let code = prompt('enter animal code:');
        if (searchAnimalByCode(code) == notExist) {
            animalArr.push(name + code);
        } else {
            alert('code alredy exist');
        }
    } else {
        alert('animal alredy exist');
    }
}
//Delete animal from the array.
function deleteAnimal(code) {
    if (searchAnimalByCode(code) != notExist) {
        let ans = prompt('are you sure you want to delete this animal?y/n');
        if (ans == 'y') {
            animalArr.splice(searchAnimalByCode(code), 1);
        }
    } else {
        alert('animal does not axist')
    }
}
//Print all the animals in the array.
function printAnimals() {
    let str = '';
    for (let index = 0; index < animalArr.length; index++) {
        str += toString(animalArr[index]) + '\n';
    }
    alert(str);
}
//Get animal and return the name of the animal only.
function seperateName(name) {
    let newName = '';
    for (let index = 0; index < name.length; index++) {
        if (isNaN(name[index])) {
            newName += name[index];
        }
    }
    return formatAnimalName(newName);
}
//Get animal and return the code of the animal only.
function seperateCode(name) {
    let newCode = '';
    for (let index = 0; index < name.length; index++) {
        if (!isNaN(name[index])) {
            newCode += name[index];
        }
    }
    return newCode;
}
//Get animal and print it in this way: ANIMAL | ANIMAL_CODE.
function toString(animal) {
    return `${seperateName(animal)} | ${seperateCode(animal)}`;
}
//Format the given string to be with first upper case letter and the rest lower case.
function formatAnimalName(animal) {
    return animal.charAt(0).toUpperCase() + animal.slice(1).toLowerCase();
}