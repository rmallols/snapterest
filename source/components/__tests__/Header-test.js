jest.dontMock('../Header.react');

var React, ReactDOM, TestUtils, Header;

beforeEach(function () {
    React = require('react');
    ReactDOM = require('react-dom');
    TestUtils = require('react-addons-test-utils');
    Header = require('../Header.react');
});

describe('Header component', function () {

    it('renders provided header text', function () {

        var header, actualHeaderText, defaultHeader, actualDefaultHeaderText;

        when:
            header = TestUtils.renderIntoDocument(<Header text="Testing..." />);
            actualHeaderText = ReactDOM.findDOMNode(header).textContent;

        then:
            expect(actualHeaderText).toBe('Testing...');

        when:
            defaultHeader = TestUtils.renderIntoDocument(<Header />);
            actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;

        then:
            expect(actualDefaultHeaderText).toBe('Default header');
    });
});