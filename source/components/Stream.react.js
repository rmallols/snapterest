var React = require('react'),
    StreamTweet = require('./Stream.react'),
    Header = require('./Header.react'),
    TweetStore = require('../Stores/TweetStore'),
    Stream = React.createClass({
        getInitialState: function () {
            return {
                tweet: TweetStore.getTweet()
            };
        },
        componentDidMount: function () {
            TweetStore.addChangeListener(this.onTweetChange);
        },
        componentWillUnmount: function () {
            TweetStore.removeChangeListener(this.onTweetChange);
        },
        onTweetChange: function () {
            this.setState({
                tweet: TweetStore.getTweet()
            });
        },
        handleNewTweet: function (tweet) {
            this.setState({
                tweet: tweet
            });
        },
        render: function () {
            var tweet = this.state.tweet;
            if(tweet) {
                return <StreamTweet tweet={tweet} onAddTweetToCollection={this.props.onAddTweetToCollection} />;
            }
            return <Header text="Waiting for public photos from Twitter..." />;
        }
    });

module.exports = Stream;