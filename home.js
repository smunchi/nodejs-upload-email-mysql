var http = require('http');
var dt = require('./dateGet');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!' + dt.myDateTime() + req.url);
}).listen(8086);
