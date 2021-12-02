// function carDetails(company, model, color, year, gear, sunroof) {
//     this.company = company,
//         this.model = model,
//         this.color = color,
//         this.year = year,
//         this.gear = gear,
//         this.sunroof = sunroof
//     }

let carArr = []

// let car2 = new carDetails('s uzuki', 'alto', 'gray', '2011', 'manual', false)
carArr.push({ company: 'suzuki', model: 'alto', color: 'gray', year: '2011', gear: 'manual', sunroof: false })
// console.log(carArr);



document.querySelector('form').onsubmit = (event) => {
    event.preventDefault();
    console.log(event);
}






// document.querySelector('button').onclick = () =>{
//     document.getElementById('name').innerText = 'Micheal';
// }
