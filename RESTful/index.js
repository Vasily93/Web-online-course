const express = require('express');
const app = express();
const log = console.log;
const route = 9000;

// app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/form', (req, res) => {
    log('get route')
    res.send('GET route')
    log('Query:', req.query)    
})

app.post('/form', (req, res) => {
    log('post route')
    log('REQ body:',req.body)
    const result = req.body;
    res.send(`this is ${result.name} ${result.lastName} and i am ${result.age} years old`)
})

// app.get('*', (req, res) => {
//     res.render('form')
// })


app.listen(route, () => {
    log(`listening on ${route}`)
})