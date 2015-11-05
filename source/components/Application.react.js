var React = require('react'),
    Stream = require('./Stream.react'),
    collection = require('./Collection.react'),
    Application = React.createClass({
        getInitialState: function () {
            return {
                collectionTweets: {}
            };
        },
        addTweetToCollection: function (tweet) {
            var collectionTweets = this.state.collectionTweets;
            collectionTweets[tweet.id] = tweet;
            this.setState({
                collectionTweets: collectionTweets
            });
        },
        removeTweetsFromCollection: function (tweet) {
            var collectionTweets = this.state.collectionTweets;
            delete collectionTweets[tweet.id];
            this.setState({
                collectionTweets: collectionTweets
            });
        },
        removeAllTweetsFromCollection: function (tweet) {
            this.setState({
                collectionTweets: {}
            });
        },
        render: function () {
            return  <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <Stream onAddTweetToCollection={this.addTweetToCollection} />
                            </div>
                            <div className="col-md-8">
                                <Collection
                                    tweets={this.state.collectionTweets}
                                    onRemoteTweetFromCollection={this.removeTweetsFromCollection}
                                    onRemoteAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
                            </div>
                        </div>
                    </div>;
        }
    });

module.exports = Application