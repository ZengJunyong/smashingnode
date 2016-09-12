//https://github.com/senchalabs/connect#readme
var connect = require('connect');
var http = require('http');

var app = connect();

// Mount middleware
app.use('/foo', function fooMiddleware(req, res, next) {
    // req.url starts with "/foo"
    console.log('/foo');
    next();
});
app.use('/bar', function barMiddleware(req, res, next) {
    // req.url starts with "/bar"
    console.log('/bar');
    next();
});

// respond to all requests
app.use(function(req, res){
    console.log(req.headers);
    res.end('Hello from Connect!\n');
});

//create node.js http server and listen on port
http.createServer(app).listen(3000);