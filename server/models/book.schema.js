const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// ^ const Schema is a constructor variable //

const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true},
});

// this says, hey mongoose (mongoose), please use the 'book' collection (.model('Book'...)
// mongoose says, I automatically pluralize, welcome to books
// ... you're welcome
module.exports = mongoose.model('book', bookSchema);