function charCount(string){
  // var letters = string.split('');

}

var letters = function (string){
  return string.split('');
};

function objConverter(letters){
  newObj = {};
  for (var i = 0; i < letters.length; i++) {
    newObj.key = letters[i];


  }
}

// objConverter passes in our letters arrays
// instantiate a new object
// loop through letters and make each index a key in newObj
// if already exists, += value by 1
// otherwise, create key and

exports.charCount = charCount;
exports.letters = letters;
exports.objConverter = objConverter;
