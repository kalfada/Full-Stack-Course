const circle = document.querySelector('div');

circle.onclick = () => {
    alert('Well Done!!');
}

circle.onmouseenter = () => {
    circle.style.left = `${getRandomPos(innerWidth - 100)}px`;
    circle.style.top = `${getRandomPos(innerHeight - 100)}px`;
    circle.style.width = circle.style.height = `${getRandomSize()}px`;
}

function getRandomPos(max) {
    return Math.floor(Math.random() * max);
}

function getRandomSize() {
    return Math.floor(Math.random() * 100 - 20);
}
