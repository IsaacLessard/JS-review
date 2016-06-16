function missingNumber(array){
  var firstSum = array.reduce(function(prev, curr){
    return prev + curr;
  });
  return firstSum;
}

function difference(sum1, sum2){
  return (sum1 - sum2);
}

exports.missingNumber = missingNumber;
exports.difference = difference;
