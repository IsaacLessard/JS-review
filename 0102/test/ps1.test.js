var expect = require('chai').expect;
var MissingNumber = require('../missing_number');
var CharCount = require('../char_count');
var Patient = require('../patient');
var Hospital = require('../hospital');


describe('#missingNumber', function() {
  it('if we pass in 2 empty arrays return -1', function(){
    var missingNum = new MissingNumber();
    expect(missingNum.find()).to.equal(-1);
  });

  it('if we pass 1 empty return -1', function(){
    var missingNum = new MissingNumber([1,2,3]);
    expect(missingNum.find()).to.equal(-1);
  });

  it('if we pass in 2 arrays return missing number from second array', function(){
    var missingNum = new MissingNumber([1,2,3], [1,3]);
    expect(missingNum.find()).to.equal(2);
  });
});

describe('#charCount', function() {
  it('if we pass in nothing return empty object', function(){
      var cCount = new CharCount();
      expect(cCount.parse()).to.deep.equal({});
  });

  it('if we pass arrays return object with character count', function(){
    var cCount = new CharCount();
    expect(cCount.parse('ab', 'b')).to.deep.equal({a: 1, b: 2});
  });
});

describe('HospitalPatient', function() {
  describe('Patient', function() {
    it('should be initialized with first and last name', function(){
        var patient = new Patient('Phil', 'Ward');
        expect(patient.fullName()).to.equal('Phil Ward');
    });
  });

  describe('Hospital#search', function() {
    it('will return true if there is a patient that is in the Hospital',function(){
      var searchPatient = new Patient('Phil', 'Ward');
      var patients = [
        new Patient('Sarath', 'Mantrla'),
        searchPatient,
        new Patient('Phreaky', 'Phil')
      ];
      var hospital = new Hospital(patients);
      expect(hospital.philSearch(searchPatient)).to.equal(true);
    });

    it('will return false if there is a patient that is not in the Hospital',function(){
      var searchPatient = new Patient('Phil', 'Ward');
      var patients = [
        new Patient('Sarath', 'Mantrla'),
        new Patient('Phreaky', 'Phil')
      ];
      var hospital = new Hospital(patients);
      expect(hospital.search(searchPatient)).to.equal(false);
    });
  });
});
