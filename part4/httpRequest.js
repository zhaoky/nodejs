let options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};
console.log(1);
let http = require('http');

let request = http.request(options, res => {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
request.write('hellooo');
request.end();

//发出了一个请求
