var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/authenticate', function (req, res) {
  if (!req.body || !req.body.username || !req.body.password){
    res.status(401);
    return res.send()
  }
  
  var username = req.body.username;
  var password = req.body.password;

  if (username === "test" && password === "test"){
    var tokens = {
      authenticated: true,
      token: "a7063c2f3d29c3d5cda26edd36e8e763"
    };
    res.set('Content-Type', 'application/json');
    return res.send(JSON.stringify(tokens));
  }

  res.status(401);
  return res.send();
});




var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});