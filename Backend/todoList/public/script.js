const list_of_missions = document.querySelector('#list_of_missions')
const form = document.querySelector('form')

render()

//post new mission to the server
form.onsubmit = event => {
    event.preventDefault();
    const formEl = new FormData(event.target)
    let values = {}
    for (const pair of formEl) {
        values[pair[0]] = pair[1]
    }
    axios.post('/', values)
        .then(() => {
            form.reset()
            render()
        })
}

//delete mission from the list
function deleteItem(id) {
    axios.delete(`/${id}`)
        .then(render())
}

//toggle item and determined if the mission has bee done or not
function toggleItem(id) {
    axios.put(`/${id}`)
        .then(render())
}


//basically the get method
function render() {
    axios.get('/list')
        .then(res => {
            let list = res.data
            let listElement = ''
            if (list.length) {
                for (const item of list) {
                    const doneClass = item.done ? 'done' : ''
                    listElement += `<li class = "${doneClass}"><label class = "check" onclick = "toggleItem(${item.id})"></label><span>${item.text}</span><button onclick = "deleteItem(${item.id})">X</i></button></li>`
                }
            }else{
                listElement = '<i class="fas fa-clipboard-list clipboard"></i><h2>Add your first todo</h2><p>What do you want to get done today?</p>'
            }
            list_of_missions.innerHTML = listElement
        })
}