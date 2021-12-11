const express = require('express')

const fs = require('fs')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))

app.get('/root*/', function (req, res) {
    const { path } = req;
    fs.existsSync(`.${path}`)?
    res.send(fs[path.includes('.') ? 'readFileSync' : 'readdirSync'](`.${path}`)):
    res.send(`path ${path} does not exist`)
})

app.post('/root*/', function (req, res) {
    const { path } = req;
    fs.existsSync(`.${path}`) ?
        res.send(`file/folder with the name ${path} is already exist`) :
        path.includes('.') ?
            res.send(fs.writeFileSync(`.${path}`, '')) :
            res.send(fs.mkdirSync(`.${path}`))

})

app.put('/root*/', function (req, res) {
    const { path } = req
    const {newName} = req.query
    if (fs.existsSync(`.${path}`) && path.includes('.')) {
        let newPath = path.split('/')
        newPath.pop()
        newPath.push(newName)
        fs.renameSync(`.${path}`, `.${newPath.join('/')}`)
        res.send('changed successfully')
    }else{
        res.send(`file with the name ${path} does not exist`)
    }

})

app.delete('/root*/', function (req, res) {
    const { path } = req
    if (fs.existsSync(`.${path}`) && path.includes('.')) {
        fs.unlinkSync(`.${path}`)
        res.send(`${path} deleted successfully`)
    }else{
        res.send(`${path} does not exist`)
    }
})

app.listen(3000, () => console.log('server is running'))