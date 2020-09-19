const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.get('/admin/:name', (req, res) => {
    const name = req.params.name;
    res.render('admin.ejs', {nameVar: name})
});

app.get('/posts', (req, res) => {
    const posts = [
        {title:'cats', author:'jols'},
        {title:'dogs', author:'bolh'},
        {title:'turtles', author:'vals'}
    ];
    res.render('posts.ejs', {postsArray: posts});
});


app.listen('3000', () => {
    console.log('Listening on port 3000')
});

