const form = document.querySelector('form')

form.onsubmit = event => {
    event.preventDefault();
    const formEl = new FormData(event.target)
    let values = {}
    for (const pair of formEl) {
        values[pair[0]] = pair[1]
    }
    axios.post('/', values)
        .then(form.reset())
}

function render() {
    let list = [];
    axios.get('/')
        .then(res => list = res.data)
}