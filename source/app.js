var React = require('react'),
    ReactDOM = require('react-dom'),
    test = require('./components/test'),
    element = React.createElement(test.buildComponent(), { origin: 'frontend'});

ReactDOM.render(element, document.getElementById('react-application'));