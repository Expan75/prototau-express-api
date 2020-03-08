// Misc Imports
const Promise = require('bluebird')
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Routes
const datapoints = require('./routes/trackdatapoint');



// Load .env file (Contains environment vars etc.)
require('dotenv').config();

// Express Setup 
const app = express();
const port = process.env.PORT || 8000;

// DB Setup via env var (should be, "name": mongoURI)
mongoose.connect(process.env.DB, {
        useNewUrlParser: true
    })
    .then(() => console.log('DB connection established...'))
    .catch(e => console.log(e));


// Override default mongoose depreciated promises
mongoose.Promise = global.Promise;


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Express Options
app.use(bodyParser.json());

// Force Url prefix for all routes
app.use('/api', datapoints);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});