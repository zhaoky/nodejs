let child_process = require('child_process');
let util = require('util');

function copy(source, target, callback) {
  let cmd = util.format('cp -r %s/* %s', source, target);
  console.log(cmd);
  child_process.exec(cmd, callback);
}

copy('a', 'b', function(err) {
  console.log('完成', err);
});
