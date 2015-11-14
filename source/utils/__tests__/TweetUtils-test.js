jest.dontMock('../TweetUtils');

describe('Tweet utilities module', function () {

    it('returns an array of tweet ids', function () {

        var TweetUtils, tweetMock, expectedListOfTweetIds, actualListOfTweetIds;

        given:
            TweetUtils = require('../TweetUtils'),
            tweetMock = { tweet1: {}, tweet2: {}, tweet3: {}};
            expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3'];

        when:
            actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetMock);

        then:
            expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
    });
});