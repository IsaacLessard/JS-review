function Patient(first, last) {
  this.firstName = first;
  this.lastName  = last;
}

Patient.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

Patient.prototype.equals = function(p2) {
  return this.fullName() == p2.fullName();
};

module.exports = Patient;
