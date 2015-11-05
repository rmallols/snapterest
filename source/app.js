var React = require('react'),
    ReactDOM = require('react-dom'),
    test = require('./components/test'),
    element = React.createElement(test.buildComponent(), { origin: 'frontend'}),
    Application = require('./components/Application.react');

//ReactDOM.render(element, document.getElementById('react-application'));

ReactDOM.render(<Application />, document.getElementById('react-application'));