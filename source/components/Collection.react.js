var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    CollectionControls = require('./CollectionControls.react'),
    TweetList = require('./TweetList.react'),
    Header = require('./Header.react'),
    CollectionUtils = require('../utils/CollectionUtils'),
    CollectionStore = require('../stores/CollectionStore'),
    Collection = React.createClass({

      getInitialState: function () {
        return {
          collectionTweets: CollectionStore.getCollectionTweets()
        };
      },

      componentDidMount: function () {
        CollectionStore.addChangeListener(this.onCollectionChange);
      },

      componentWillUnmount: function () {
        CollectionStore.removeChangeListener(this.onCollectionChange);
      },

      onCollectionChange: function () {
        this.setState({
          collectionTweets: CollectionStore.getCollectionTweets()
        });
      },

      createHtmlMarkupStringOfTweetList: function () {
        var htmlString = ReactDOMServer.renderToStaticMarkup(
          <TweetList tweets={this.state.collectionTweets} />
        );

        var htmlMarkup = {
          html: htmlString
        };

        return JSON.stringify(htmlMarkup);
      },

      render: function () {
        var collectionTweets = this.state.collectionTweets,
            numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets),
            htmlMarkup;

        if (numberOfTweetsInCollection > 0) {
          htmlMarkup = this.createHtmlMarkupStringOfTweetList();

          return (
            <div>
              <CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection}  htmlMarkup={htmlMarkup} />
              <TweetList tweets={collectionTweets} />
            </div>
          );
        }

        return <Header text="Your collection is empty" />;
      }
    });

module.exports = Collection;