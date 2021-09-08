//take a guess from the user of only one char and count
//how many right answers the user have compare to str
function guess() {
    let str = 'daniel kalfa', tries = 0, counter = 0;
    let msg = 'enter a number';
    
    while (tries < 4) {
        let userChar = prompt(msg);
        if (userChar.length == 1) {
            if (str.includes(userChar.toLowerCase())) {
                counter++;
            }
            tries++;
            msg = ' enter again';
        } else {
            msg = 'enter just one char!';
        }
    }
    alert(`your score: ${counter}/4`);
}


//takes a string and flip it is a  palindrom then print that it is
function flipStr(string) {
    let str = string;
    let newStr = '';
    for (let index = str.length-1; index >= 0; index--) {
        newStr += str[index]; 
    }
        alert(newStr);
        if(str == newStr){
            alert('this is a palindrom')
        }
}

//print the string letter by letter, then print the string from end to beggning,
//then let the user choose one letter and check and print
//how many times the letter appear in the string

function indexLesson() {
    let str = 'hello, my name is Daniel Kalfa'
    
    for (let index = 0; index < str.length; index++) {
        console.log(str[index]);
    }
    flipStr(str);
    let guess = prompt('enter one char'), cnt = 0;
    for (let index = 0; index < str.length; index++) {
        if (guess == str[index]) {
            cnt++
        }        
    }
    alert(`the letter exsit ${cnt} times`)
}
indexLesson();











