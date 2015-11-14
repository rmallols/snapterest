jest.autoMockOff();

describe('Collection utilities module', function () {

    var CollectionUtils = require('../CollectionUtils'),
        collectionTweetsMock = {
            collectionTweet7: {},
            collectionTweet8: {},
            collectionTweet9: {}
        };

    it('returns a number of tweets in collection', function getNumberOfTweetsInCollection() {

        var actualNumberOfTweetsInCollection, expectedNumberOfTweetsInCollection;

        when:
            actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
            expectedNumberOfTweetsInCollection = 3;

        then:
            expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
    });

    it('checks if collection is not empty', function isNotEmptyCollection() {

        var actualIsEmptyCollectionValue;

        when:
            actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);

        then:
            expect(actualIsEmptyCollectionValue).toBe(false);
    });
});