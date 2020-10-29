const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/cats', (req, res) => {
    const title = 'This is Cats';
    const cats = ['Bill', 'Call', 'Match', 'Vaska'];
    res.render('cats', {
        title: title,
        cats: cats
    })
})

app.get('*', (req, res) => {
    res.send('This is * route')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
}) 