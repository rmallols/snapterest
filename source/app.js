var ReactDOM = require('react-dom'),
    test = require('./components/test');

ReactDOM.render(test.buildMarkup('frontend'), document.getElementById('react-application'));
