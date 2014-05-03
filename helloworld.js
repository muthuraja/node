var http = require('http');
http.createServer(function (request, response) {   
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Node.js has arrived.\n'); 
}).listen(8124);
   console.log('Up and running at http://127.0.0.1:1337/');
   // - See more at: http://quickandnerdy.com/installing-node-js-on-mac-osx/#sthash.IlbhkSEH.dpuf