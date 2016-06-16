var expect = require('chai').expect;
var charCount = require('../char_count').charCount;
var letters = require('../char_count').letters;
var objConverter = require('../char_count').objConverter;

describe('#charCount', function(){
  it('returns an array of string characters', function(){
    var string = 'abc';
    var result = letters(string);

    expect(result).to.equal['a','b','c'];
  });
  it('returns an object made of keys from unique string characters', function(){
    var array = ['a','b','c'];
    var result = objConverter(array);

    expect(result).to.equal({a:1,b:1,c:1});
  });
});
