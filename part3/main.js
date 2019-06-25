//小文件拷贝
let fs = require('fs');
let path = require('path');
function copy(src, dest) {
  var bin = fs.readFileSync(src);
  console.log(bin);
  fs.writeFileSync(dest, bin);
}
function main(argv) {
  copy(argv[0], argv[1]);
}

// main(process.argv.slice(2));

copy(__dirname + '/1.txt', __dirname + '/2.txt');
