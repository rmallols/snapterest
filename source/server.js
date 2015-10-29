var express = require('express'),
    app = express(),
    fs = require('fs'),
    test,
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    server;

require("babel/register");
test = require('./components/test');

app.use(express.static(__dirname + '/../build'));

app.get('/f', function (req, res) {
    res.send(fs.readFileSync(__dirname + '/../build/index.html').toString());
});

app.get('/b', function (req, res) {
    //res.send(ReactDOMServer.renderToStaticMarkup(test.buildMarkup('backend')));
    var element = React.createElement(test.buildComponent('backend'), { origin: 'backend'});
    res.send(ReactDOMServer.renderToStaticMarkup(element));
});

server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Example app listening at port %s', port);
});