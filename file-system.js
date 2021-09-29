const fs = require('fs');

// ---------- sync approach ------------------
// const first = fs.readFileSync('./content/first.txt', 'utf-8');
// const second = fs.readFileSync('./content/second.txt', 'utf-8');

// fs.writeFileSync(
//   './content/result-sync.txt', 
//   `The result: ${first}, ${second}`);

// ----------- async approach ---------------------
fs.readFile('./content/first.txt', 'utf-8', (err, result) => {
  if(err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile('./content/second.txt', 'utf-8', (err, result) => {
    if(err) {
      console.log(err);
      return;
    }
    const second = result;
    fs.writeFile(
      './content/result-async.txt', 
      `${first}, ${second}`, 
      (err, result) => {
        if(err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    )
  })
})