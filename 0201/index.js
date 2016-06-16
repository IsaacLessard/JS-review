var http = require('http');
var fs = require('fs');

function fileReader(fileName){
  return fs.readFileSync(fileName, 'utf-8');
}

function handleRequest(req, res) {
  var routes = {'/'               : welcome(),
                '/first-of-pair'  : first(),
                '/second-of-pair' : second(),
                '/the-pair'       : pair()
               };
  var data = "";
  var name = req.url.split('=')[1];

  if(req.url === '/greeting?name=' + name) {
      data = 'Welcome ' + name + '!';
  } else if(routes[req.url]) {
      data = routes[req.url];
  } else {
      data = fileReader('views/error.html');
  }
  res.end(data);
}

function welcome() {
  return fileReader('views/welcome.html');
}

function first() {
  return fileReader('views/first_pair.html');
}

function second() {
  return fileReader('views/second_pair.html');
}

function pair() {
  return fileReader('views/the_pair.html');
}

var server = http.createServer(handleRequest);
server.listen(3000);
