//大文件拷贝
var fs = require('fs');
function copy(src, dest) {
  var rs = fs.createReadStream(src);
  console.log(rs);
  rs.pipe(fs.createWriteStream(dest));
}
function main(argv) {
  copy(argv[0], argv[1]);
}

// main(process.argv.slice(2));
main(['/nice/nodejs/part3/1.txt', '/nice/nodejs/part3/dest-big.txt']);
