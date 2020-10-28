const joke = require('give-me-a-joke');
console.log(joke)

joke.getRandomCNJoke((j) => {
    return console.log(j)
})
// console.log(random)