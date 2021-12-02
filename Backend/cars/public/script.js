document.querySelector('#year').innerHTML = getYears();
let cars = [];
getCarsList();

function getCarsList() {
    axios.get('http://localhost:3000/cars')
        .then(res => {
            cars = res.data;
            render()
        })
}

function deleteCar(event) {
    const car = event.target.parentElement;
    if (confirm('Are you sure ou want to delete?')) {
        axios.delete(`/cars/${car.id}`)
        .then(getCarsList());
    }
}

function getYears() {
    let years = ''
    for (let year = new Date().getFullYear(); year > 1979; year--)
        years += `<option>${year}</option>`
    return years
}

document.querySelector('form').onsubmit = event => {
    event.preventDefault()
    const form = event.target
    const values = Object.values(form)
        .reduce((acc, input) => (!input.name || input.type == 'radio' && !input.checked) ? acc : ({
            ...acc,
            [input.name]: input.type == 'checkbox' ? input.checked : input.value
        }), {}
        )
    form.reset()
    axios.post('/cars', values)
        .then(() => getCarsList())
    localStorage.cars = JSON.stringify(cars)
}

function render() {
    document.querySelector('#list').innerHTML =
        cars.map(car => `<li id = "${car.id}">
    <strong>${car.company} - ${car.model}</strong>
    <button onclick = "deleteCar(event)">X</button>
    <div class="details">
        <div>
            <span>${car.gear}</span>
            <span>${car.year}</span>
        </div>
        <div>
            <div class="car-color" style="background-color: ${car.color};"></div>
            ${car.sunroof ? '<small>sunroof</small>' : ''}
        </div>
    </div>
</li>`).join('')
}


