function MissingNumber(arr1, arr2) {
  this.arr1 = arr1 || [];
  this.arr2 = arr2 || [];
}

MissingNumber.prototype.find = function() {
  if(this.arr1.length === 0 || this.arr2.length === 0)  return -1;

  var numHash = {};
  this.arr2.forEach(function(num){
    numHash[num] = num;
  });

  for(var i = 0; i < this.arr1.length - 1; i++) {
    if(numHash[this.arr1[i]] === undefined) return this.arr1[i];
  }

  return -1;
};

module.exports = MissingNumber;
