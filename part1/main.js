var c1 = require('./counter');
var c2 = require('./counter'); // 缓存起来的导出对象被重复利用
console.log(c1.count());
console.log(c2.count());
console.log(c2.count());
