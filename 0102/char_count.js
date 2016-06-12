function CharCount() {}

CharCount.prototype.parse = function(c1, c2) {
  if(c1 === undefined ||
     c2 === undefined ||
     c1.length === 0  ||
     c2.length === 0) {
     return {};
  }

  var h = {}

  c1.split('').forEach(function(c){
    if(h[c]) {
      h[c] += 1;
    } else {
      h[c] = 1;
    }
  });

  c2.split('').forEach(function(c){
    if(h[c]) {
      h[c] += 1;
    } else {
      h[c] = 1;
    }
  });

  return h;

};

module.exports = CharCount;
