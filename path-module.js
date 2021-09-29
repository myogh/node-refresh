const path = require('path');

const filePath = path.join('content', 'subfolder', 'index.html');

// dirname will be different in various systems (for example when you deploy to heroku)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'index.html');

// ---------- main func --------------

console.log(absolute);

