//find the most common object in the array and print what
//is it and how many times it represent in the array.
let arr = [8,'a','a','a', 12,8,'a',3,'a',12,4,9,3];
let c1 = c2 = 1, common = '';

arr.sort();
for (let index = 0; index < arr.length; index++) {
    if (arr[index] == arr[index+1]) {
        c1++;
    }else{
        c1 = 1;
    }
    if(c1 > c2){
        common = arr[index];
        c2 = c1;
    }
}
console.log(`The most common thing in the array is "${common}" and it is represented ${c2} times in the array`);