var React = require('react'),
    ReactDOM = require('react-dom'),
    test = require('./components/test');

var displayJSX = false;

var markup = displayJSX ? <ul><li cassName="list-of-items">123</li></ul> : test.buildMarkup('frontend');

ReactDOM.render(markup, document.getElementById('react-application'));


