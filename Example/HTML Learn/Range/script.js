document.querySelector('#btn').onclick = () => {
    document.querySelector('div').innerText = document.querySelector('#range').value == document.querySelector('#guess').value ? 'win' : 'loss';
}
document.querySelector('#range').oninput = event => {
    document.querySelector('#guess').value = event.target.value;
}