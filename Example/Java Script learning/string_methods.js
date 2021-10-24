let str = 'daniel kalfa', tries = 0, counter = 0;
let msg = ' enter one char';

while (tries < 4) {
    let userChar = prompt(msg);
    if (userChar.length == 1) {
        if (str.includes(userChar.toLowerCase())) {
            counter++;
        }
        tries++;
        msg = 'enter another one';
    } else {
        msg = 'enter just one char!';
    }
}
alert(`your score: ${counter}/4`);