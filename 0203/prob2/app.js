const express = require('express');
      app = express();

app.use(express.static('.'));

app.get('/users', function (req, res) {
  res.json(users.map(function(user){ return {id: user.id} }));
});

app.get('/users/:id', function (req, res) {
  var rand = Math.floor(Math.random() * 500) + 700;
  setTimeout(function () {
    var user = findUser(req.params.id);
    res.json(user);
  }, rand);
});

app.listen(3000);

var users = [
  {id: 1, likes: 1},
  {id: 2, likes: 14},
  {id: 3, likes: 5},
  {id: 4, likes: 0},
  {id: 5, likes: 33},
];

var findUser = function (id) {
  var user;
  for (var i = 0; i < users.length; i++) {
    if(users[i].id === parseInt(id, 10)) {
      user = users[i];
    }
  }
  return user;
};
