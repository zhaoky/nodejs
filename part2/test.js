var c1 = require('./../part1/counter'); //1.相对路径
var c2 = require('/nice/nodejs/part1/counter'); //2.绝对路径
var c3 = require('part1/counter'); //3.第三种，解析优先级：1.内置，2,node_modules(先本地再全局)，3.NODE_PATH环境变量 export NODE_PATH=/nice/nodejs
console.log(c3.count());
