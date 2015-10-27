var express = require('express'),
    app = express(),
    fs = require('fs'),
    test = require('./components/test'),
    ReactDOMServer = require('react-dom/server'),
    server;

app.use(express.static(__dirname + '/../build'));

app.get('/f', function (req, res) {
    res.send(fs.readFileSync(__dirname + '/../build/index.html').toString());
});

app.get('/b', function (req, res) {
    res.send(ReactDOMServer.renderToStaticMarkup(test.buildMarkup('backend')));
});

server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Example app listening at port %s', port);
});