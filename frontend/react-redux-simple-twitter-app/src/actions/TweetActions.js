import * as actionType from "./ActionType";

export const updateTweetData = (tweets) => (
    {
        type: actionType.GET_TWEET_DATA_RECEIVED,
        tweets: tweets.statuses
    }
);

export const updateTweetDataError = (err) => (
    {
        type: actionType.GET_TWEET_DATA_ERROR,
        error: err
    }
);

export const getTweets = (filter, count) => (
    {
        type: actionType.GET_TWEET_DATA,
        filter: filter,
        count: count
    }
);