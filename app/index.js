if (process.env.NODE_ENV === 'development') {
   require('dotenv').config();
}

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const config = require('../config')

const app = express()

app.engine('.jade', expjade({
  defaultLayout: 'layout',
  extname: '.jade',
  layoutsDir: path.join(__dirname),
  partialsDir: path.join(__dirname)
}))

// view engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app
