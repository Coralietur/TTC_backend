<<<<<<< HEAD
var express = require("express");
var path = require("path");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

require("./models/connection");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
=======
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
>>>>>>> d16418e4561eec5b7f181a707b354f27902ed4e6

var app = express();
const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
