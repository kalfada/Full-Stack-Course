let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6"
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14"
let animalArr = (txt1 + ", " + txt2).split(", ");
let choose = 0;

while (choose != 6) {
    
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
}

function searchByAnimalCode(code) {
    for (let index = 0; index < animalArr.length; index++) {
        if(animalArr[index].includes(code))
        alert(animalArr[index].replace(code,''));        
    }
}

function searchByAnimalName(params) {

}

function addAnimal(params) {

}

function deleteAnimal(params) {

}

function printAnimals(params) {

}