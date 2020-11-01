const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection established')
    })
    .catch(err => {
        console.group('error:', err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})
productSchema.methods.greet = function() {
    console.log("Hello Vasily! Welcome to products collection")
}



const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'red wine', price: 30 , categories: ['relax', 'chill'], qty: {online:10, inStore: 3}})
bike.save()
    .then(data => console.log(data))
    .catch(err => console.log('this is error:', err))


