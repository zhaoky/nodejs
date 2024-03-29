let child_process = require('child_process');
let child = child_process.spawn('node', ['test.js']);

child.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});

child.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

child.on('close', function(code) {
  console.log('child process exited with code ' + code);
});
