//异步递归遍历 打印文件夹下所有文件名 深度优先
let fs = require('fs');
let path = require('path');
function travel(dir, callback, finish) {
  fs.readdir(dir, function(err, files) {
    (function next(i) {
      if (i < files.length) {
        var pathname = path.join(dir, files[i]);

        fs.stat(pathname, function(err, stats) {
          if (stats.isDirectory()) {
            travel(pathname, callback, function() {
              next(i + 1);
            });
          } else {
            callback(pathname, function() {
              next(i + 1);
            });
          }
        });
      } else {
        finish && finish();
      }
    })(0);
  });
}
travel(
  '/nice/nodejs',
  (pathName, cb) => {
    console.log(pathName);
    cb();
  },
  () => {
    console.log('完成了');
  }
);
