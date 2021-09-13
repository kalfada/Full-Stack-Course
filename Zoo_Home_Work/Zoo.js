let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6"
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14"
let txt = txt1 + ", " + txt2;
let animalArr = txt.split(",");

animalArr.forEach(element => {
    if (element[0] == " ") {
        element.split("").splice(0, 1).join();
    }
});

let choose = 0;

console.log(animalArr);
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
        case 1:
            searchByAnimalCode(prompt(`Enter animal code please:`));
            break;
        case 2:
            searchByAnimalCode(prompt(`Enter animal name please:`));
            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:
            break;
        default:
            //alert(`Please choose one of the options above!`);
            break;
    }
}

function searchByAnimalCode(code) {

}

function searchByAnimalName(params) {

}