var React = require('react'),
    Header = require('./Header.react'),
    Button = require('./Button.react'),
    CollectionRenameForm = require('./CollectionRenameForm.react'),
    CollectionExportForm = require('./CollectionExportForm.react'),
    CollectionControls = React.createClass({

      getInitialState: function () {
        return {
          name: 'new',
          isEditingName: false
        };
      },

      getHeaderText: function () {
        var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection,
            text = (numberOfTweetsInCollection === 1) ?
              numberOfTweetsInCollection + ' tweet in your' :
              numberOfTweetsInCollection + ' tweets in your';
        return  <span>{text} <strong>{this.state.name}</strong> collection</span>;
      },

      toggleEditCollectionName: function () {
        this.setState({
          isEditingName: !this.state.isEditingName
        });
      },

      setCollectionName: function (name) {
        this.setState({
          name: name,
          isEditingName: false
        });
      },

      render: function () {
        if (this.state.isEditingName) {
          return  <CollectionRenameForm
                    name={this.state.name}
                    onChangeCollectionName={this.setCollectionName}
                    onCancelCollectionNameChange={this.toggleEditCollectionName} />;
        }

        return <div>
                <Header text={this.getHeaderText()} />
                <Button label="Rename collection" handleClick={this.toggleEditCollectionName} />
                <Button label="Empty collection" handleClick={this.props.onRemoveAllTweetsFromCollection} />
                <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
              </div>;
      }
    });

module.exports = CollectionControls;
