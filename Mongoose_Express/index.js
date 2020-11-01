const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection established')
    })
    .catch(err => {
        console.group('error:', err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    res.send('Undefing route for you**')
})

app.listen(1000, () => {
    console.log('App is listening on port 1000')
})