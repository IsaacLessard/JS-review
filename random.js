function random(min, max){
  return Math.ceil(Math.random() * (max - (min + 1)) + min);
}

function randomNums(min, max, count){
  var result = [];
  for(var i = 0; i < count; i++){
    result.push(random(min, max));
  }
  return result;
}

// function onlyOdds(nums){
//   return odds = nums.filter(nums%2 != 0);
// }

function onlyOdds(nums){
  return nums.filter(function(num){
    return num % 2 === 1;
  });
}

function squareOddsCubeEvens(nums){
  return nums.map(function result(num){
    if(num % 2 === 0){
      return Math.pow(num, 3)
    } else {
      return Math.pow(num, 2)
    }
  });
}

function sum(nums){
  return nums.reduce(function(preValue, currValue){
    return preValue + currValue;
  });
}

//function cube(){}
//function square(){}
//function fourth(){}

function multiMap(nums, func){
  return nums.map(func);
}

var cubes = multiMap([1,2,3], function(num){
  return Math.pow(num,3);
});

var squares = multiMap([1,2,3], function(num){
  return Math.pow(num,2);
});

// module.exports = {
//   random: random,
//   sum: sum
// };

// refactored export from above
exports.random = random;
exports.sum = sum;
exports.randomNums = randomNums;
exports.onlyOdds = onlyOdds;
exports.squareOddsCubeEvens = squareOddsCubeEvens;
