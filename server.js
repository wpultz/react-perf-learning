var path = require('path');
var express = require('express');

var app = express();

app.get(['/', '/feed'], function(req, res) {
  res.sendFile(path.join(__dirname, 'feed.html'));
});

app.get(['/list'], function(req, res) {
  res.sendFile(path.join(__dirname, 'list.html'));
});

app.use('/bundles', express.static('bundles'))

console.log('app listening on port 8001')

app.listen(8001)
