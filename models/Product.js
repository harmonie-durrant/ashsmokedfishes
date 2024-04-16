const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [50, 'Title cannot be more than50 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [1000, 'Description cannot be more than 1000 characters']
    },
    category: {
        type: String,
        required: true,
        maxlength: [50, 'Category cannot be more than 50 characters']
    },
    price: {
        type: Number,
        required: false,
    },
    readyToEat: {
        type: Boolean,
        required: true,
        maxlength: [50, 'Category cannot be more than 50 characters']
    },
    imageURL: {
        type: String,
        required: true,
    },
    altImages: {
        type: Array,
        required: false,
    }
})

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);