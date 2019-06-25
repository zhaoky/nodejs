console.log(process);
let child_process = require('child_process');
let child = child_process.spawn('node', ['/nice/nodejs/part5/child.js']);
console.log('parent');
child.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});
child.on('close', code => {
  console.log(`子进程退出，退出码 ${code}`);
});
setTimeout(() => {
  child.kill('SIGTERM');
}, 2000);
