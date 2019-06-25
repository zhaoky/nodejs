let fs = require('fs');
var rs = fs.createReadStream('/nice/nodejs/part3/big2.txt');
var ws = fs.createWriteStream('/nice/nodejs/part3/dest-big2.txt');

rs.on('data', chunk => {
  console.log(5, chunk);
  if (ws.write(chunk) === false) {
    rs.pause();
  }
});

ws.on('drain', () => {
  console.log(1);
  rs.resume();
});
