const express = require('express');
const app = express();

//? Settings
app.set('port', process.env.PORT || 5000);

//? Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//? Routes
const serverRoutes = require('./routes/index');
app.use('/', serverRoutes);

//? Exporting server propieties
module.exports = app;