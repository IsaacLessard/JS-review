var random = require('./random');
var x = random.random(3, 8);
console.log('x: ', x);
var nums = random.randomNums(3, 8, 10);
console.log('nums: ', nums)
// var odds = random.onlyOdds(nums);
// console.log('odds: ', odds);
var odds = random.onlyOdds(nums);
console.log('odds: ', odds);

var sOcE = random.squareOddsCubeEvens(nums)
console.log('square Odds & Cube Evens: ', sOcE);

var sum = random.sum(nums);
console.log('sum: ', sum);

var sum = random.sum(nums);
console.log('sum: ', sum);
