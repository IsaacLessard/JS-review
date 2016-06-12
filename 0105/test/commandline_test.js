var expect = require('chai').expect;
var wordCount = require('../commandline').wordCount;
var characterAverage = require('../commandline').characterAverage;
var orgChart = require('../commandline').orgChart;

describe('#wordCount', function() {
  it('should count how many times each word shows up in a given string', function() {
    expect(wordCount(undefined, 'a man A plan a cat a canal panama')).to.deep.equal({a: 4, man: 1, plan: 1, cat: 1, canal:1, panama: 1});
  });
});

describe('#characterAverage', function() {
  it('should return the average number of characters per line that does not including newline', function() {
    expect(characterAverage(undefined, 'a man A plan a cat a canal panama')).to.equal('Average Number of Characters Per Line: 33');
  });
  it('should return an adjusted average', function() {
    expect(characterAverage(undefined, 'a man A plan a\n'+ ' cat a canal panama')).to.equal('Average Number of Characters Per Line: 16.5');
  });
});

describe('#orgChart', function() {
  it('should return an object reflecting hierarchy based off string input', function() {
    expect(orgChart(undefined, 'Boris Jones\n'+'  Lucy Smith\n'+'Suzy Q\n'+'  Bob Bobson\n'+'  Simon & Garfunkle')).to.deep.equal({'Boris Jones': ['Lucy Smith'], 'Suzy Q': ['Bob Bobson', 'Simon & Garfunkle']});
  });
});
