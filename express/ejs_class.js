const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.get('/admin/:name', (req, res) => {
    const name = req.params.name;
    res.render('admin.ejs', {nameVar: name})
});

app.listen('3000', () => {
    console.log('Listening on port 3000')
});

