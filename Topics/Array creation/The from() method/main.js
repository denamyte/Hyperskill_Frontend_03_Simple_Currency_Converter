const util = require('util');

const getArrayWithLength = string => util.inspect([Array.from(string)], { compact: true });

// console.log(getArrayWithLength('Hello JS Arrays'))