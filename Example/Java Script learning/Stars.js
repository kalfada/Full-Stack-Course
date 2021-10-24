let num = prompt('enter number');
let msg = '*';
for (let i = 0; i < num; i++) {
    console.log(msg);
    msg += '*';
}


num = prompt('enter number');
let str1 = '';
let str2 = ''

for (let index = 0; index <= num; index++) {
    str1 += '*';
}
for (i = num; i >= 0; i--) {
    if(i != num && i != 0){
        for (j = 0; j <= i; j++) {
            str2 += ' ';           
        }
        console.log(`${str2}*`);
    }else{
        console.log(str1);
    }
    str2 = '';
}