//同步遍历 打印文件夹下所有文件名 深度优先
let fs = require('fs');
let path = require('path');
function traverseSync(dir, cb) {
  fs.readdirSync(dir).forEach(p => {
    let pathName = path.join(dir, p);
    if (fs.statSync(pathName).isDirectory()) {
      traverseSync(pathName, cb);
    } else {
      cb(pathName);
    }
  });
}
traverseSync('/nice/nodejs', pathName => {
  console.log(pathName);
});
