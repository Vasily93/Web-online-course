const express = require('express');
const app = express();

//Routes
//Order of routes matters!!
//req.params = object of nodes from url
app.get('/', (req, res) => {
    res.send('hi vasily!')
});

app.get('/dog', (req, res) => {
    res.send('wooof!')
});

app.get('/bye', (req, res) => {
    res.send('goodbye Vasily!')
});

app.get('/vasya/:whatever', (req, res) => {
    const params = req.params.whatever.toUpperCase();
    res.send(`Welcome to ${params} dude`) // collon means any pattern after parent slash
});

app.get('/repeat/:word/:count', (req, res) => {
    const count = req.params.count;
    const word = req.params.word;
    let i = 0;
    let response = '';
    while(i<count) {
        response += word + ' ';
        i++
    }
    res.send(response);
});

app.get('*',(req, res) => {
    res.send('you are a star!') //works for all undeclared routes
});

//Listening on port 3000
app.listen(3000, () => {
    console.log('listening on port 3000')
});
