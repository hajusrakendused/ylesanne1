const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug').get('/', (req, res) => {

    res.render('index', {
        users: [
            {id: 1, name: 'Michael Jackson'},
            {id: 2, name: 'Dave Stevens'},
            {id: 3, name: 'Fiona West'}
        ]
    })
})
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
