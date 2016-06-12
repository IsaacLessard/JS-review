var expect = require('chai').expect;
var dateParser = require('../logparser').dateParser;
var numMessagesByDate = require('../logparser').numMessagesByDate;
var numMessageTypesByDate = require('../logparser').numMessageTypesByDate;
var dates = 'W, [2014-05-10T14:48:19.094095 #85971]  WARN -- : harness out-of-the-box content\n'+
'W, [2014-05-10T14:48:19.094120 #85971]  WARN -- : evolve B2B channels\n'+
'D, [2014-05-11T14:48:19.094145 #85971] DEBUG -- : drive transparent e-tailers\n'+
'D, [2014-05-12T14:48:19.094188 #85971] DEBUG -- : e-enable impactful channels';

describe('#dateParser', function() {
  it('returns an array of parsed dates from the input string', function() {
    var result = dateParser(dates);

    expect(result).to.deep.equal(['2014-05-10', '2014-05-11', '2014-05-12']);
  });
});
describe('#numMessagesByDate', function() {
  it('should return an object containing date properties and number of messages as a value', function() {
    var result = numMessagesByDate(dates);

    expect(result).to.deep.equal({'2014-05-10': 2, '2014-05-11': 1, '2014-05-12': 1});
  });
});
describe('#numMessageTypesByDate', function(){
  it('should return an object containing date properties and types of message counts as values', function(){
    var result = numMessageTypesByDate(dates);

    expect(result).to.deep.equal({'2014-05-10': {"WARN": 2},
                                  '2014-05-11': {'DEBUG': 1},
                                  '2014-05-12': {'DEBUG': 1}});
  });
});
