const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection established')
    })
    .catch(err => {
        console.group('error:', err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true}))
app.use(methodOverride('_method'))

//ROUTES ↓↓↓
app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products', {products: products})
})
app.get('/products/new', (req, res) => {
    res.render('form', {})
})

app.get('/products/:id/edit', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id)
    console.log(product)
    res.render('edit', {product: product})
}) 

app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const {name, price, category} = req.body;
    await Product.findByIdAndUpdate(id,
        {name:name, price:price, category:category},
        {runValidators: true })
    res.redirect(`/products/${id}`)
})

app.delete('/products/:id', async (req, res) => {
    const {id} = req.params;
    await Product.deleteOne({_id:id})
        .then(p => console.log(p))
    res.redirect('/products')
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id)
    res.render('details', { product: product })
})

app.post('/products', (req, res) => {
    const newProduct = req.body;
    Product.create(newProduct)
    res.redirect('/products')
})

app.get('*', (req, res) => {
    res.send('Undefing route for you**')
})

app.listen(1000, () => {
    console.log('App is listening on port 1000')
})