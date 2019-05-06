// import libraries
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// local imports
const RecipeRoute = require('./routes/recipes');

// initialize app
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", RecipeRoute);

module.exports = app;