

var http = require('http');
var server = http.createServer();

server.on('request', function (req, resp) { 
    resp.write('Welcome to Node-world'); 
    resp.end();
});

server.listen(8080, function () { 
    console.log('im waiting...');
});