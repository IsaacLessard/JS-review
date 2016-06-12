function Hospital(patients) {
  this.patients = patients;
}

Hospital.prototype.search = function(searchPatient) {
  for(var i = 0; i < this.patients.length - 1; i++) {
    if(this.patients[i].fullName() === searchPatient.fullName())
      return true;
  }

  return false;
};

Hospital.prototype.philSearch = function(searchPatient) {
  for(var i = 0; i < this.patients.length - 1; i++) {
    if(this.patients[i].equals(searchPatient))
      return true;
  }

  return false;
};

module.exports = Hospital;
