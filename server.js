// TIL: here at the low-level, I have to read and serve the static
// files one by one based on the routes. 
const http = require('http');
const fs = require('fs');

const htmlFile = fs.readFileSync('./public/index.html');
const cssFile = fs.readFileSync('./public/style.css');

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case '/':
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(htmlFile);
      res.end();
      break;

    case '/style.css':
      res.writeHead(200, { 'content-type': 'text/css' });
      res.write(cssFile);
      res.end();
      break;

    default:
      break;
  }
})

server.listen(5000, () => {
  console.log("Listening at port 5000..."); 
})