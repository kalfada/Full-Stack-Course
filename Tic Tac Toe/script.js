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

let name1 = 'Daniel';
let name2 = 'Shira';

let player1 = new player(name1, 0, xSign);
let player2 = new player(name2, 0, circle);

let whichPlayerTurn = player1;


const tbody = document.querySelector('tbody');

//Guide for the gameArr:
//0 = empty cell
//1 = x
//2 = O
let size = 3;
let gameArr = generateGameArr(size);
let winPositions = generateWinPositions(size);

let gameArr2 = [0, 0, 1, 0, 2, 0, 2, 1, 1]
generateTable(gameArr)

function generateWinPositions(size) {
    let winPositions = [];
    let arr = [];
    //Generate all row poisitions
    for (let i = 0; i < size * 3; i += size) {
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
        while (position < size * 3) {
            arr.push(position);
            position += size;
        }
        winPositions.push(arr);
    }
    //Generate all slant poisitions
    let arr1 = [], arr2 = [];
    for (let x = size - 1, y = 0; y < (size * 3); y += 4) {
        arr1.push(y);
        arr2.push(x);
        x += 2;
    }
    winPositions.push(arr1, arr2);
    return winPositions;
}

function generateGameArr(size) {
    let gameArr = [];
    for (let index = 0; index < size * 3; index++) {
        gameArr.push(0);
    }
    return gameArr;
}

function generateTable(gameArr) {
    tbody.innerHTML = ''
    let cnt = 0;
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
    updateGameArr(IDtoIndex(cell));
    console.log(checkWin(cell));
    changePlayer();
}

function changePlayer() {
    whichPlayerTurn = whichPlayerTurn === player1 ? player2 : player1;
    playerClassName = playerClassName == 'xSign' ? 'circle' : 'xSign';
}

function IDtoIndex(cell) {
    return Number(cell.id.slice(4));
}

function updateGameArr(index) {
    gameArr[index] = whichPlayerTurn.type == xSign ? 1 : 2;
}

function filterWinPositions(cell) {
    return winPositions.filter(element => element.includes(cell));
}

function checkWin(cell) {
    let possibilities = filterWinPositions(IDtoIndex(cell));
    console.log(gameArr);
    console.log(possibilities);
    let isWin = true;
    for (let i = 0; i < possibilities.length; i++) {
        isWin = checkWinPosition(possibilities[i]);
        if (isWin && gameArr[possibilities[i][0]] == 1) {
            return 1;
        } else if (isWin) {
            return 2;
        }
    }
    // return 0;
}

function checkWinPosition(winPosition) {
    // console.log(winPosition);
    let res = true;
    // debugger
    for (let index = 0; index < winPosition.length-1; index++) {
        
        if (gameArr[winPosition[index]] != gameArr[winPosition[index + 1]] || gameArr[winPosition[index]] == 0) {
            res = false;
        }
    }
    console.log(res);
    return res;
}
