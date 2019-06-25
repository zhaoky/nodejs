let fs = require('fs');
var rs = fs.createReadStream('/nice/nodejs/part3/1.txt');

rs.on('data', chunk => {
  rs.pause();
  console.log(1);
  handle(chunk, () => {
    rs.resume();
  });
});
function handle(chunk, fn) {
  console.log(66, chunk);
  fn();
}
rs.on('end', () => {
  console.log('读完了');
});
