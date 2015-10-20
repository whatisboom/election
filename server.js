var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8888;

var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.use(function(request, response, next) {
    console.log('%s %s %s', request.method, request.url, request.path);
    next();
});

app.use(express.static('.'))

app.use('*', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);