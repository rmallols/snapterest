var React = require('react'),
    SnapkiteStreamClient = require('snapkite-stream-client'),
    StreamTweet = require('./Stream.react'),
    Header = require('./Header.react'),
    Stream = React.createClass({
        getInitialState: function () {
            return {
                tweet: null
            };
        },
        componentDidMount: function () {
            SnapkiteStreamClient.initialiseStream(this.handleNewTweet);
        },
        componentWillUnmount: function () {
            SnapkiteStreamClient.destroyStream();
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