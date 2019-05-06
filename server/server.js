// import libraries
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// local imports
const RecipeRoute = require('./routes/recipes');

// DB connection setup
require('dotenv').config();
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;
const URI = `mongodb://${DBUSER}:${DBPASSWORD}@ds151076.mlab.com:51076/recipedb`;
mongoose.connect(URI, {useNewUrlParser: true});
const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connectionERROR:'));
conn.once('open', () => {
    console.log("connected to database");
});

// set up morgon for log requests and body parser for requests
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", RecipeRoute);

module.exports = app;