// const string = document.querySelector('#string');
// const query = new URLSearchParams(location.search);
// string.innerHTML = `<div>Hello ${query.get('name')}</div><div>Age ${query.get('age')}</div>`

document.querySelector('form').onsubmit = event => {
    event.preventDefault();
    console.log(event.target.children.fName.value);
}

