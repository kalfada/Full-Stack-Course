const files = document.querySelector('#files');
// const cPath = document.querySelector('#path');



getListOfFiles('root')

function getListOfFiles(path) {
    axios.get(`http://localhost:3000/${path}`)
        .then(res => {
            // console.log(res.data);
            let div = document.createElement('div')
            div.className = 'path'
            if (!path.includes('.')) {
                res.data.forEach(file => {
                    div.appendChild(createFileElement(path, file))
                })
            } else {
                div.innerText = res.data
            }
            files.appendChild(div)
        })
}

function createFileElement(path, file) {
    let link = document.createElement('div')
    link.onclick = () => getListOfFiles(`${path}/${file}`)
    link.className = 'singel_file'
    link.innerText = file
    return link
}

// function createcPathElement(path) {
//     let pathArr = path.split('/')
//     let divs = []
//     // console.log(pathArr);
//     let cnt = 1;
//     pathArr.forEach(element => {
//         divs.push(createPathElement(pathArr.slice(0,cnt++).join('/'), element))
//     });
// }

// function createPathElement(path, folderName) {
//     console.log(path);
//     let newPath = document.createElement('div')
//     newPath.onclick = () => getListOfFiles(`${path}`)
//     newPath.innerText = path
//     return newPath
// }