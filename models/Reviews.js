const mongoose = require('mongoose');

const ReviewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [50, 'Title cannot be more than50 characters']
    },
    content: {
        type: String,
        required: true,
        maxlength: [1000, 'Content cannot be more than 1000 characters']
    },
    dateOfVisit: {
        type: String,
        required: true,
        maxlength: [30, 'dateOfVisit cannot be more than 30 characters']
    },
    PPic: {
        type: String,
        required: true,
    },
    Link: {
        type: Array,
        required: false,
    }
})

module.exports = mongoose.models.Reviews || mongoose.model('Reviews', ReviewsSchema);