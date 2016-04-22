
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();


app.set('port', port);

app.use('/', express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Node app is running on port', app.get('port'));
});
