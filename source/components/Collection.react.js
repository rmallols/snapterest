var React = Require('react'),
    ReactDOMServer = require('react-dom/server'),
    CollectionControls = require('./CollectionControls.react'),
    TweetList = require('./TweetList.react'),
    Header = require('./Header.react'),
    Collection = React.createClass({
        createHtmlMarkupStringOfTweetList: function () {
            var htmlString = ReactDOMServer.renderToStaticMarkup(<TweetList tweets={this.props.tweets} />),
                htmlMarkup = {
                    html: htmlString
                };
            return JSON.stringify(htmlMarkup);
        },
        getListOfTweetIds: function () {
            return Object.keys(this.props.tweets);
        },
        getNumberOfTweetsInCollection: function () {
            return this.getListOfTweetIds().length;
        },
        render: function () {
            var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection(),
                htmlMarkup;
            if(numberOfTweetsInCollection > 0) {
                htmlMarkup = this.createHtmlMarkupStringOfTweetList();
                return  <div>
                            <CollectionControls
                                numberOfTweetsInCollection={numberOfTweetsInCollection}
                                htmlMarkup={htmlMarkup}
                                onRemoveAllTweetsFromCollection={this.props.onRemoveAllTweetsFromCollection}/>
                            <TweetList
                                tweets={this.props.tweets}
                                onRemoveTweetFromCollection={this.props.onRemoveTweetFromCollection}/>
                        </div>;
            }
            return <Header text="Your collection is empty" />;
        }
    });

module.exports = Collection;