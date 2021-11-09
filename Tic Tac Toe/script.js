function player(pName, score, type) {
    this.pName = pName;
    this.score = score;
    this.type = type;

    this.getpName = function () {
        return this.pName;
    }
    this.getScore = function () {
        return this.score;
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
    this.setType = function (newType) {
        this.type = newType;
    }
}
let circle = '<i class="far fa-circle"></i>';
let xSign = '<i class="fas fa-times"></i>';

let playerClassName = 'xSign'

let name1 = 'daniel';
let name2 = 'Shira';

let player1 = new player(name1, 0, circle);
let player2 = new player(name2, 0, xSign);

let whichPlayerTurn = player1;


const tbody = document.querySelector('tbody');

//Guide for the gameArr:
//0 = empty cell
//1 = x
//2 = O
let size = 3;
let gameArr = generateGameArr(size);
let winPositions = generateWinPositions(size);

generateTable(gameArr)

function generateWinPositions(size) {
    let winPositions = []
    for (let row = 0; row < size; row++) {
        let arr1 = [], arr2 = [];
        for (let col = 0; col < size; col++) {
            arr1.push([row, col]);
            arr2.push([col, row]);
        }
        winPositions.push(arr1, arr2);
    }
    let arr1 = [], arr2 = [];
    for (let x = gameArr.length - 1, y = 0; y < size; x--, y++) {
        arr1.push([y, y]);
        arr2.push([x, y]);
    }
    winPositions.push(arr1, arr2);
    return winPositions;
}

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

function generateTable(gameArr) {
    tbody.innerHTML = ''
    for (let row = 0; row < gameArr.length; row++) {
        let tr = document.createElement('tr');
        for (let col = 0; col < gameArr.length; col++) {
            const td = document.createElement('td');
            td.onclick = (event) => updateCell(event);
            if (gameArr[row][col] == 1) {
                td.className = 'xSign';
            } else if (gameArr[row][col] == 2) {
                td.className = 'circle';
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
}

function updateCell(event) {
    let cell = event.target;
    cell.onclick = '';
    cell.className = playerClassName;
    cell.innerHTML = whichPlayerTurn.type;
    changePlayer();
}

function changePlayer() {
    whichPlayerTurn = whichPlayerTurn === player1 ? player2 : player1;
    playerClassName = playerClassName == 'xSign' ? 'circle' : 'xSign';
}

function checkWin(event) {
    let cell = event.target;
    
}
