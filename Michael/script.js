function carDetails(company, model, color, year, gear, sunroof) {
    this.company = company,
        this.model = model,
        this.color = color,
        this.year = year,
        this.gear = gear,
        this.sunroof = sunroof
}

let carArr = []
let car1 = new carDetails('suzuki', 'alto', 'gray', '2011', 'manual', false)
// let car2 = new carDetails('suzuki', 'alto', 'gray', '2011', 'manual', false)
function addNewCar(car) {
    carArr.push(car)
}
addNewCar(car1)