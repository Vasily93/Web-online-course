const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('connection established')
})
.catch(err => {
    console.group('error:', err)
})




const orange = new Product({name: 'Orange', price: 3, category: 'fruit'})
const pepper = new Product({name: 'Pepper', price: 4, category: 'vegetable'})
const sowercream = new Product({name: 'Sowercream', price: 6, category: 'diary'})

const seeds = [orange, pepper, sowercream];
Product.insertMany(seeds).then(seeds => console.log(seeds)).catch(err => console.log('ERR!!', err)) 