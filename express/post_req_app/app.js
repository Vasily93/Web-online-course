const express = require('express');
const app = express();
const port = 9000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/friends', (req, res) => {
    const friends = [
        {name: 'Tikhon', age: '28'},
        {name: 'Trifon', age: '28'},
        {name: 'Sasha', age: '24'},
        {name: 'Tim', age: '22'}
    ];
    res.render('friends', {friendsArray: friends});
});

app.post('/addfriend', (req, res) => {
    console.log(req.body.name);
    res.send('add one more friend'); 
});


app.listen(port, () => {
    console.log(`listenig on port ${port}`);
});

