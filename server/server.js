//requires
const express = require('express');
const app = express();
const library = require('./routes/library.router');

//globals
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

//uses
app.use(bodyParser.urlencoded({extended:true}));

// serve static files
app.use(express.static('server/public'));

app.use('/book', library);

// spin up the server
app.listen(PORT, () => {
    console.log('server is running on port', PORT);
});


