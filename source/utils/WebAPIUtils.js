var SnapkiteStreamClient = require('snapkite-stream-client'),
    TweetActionCreators = require('../actions/TweetActionCreators');

function initializeStreamOfTweets() {
  SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
}

module.exports = {
  initializeStreamOfTweets: initializeStreamOfTweets
};