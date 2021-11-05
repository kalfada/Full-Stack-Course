document.querySelector('#year').innerHTML = getYears()

const cars = JSON.parse(localStorage.cars || null) || []
render()

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
    cars.push(values)
    localStorage.cars = JSON.stringify(cars)
    render()
}

function render() {
    document.querySelector('#list').innerHTML =
        cars.map(car => `<li>
    <strong>${car.company} - ${car.model}</strong>
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


