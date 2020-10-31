const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection established')
    })
    .catch(err => {
        console.group('error:', err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)

// const amadeus = new Movie({title: 'Amadeus', year:1986, score: 9.2, rating: 'R'}) 

Movie.insertMany([
    {title:'Amelie', year:2002, score:8.4, rating:'R'},
    {title:'Alien', year:2004, score:4.5, rating:'PG'},
    {title:'Stand by me', year:2020, score:3.3, rating:'PG-13'},
])
.then(data => {
    console.log('data:', data)
})