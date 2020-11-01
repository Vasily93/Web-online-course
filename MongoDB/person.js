const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection established')
    })
    .catch(err => {
        console.group('error:', err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function() {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log('ABOUT TO SAVE!')
})

personSchema.post('save', async function() {
    console.log('JUDT SAVED!')
})

const Person = mongoose.model('Person', personSchema);