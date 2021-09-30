const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome here!');
  }
  else if(req.url === '/about') {
    res.end('You are in about page.');
  }
  else {
    res.end('<h1>No page found</h1>');
  }
})

server.listen(5000);