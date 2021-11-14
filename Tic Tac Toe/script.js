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

let form = `<form action="">
<input type="text" name="player1" placeholder="Player 1">
<input type="text" name="player2" placeholder="Player 2">
<div id="size_menu">
    <label for="">choose size:</label>
    <select name="size" id="">
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
</div>
<input type="submit" name="" value="Start Game">
</form>`

let circle = '<i class="far fa-circle"></i>';
let xSign = '<i class="fas fa-times"></i>';

let playerClassName = 'xSign'

let player1;
let player2;

let currentPlayer;

let gameIsLive = false;

let movements = [];

const main = document.querySelector('#main');

main.innerHTML = form;

//Guide for the gameArr:
//0 = empty cell
//1 = x
//2 = O
let size = 0;
let gameArr = '';
let winPositions = '';

document.querySelector('form').onsubmit = event => startGame(event);

function startGame(event) {
    event.preventDefault();
    let values = Object.values(event.target);
    size = Number(values.size.value);
    gameArr = generateGameArr(size);
    winPositions = generateWinPositions(size);
    gameIsLive = true;
    player1 = new player(event.target.children.player1.value, 0, xSign);
    player2 = new player(event.target.children.player2.value, 0, circle);
    currentPlayer = player1;
    generateTable(size);
}

function generateWinPositions(size) {
    let winPositions = [];
    let arr = [];
    //Generate all row poisitions
    for (let i = 0; i < size * size; i += size) {
        for (let j = 0; j < size; j++) {
            arr.push(i + j);
        }
        winPositions.push(arr);
        arr = [];
    }
    //Generate all column poisitions
    for (let index = 0; index < size; index++) {
        arr = [];
        let position = index
        while (position < size * size) {
            arr.push(position);
            position += size;
        }
        winPositions.push(arr);
    }
    //Generate all slant poisitions
    let arr1 = [], arr2 = [];
    for (let x = size - 1, y = 0; y < size * size; y += size + 1) {
        arr1.push(y);
        arr2.push(x);
        x += 2;
    }
    winPositions.push(arr1, arr2);
    return winPositions;
}

function generateGameArr(size) {
    let gameArr = [];
    for (let index = 0; index < size * size; index++) {
        gameArr.push(0);
    }
    return gameArr;
}

function generateTable() {
    main.innerHTML = '';
    let cnt = 0;
    let tbody = document.createElement('tbody');
    for (let row = 0; row < size; row++) {
        let tr = document.createElement('tr');
        for (let col = 0; col < size; col++) {
            const td = document.createElement('td');
            td.onclick = (event) => updateCell(event);
            td.setAttribute('id', `cell${cnt}`);
            if (gameArr[cnt] == 1) {
                td.className = 'xSign';
                td.innerHTML = xSign;
            } else if (gameArr[cnt] == 2) {
                td.className = 'circle';
                td.innerHTML = circle;
            }
            cnt++;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    let table = document.createElement('table');
    table.appendChild(tbody);
    main.appendChild(table);
}

function updateCell(event) {
    if (gameIsLive) {
        let cell = event.target;
        cell.onclick = '';
        cell.className = playerClassName;
        cell.innerHTML = currentPlayer.type;
        movements.push(IDtoIndex(cell));
        updateGameArr(IDtoIndex(cell));
        checkWin(cell)
        changePlayer();
    }
}

function changePlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    playerClassName = playerClassName == 'xSign' ? 'circle' : 'xSign';
}

function IDtoIndex(cell) {
    return Number(cell.id.slice(4));
}

function updateGameArr(index) {
    gameArr[index] = currentPlayer.type == xSign ? 1 : 2;
}

function filterWinPositions(cell) {
    return winPositions.filter(element => element.includes(cell));
}

function checkWin(cell) {
    let possibilities = filterWinPositions(IDtoIndex(cell));
    for (let i = 0; i < possibilities.length; i++) {
        if (checkWinPosition(possibilities[i])) {
            gameIsLive = false;
            return currentPlayer;
        }
    }
    return -1;
}

function checkWinPosition(winPosition) {
    let res = true;
    for (let index = 0; index < winPosition.length - 1; index++) {
        if (gameArr[winPosition[index]] != gameArr[winPosition[index + 1]] || gameArr[winPosition[index]] == 0) {
            res = false;
        }
    }
    return res;
}

function undo() {
    if (gameIsLive) {
        let cell = movements.pop();
        gameArr[cell] = 0;
        changePlayer();
        let td = document.querySelector(`#cell${cell}`);
        td.onclick = (event) => updateCell(event);
        td.className = '';
        td.innerHTML = ''
    }
}

document.querySelector('#undo').addEventListener('click', undo);
document.querySelector('#new_game').addEventListener('click', newGame);

function newGame() {
    main.innerHTML = form;
    document.querySelector('form').onsubmit = event => startGame(event);
}
