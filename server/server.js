// import libraries
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

// initialize app
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.get("/api/", (request, response) => {
    return response.status(200).json({message: 'hello world'});
});

module.exports = app;