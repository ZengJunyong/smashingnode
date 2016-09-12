
require('http').createServer(function (req, res) {
  console.log(req.headers);
  res.writeHead(200);
  res.end('Hello World');
}).listen(3000);
