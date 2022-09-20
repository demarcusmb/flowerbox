// Dependencies
const express = require('express')
const app = express()
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = process.env.PORT;

// Database Configuration
mongoose.connect(process.env.DATABASE_URL);

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static("public"))

// Routes / Controller
const flowerController = require('./controllers/flowerbox.js');
app.use('/flower', flowerController)

// Listener
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});