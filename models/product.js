const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true,
        },
        price:
        {
            type: Number,
            required: true,
            min: 0
        },
        category:
        {
            type: String,
            lowercase: true,
            enum: ['fruit', 'vegetable', 'dairy']
        }
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
