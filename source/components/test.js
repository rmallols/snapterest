var React = require('react'),
    ReactDOM = require('react-dom');

module.exports = {

    buildMarkup: function(origin) {
        var h1, p, listItemElement1, listItemElement2, listItemElement3, listOfItems, reactFragment;

        h1 = React.DOM.h1({ className: 'header', key: 'header' }, 'This is React from ' + origin);
        p = React.DOM.p({ className: 'content', key: 'content' }, 'And that\'s how it works');

        listItemElement1 = React.DOM.li({ className: 'item-1', key: 'item-1'}, 'Item 1');
        listItemElement2 = React.DOM.li({ className: 'item-2', key: 'item-2'}, 'Item 2');
        listItemElement3 = React.DOM.li({ className: 'item-3', key: 'item-3'}, 'Item 3');

        reactFragment = [listItemElement1, listItemElement2, listItemElement3];
        listOfItems = React.DOM.ul({ className: 'list-of-items', key: 'list-of-items'}, reactFragment);

        reactFragment = [h1, p, listOfItems];
        return React.createElement('section', { className: 'container' }, reactFragment);
    }
};