var React = require('react'),
    Tweet = require('./Tweet.react.js'),
    CollectionActionCreators = require('../actions/CollectionActionCreators'),
    listStyle = {
        padding: '0'
    },
    listItemStyle = {
        display: 'inline-block',
        listStyle: 'none'
    },
    TweetList = React.createClass({

        getListOfTweetIds: function () {
            return Object.keys(this.props.tweets);
        },

        removeTweetFromCollection: function (tweet) {
            CollectionActionCreators.removeTweetFromCollection(tweet.id);
        },

        getTweetElement: function (tweetId) {
            var tweet = this.props.tweets[tweetId],
                handleRemoveTweetFromCollection = this.removeTweetFromCollection,
                tweetElement;
            if (handleRemoveTweetFromCollection) {
                tweetElement = (<Tweet tweet={tweet} onImageClick={handleRemoveTweetFromCollection} />);
            } else {
                tweetElement = <Tweet tweet={tweet} />;
            }
            return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
        },

        render: function () {
            var tweetElements = this.getListOfTweetIds().map(this.getTweetElement);
            return (<ul style={listStyle}>{tweetElements}</ul>);
        }
    });
module.exports = TweetList;