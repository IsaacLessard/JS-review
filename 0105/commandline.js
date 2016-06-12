var fs = require('fs');

function commandLine(str, fnstr) {
  var funcMap = {
    'wordCount': wordCount,
    'characterAverage': characterAverage,
    'orgChart': orgChart
  };

fs.readFile(str, 'utf-8', funcMap[fnstr]);
}

function wordCount(err, data) {
  var answer = data.toLowerCase().split('\n').join('').split(' ').reduce(function(acc, curr) {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  console.log(answer);
  return answer;
}

function characterAverage(err, data) {
  var lines = data.split('\n');
  var answer = lines.reduce(function(acc, curr){
    return acc + curr.length;
  }, 0);
  console.log('Average Number of Characters Per Line: ' + (answer/lines.length));
  return 'Average Number of Characters Per Line: ' + (answer/lines.length);
}

function orgChart(err, data){
  var lines = data.split('\n');
  var orgObj = {};
  var hold = 0;

  for(var i = 0; i < lines.length; i++){
    if(lines[i].charAt(0) === ' '){
      lines[i] = lines[i].slice(2);
      hold.push(lines[i]);
    } else {
      orgObj[lines[i]] = [];
      hold = orgObj[lines[i]];
    }
  }
  console.log(orgObj);
  return orgObj;
}

exports.wordCount = wordCount;
exports.characterAverage = characterAverage;
exports.orgChart = orgChart;
commandLine(process.argv[2], process.argv[3]);
