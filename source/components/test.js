var React = require('react'),
    ReactDOM = require('react-dom');

module.exports = {

    buildMarkup: function(origin) {
        return  <div>
                    <h1 className="header" key="header">This is react from {origin}</h1>
                    <p className="content" key="content">And that's how it works</p>
                    <ul className="list-of-items">
                        <li className="item-1">Item 1</li>
                        <li className="item-2">Item 2</li>
                        <li className="item-3">Item 3</li>
                    </ul>
                </div>;
    },

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