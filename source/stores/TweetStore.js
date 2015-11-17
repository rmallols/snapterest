var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    tweet = null,
    TweetStore;

function setTweet(receivedTweet) {
  tweet = receivedTweet;
}

function emitChange() {
  TweetStore.emit('change');
}

TweetStore = assign({}, EventEmitter.prototype, {

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

  getTweet: function () {
    return tweet;
  }
});

function handleAction(action) {
  if (action.type === 'receive_tweet') {
    setTweet(action.tweet);
    emitChange();
  }
}

TweetStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = TweetStore;