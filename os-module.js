const os = require('os');

// returns os CPU architecuture
const os_archi = os.arch();

// the info of the user of the system the script 
// is executed.
const user = os.userInfo();

// uptime in seconds 
const uptime = os.uptime();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(), // total memory in bytes
  freeMem: os.freemem(), // free memory in bytes
}

// ------- main func exec ---------------
console.log(currentOS);