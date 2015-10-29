var React = require('react'),
    ReactDOM = require('react-dom'),
    test = require('./components/test'),
    element = React.createElement(test.buildComponent(), { origin: 'frontend'});

//ReactDOM.render(test.buildMarkup('frontend'), document.getElementById('react-application'));
ReactDOM.render(element, document.getElementById('react-application'));