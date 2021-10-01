const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf-8');
  // res.end(text);

  // using stream to send data chunk by chunk
  const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });

  fileStream.on('error', (err) => {
    res.send(err);
  })
})

server.listen(5000, () => console.log('Listening at port 5000...'));