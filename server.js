require('dotenv').config();
require('./config/database');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();
const port = process.env.SERVER_PORT || 3001;

app.use(logger('dev'));
app.use(express.json());


//MIDDLEWARE----------------------------

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


//ROUTES

app.use('/api/users', require('./routes/api/users'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

  app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});