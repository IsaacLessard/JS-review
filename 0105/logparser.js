var fs = require('fs');

function dateParser(string) {
  var strArr = string.split('\n');
  var testObj = {};

  return strArr.map(function(date) {
    return date.split("[")[1].split("T")[0];
  }).filter(function(isUnique) {
    if (testObj[isUnique]) {
      return false;
    } else {
      testObj[isUnique] = true;
      return true;
    }
  });
}

function numMessagesByDate(string){
  var strArr = string.split('\n');

  return strArr.map(function(date){
    return date.split('[')[1].split('T')[0];
  }).reduce(function(acc, curr){
    if(acc[curr]){
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

function numMessageTypesByDate(str) {
  var strArr = str.split('\n');
  var retObj = {};
  var typeMap = {
    'W': 'WARN',
    'D': 'DEBUG',
    'I': 'INFO'
  };
  strArr.forEach(function(message) {
    var date = message.split("[")[1].split("T")[0];
    var type = typeMap[message.charAt(0)];
    if (!retObj[date]) retObj[date] = {};
    if (retObj[date][type]) {
      retObj[date][type]++;
    } else {
      retObj[date][type] = 1;
    }
  });
  return retObj;
}

function dates() {
  fs.readFile('./data/production.log', function(err, data) {
    console.log(numMessageTypesByDate(data.toString()));
  });
}

exports.dateParser = dateParser;
exports.dates = dates;
exports.numMessagesByDate = numMessagesByDate;
exports.numMessageTypesByDate = numMessageTypesByDate;

dates();
