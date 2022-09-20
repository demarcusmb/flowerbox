const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const flowerSchema = newSchema({
    name:String,
    image:String,
    price:Number,
    tags:String,
})

const Flower = mongoose.model('Flower', flowerSchema);
module.exports = Flower