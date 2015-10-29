var React = require('react'),
    ReactDOM = require('react-dom');

module.exports = {

    buildComponent: function () {
        return React.createClass({
            getInitialState: function () {
                return {
                    foo: 'bar'
                };
            },
            handleClick: function () {
                this.setState(function () {
                    return {
                        foo: 'bar updated'
                    };
                });
            },
            render: function () {
                return  <div>
                            <h1 className="header">
                                React component v2 from {this.props.origin}, {this.state.foo}
                            </h1>
                            <button onClick={this.handleClick} key="button">Toggle header</button>
                        </div>;
            }
        });
    }
};