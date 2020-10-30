const express = require('express');
const app = express();
const log = console.log;
const route = 9000;
const path = require('path');
const {v4: uuid4 } = require("uuid");
const methodOverride = require('method-override');


let comments = [
    {
        id: 045,
        username: 'Vasily',
        comment: 'I love you'
    },
    {   
        id: 034,
        username: 'Tikhon',
        comment: 'But i dont'
    },
    {   
        id: 450,
        username: 'Trifon',
        comment: 'i will paint your face'
    },
    {
        id: 780,
        username: 'Sasha',
        comment: 'I will pay music all day long'
    },
    {  id: 057,
        username: 'Tim',
        comment: 'I just wanna be alone'
    },
  
]



app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))
app.use(methodOverride('_method'))

//Routes
app.get('/', (req, res) => {
    log('home route')
    res.send('this is home page')
})

app.get('/comments', (req, res) => {
    res.render('comments', {comments: comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const id = uuid4();
    const {username, comment} = req.body;
    comments.push({username, comment, id})
    log(comments[comments.length-1])
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id ||  c.id === parseInt(id)) ;
    res.render('comments/show', {comment: comment})
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const patchedComment = req.body;
    const oldComment = comments.find(c => c.id === id || c.id === parseInt(id));
    oldComment.comment = patchedComment.comment;
    res.redirect('/comments') 
})

app.get('/comments/:id/update', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id || c.id === parseInt(id));
    res.render('comments/update', {comment: comment })
})


app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments= comments.filter(c => c.id !== id && c.id !== parseInt(id))
    res.redirect('/comments')
})


app.listen(route, () => {
    log(`listening on ${route}`)  
})



// database

// log(comments)    