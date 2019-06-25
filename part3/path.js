var path = require('path');
console.log(path.normalize('.././foo/baz')); //../foo/baz
console.log(path.join('foo/', 'baz/')); //foo/baz/
console.log(path.extname('foo/bar.js')); //.js
