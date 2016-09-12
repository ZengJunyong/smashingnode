
/**
 * Module requirements.
 */
var path = require('path');
var express = require('express')
, search = require('./search')

/**
 * Create app.
 */

var app = express()

/**
 * Configuration
 */

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/**
 * Routes
 */

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/search', function (req, res, next) {
  search(req.query.q, function (err, tweets) {
    if (err) return next(err);
    res.render('search', { results: tweets, search: req.query.q });
  });
});

/**
 * Listen
 */

app.listen(3000);
