let i = 0;
function count() {
  return ++i;
}
console.log('counter被引用了');
exports.count = count;

console.log(module.exports === exports); //相同引用
