var React = require('react'),
    headerStyle = {
        fontSize: '16px',
        fontWeight: '300',
        display: 'inline-block',
        margin: '20px 10px'
    },
    Header = React.createClass({
        getDefaultProps: function () {
            return {
                text: 'Default header'
            };
        },
        render: function () {
            return <h2 styles="{headerStyle}">{this.props.text}</h2>;
        }
    });

module.exports = Header;