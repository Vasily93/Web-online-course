const express = require('express');
const app = express();
const log = console.log;
const route = 9000;
const path = require('path');

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    log('home route')
    res.send('this is home page')
})

app.get('/comments', (req, res) => {
    res.render('comments', {comments: comments})
})




app.listen(route, () => {
    log(`listening on ${route}`)
    
})




// database
    const comments = [
        {
            username: 'Vasily',
            comment: 'I love you'
        },
        {
            username: 'Tikhon',
            comment: 'But i dont'
        },
        {
            username: 'Trifon',
            comment: 'i will paint your face'
        },
        {
            username: 'Sasha',
            comment: 'I will pay music all day long'
        },
        {
            username: 'Tim',
            comment: 'I just wanna be alone'
        },
        {
            username: 'Pasha',
            comment: 'I will sale you anything!'
        },
    ]
    