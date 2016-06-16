var expect = require('chai').expect;
var missingNumber = require('../missing_number').missingNumber;
var difference = require('../missing_number').difference;

describe('#missingNumber', function(){
  it('returns sum of array', function(){
    var array = [1, 2, 3, 4, 5];
    var result = missingNumber(array);

    expect(result).to.equal(15);
  });
  it('returns two separate sums of two arrays', function(){
    var array1 = [1, 2, 3, 4, 5];
    var array2 = [1, 0, 3, 4, 5];
    var result = missingNumber(array1, array2);

    expect(result).to.equal(15,13);
  });
  it('returns difference between two separate sums of two arrays', function(){
    var sum1 = 15;
    var sum2 = 13;
    var result = difference(sum1, sum2);

    expect(result).to.equal(2);
  });
});
