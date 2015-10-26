var React = require('react'),
    ReactDOM = require('react-dom');

var h1 = React.DOM.h1({ className: 'header', key: 'header' }, 'This is React');
var p = React.DOM.p({ className: 'content', key: 'content' }, 'And that\'s how it works');

var listItemElement1 = React.DOM.li({ className: 'item-1', key: 'item-1'}, 'Item 1');
var listItemElement2 = React.DOM.li({ className: 'item-2', key: 'item-2'}, 'Item 2');
var listItemElement3 = React.DOM.li({ className: 'item-3', key: 'item-3'}, 'Item 3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];
var listOfItems = React.DOM.ul({ className: 'list-of-items', key: 'list-of-items'}, reactFragment);

var reactFragment = [h1, p, listOfItems];
var section = React.createElement('section', { className: 'container' }, reactFragment);

ReactDOM.render(section, document.getElementById('react-application'));