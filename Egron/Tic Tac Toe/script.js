function player(pName, score, isMyTurn, type) {
    this.pName = pName;
    this.score = score;
    this.isMyTurn = isMyTurn;
    this.type = type;

    this.getpName = function () {
        return this.pName;
    }
    this.getScore = function () {
        return this.score;
    }
    this.getisMyTurn = function () {
        return this.isMyTurn;
    }
    this.getType = function () {
        return this.type;
    }
    this.setpName = function (newName) {
        this.pName = newName;
    }
    this.setScore = function (newScore) {
        this.score = newScore;
    }
    this.setisMyTurn = function (newisMyTurn) {
        this.isMyTurn = newisMyTurn;
    }
    this.setType = function (newType) {
        this.type = newType;
    }
}

let circle = '<i class="far fa-circle"></i>';
let xSign = '<i class="fas fa-times"></i>';

// const tbody = document.querySelector('tbody');

//Guide for the gameArr:
//0 = empty cell
//1 = x
//2 = O
let size = 3;
let gameArr = generateGameArr(size);
let combinations = [];

for (let row = 0; row < gameArr.length; row++) {
    combinations.push([]);
    for (let col = 0; col < gameArr.length; col++) {
        combinations[row].push([row,col]);
    }
}

console.log(combinations);
// updateTable(gameArr);

function generateGameArr(size) {
    let gameArr = [];
    for (let row = 0; row < size; row++) {
        gameArr[row] = [];
        for (let col = 0; col < size; col++) {
            gameArr[row][col] = 0;
        }
    }
    return gameArr;
}

let gameArr2 = [[0, 1, 2], [2, 1, 0], [1, 0, 2]];
function updateTable(gameArr) {
    tbody.innerHTML = ''
    for (let row = 0; row < gameArr.length; row++) {
        let tr = document.createElement('tr');
        for (let col = 0; col < gameArr.length; col++) {
            const td = document.createElement('td');
            if (gameArr[row][col] == 1) {
                td.innerHTML = xSign;
                td.className = "xSign"
            } else if (gameArr[row][col] == 2) {
                td.innerHTML = circle;
                td.className = "circle"
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
}

function checkWin(gameArr) {
    let res = false;
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array.length - 1; col++) {
            if (condition) {
                
            }
        }
    }
    return res;
}
