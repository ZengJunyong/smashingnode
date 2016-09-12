
/**
 * Module requirements.
 */
var path = require('path');
var express = require('express')
  //, search = require('./search')

/**
 * Create app.
 */

var app = express();

/**
 * Configuration
 */
// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

console.log(path.join(__dirname, 'views')); 
