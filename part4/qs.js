let querystring = require('querystring');
console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge'));
// { foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }
