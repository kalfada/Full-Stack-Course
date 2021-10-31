const rightBtn = document.querySelector('#right-btn');
const leftBtn = document.querySelector('#left-btn');
const img = document.querySelector('#image');

let index = 0;
let arr = ['https://dvyvvujm9h0uq.cloudfront.net/com/articles/1525891879-886386-sam-burriss-457746-unsplashjpg.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNdh02MVr4cjkCDn-giJj9ICjhZFMxycMcw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmq9sNGfbBplrcz0UtfxbEkTEgiieGrWpUTQ&usqp=CAU'];
img.src = arr[index]

leftBtn.onclick = () => {
    index = index > 0 ? index - 1 : arr.length - 1;
    img.src = arr[index];
}

rightBtn.onclick = () => {
    index = index < arr.length - 1 ? index + 1 : 0;
    img.src = arr[index];
}