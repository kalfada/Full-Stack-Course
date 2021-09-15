let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6"
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14"
let animalArr = (txt1 + ", " + txt2).split(", ");
for (let index = 0; index < animalArr.length; index++) {
    animalArr[index] = formatAnimalName(animalArr[index]);    
}
let choose = 0;

/*while (choose != 6) {
    
    choose = prompt(`Welcome to thee Data Base.
    Please choose from one of the options:
    [1] Search by animal code
    [2] Search by animal name
    [3] Add new animal
    [4] Delete animal
    [5] See all the animals
    [6] Exit`);
    
    switch (choose) {
        case 1: searchByAnimalCode(11);
            break;
        case 2:
            searchByAnimalCode(prompt(`Enter animal name please:`));
            break;
        case 3:
            addAnimal();
            break;
        case 4:
            deleteAnimal();
            break;
        case 5:
            printAnimals();
            break;
        case 6:

            break;
        default:
            //alert(`Please choose one of the options above!`);
            break;
    }
}*/

function searchByAnimalCode(code) {
    for (let index = 0; index < animalArr.length; index++) {
        if (code == seperateCode(animalArr[index])) {
            return seperateName(animalArr[index]);
        }
    }
    return false;
}

function searchByAnimalName(name) {
    for (let index = 0; index < animalArr.length; index++) {
        if (name == seperateName(animalArr[index])) {
            return seperateCode(animalArr[index]);
        }
    }
    return false;
}

function addAnimal(animal) {
    if (!searchByAnimalName(animal) && !searchByAnimalCode(animal)) {
        animalArr.push(animal);
    }
}

function deleteAnimal(animal) {
    if (searchByAnimalName(animal) && searchByAnimalCode(animal)) {
        animalArr.push(animal);
    }
}

function printAnimals() {
    for (let index = 0; index < animalArr.length; index++) {
        toString(animalArr[index]);        
    }
}

function seperateName(name) {
    let newName = '';
    for (let index = 0; index < name.length; index++) {
        if (isNaN(name[index])) {
            newName += name[index];
        }        
    }
    return newName;
}

function seperateCode(name) {
    let newCode = '';
    for (let index = 0; index < name.length; index++) {
        if (!isNaN(name[index])) {
            newCode += name[index];
        }        
    }
    return newCode;
}

function toString(animal) {
    console.log(`${seperateName(animal)} | ${seperateCode(animal)}`);
}

function formatAnimalName(animal) {
    return animal.charAt(0).toUpperCase() + animal.slice(1).toLowerCase();
}