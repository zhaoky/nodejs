var exec = require('child_process').exec;

// 成功的例子
exec('ls -al', function(error, stdout, stderr) {
  if (error) {
    console.error('error1: ' + error);
    return;
  }
  console.log('stdout1: ' + stdout);
  console.log('stderr1: ' + stderr);
});

// 失败的例子
exec('ls hello.txt', function(error, stdout, stderr) {
  if (error) {
    console.error('error2: ' + error);
    return;
  }
  console.log('stdout2: ' + stdout);
  console.log('stderr2: ' + stderr);
});
