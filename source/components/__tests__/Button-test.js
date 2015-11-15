jest.dontMock('../Button.react');

var React, TestUtils, Button, handleClick;

beforeEach(function () {
  React = require('react');
  TestUtils = require('react-addons-test-utils');
  Button = require('../Button.react');
  handleClick = jest.genMockFunction();
});

describe('Button component', function () {

  it('calls handler function on click', function () {

    var button, buttonInstance, numberOfCallsMadeIntoMockFunction;

    when:
      button = TestUtils.renderIntoDocument(<Button handleClick={handleClick} />);
      buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

    and:
      TestUtils.Simulate.click(buttonInstance);

    then:
      expect(handleClick).toBeCalled();

    when:
      numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

    then:
      expect(numberOfCallsMadeIntoMockFunction).toBe(1);
  });
});