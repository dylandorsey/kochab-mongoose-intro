const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Book = require('../models/book.schema');

//------------- Connecting to Mongo Start --------------//

const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl);
mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', () => {
    console.log('mongoose connection error', error)
});
//------------- Connecting to Mongo End --------------//

// get route for /books
router.get('/', (req, res) => {
    console.log('meow');
    // database Read/Find
    Book.find({})
        // case 1: success, what you wanted happened
        .then((dataFromDatabase) => {
            // this is a promise from mongo
            // dataFromDatabase is from mongo database
            console.log(dataFromDatabase);
            res.send(dataFromDatabase);
        // case 2: error, different things happened
        }).catch((error) => {
            console.log('error with Book.find', error);
            res.sendStatus(500);
        });
});

module.exports = router;

// commented out because now we will find this information in our database instead
// const bookCollection = [
//     {
//         title: "A Tale of Two Cities",
//         author: "Charles Dickens",
//         edition: 2,
//     },
//     {
//         title: "Murder on the Orient Express",
//         author: "Agatha Christie",
//         edition: 2
//     },
//     {
//         title: "Snow Crash",
//         author: "Neal Steve",
//         edition: 1.2,
//         ratings: [
//             { score: 5 },
//             { score: 1 }
//         ]
//     },
//     {
//         title: "Catcher in the Rye",
//         author: "Someone",
//         edition: 1,
//         ratings: [
//             { score: 2 },
//             { score: 5 },
//             { score: 3.5 },
//             { score: 4 }
//         ]
//     }
// ]