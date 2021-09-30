const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome here!');
  }
  else if (req.url === '/about') {
    console.log('A request has been made.');
    
    /*
     * By wrapping the nested loop in Promise, its 
     * execution won't BLOCK the main thread, which will be
     * offloaded to the kernel, will get executed using a thread from
     * from the Worker Pool, in that way the work gets done fast.
     * Before the Promise implementation, it was slow and each client has
     * to wait for their turns. 
     */
    const p = new Promise((resolve, reject) => {
    let a = 1;
    // blocking code 
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 1000; j++) {
        a += i;
      }
    }
    resolve(a);
    })

    // when the promise is resolved
    p.then(val => res.end(`Result: ${val}`));
  }
  else {
    res.end('<h1>No page found</h1>');
  }
})

server.listen(5000);