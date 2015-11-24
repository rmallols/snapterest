var React = require('react'),
    Header = require('./Header.react'),
    Button = require('./Button.react'),
    CollectionActionCreators = require('../actions/CollectionActionCreators'),
    CollectionStore = require('../stores/CollectionStore'),
    inputStyle = {
      marginRight: '5px'
    },
    CollectionRenameForm = React.createClass({

      getInitialState: function() {
        return {
          inputValue: CollectionStore.getCollectionName()
        };
      },

      setInputValue: function (inputValue) {
        this.setState({
          inputValue: inputValue
        });
      },

      handleInputValueChange: function (event) {
        var inputValue = event.target.value;
        this.setInputValue(inputValue);
      },

      handleFormSubmit: function (event) {
        var collectionName;
        event.preventDefault();
        collectionName = this.state.inputValue;
        CollectionActionCreators.setCollectionName(collectionName);
        this.props.onCancelCollectionNameChange();
      },

      handleFormCancel: function (event) {
        var collectionName;
        event.preventDefault();
        collectionName = CollectionStore.getCollectionName();
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
      },

      componentDidMount: function () {
        this.refs.collectionName.focus();
      },

      render: function () {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <Header text="Collection name:" />
              <div className="form-group">
                <input
                    className="form-control"
                    style={inputStyle}
                    onChange={this.handleInputValueChange}
                    value={this.state.inputValue}
                    ref="collectionName" />
              </div>
              <Button label="Change" handleClick={this.handleFormSubmit} />
              <Button label="Cancel" handleClick={this.handleFormCancel} />
            </form>
        );
      }
    });

module.exports = CollectionRenameForm;