import * as actionType from "./ActionType";


// Get tweet data actions
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

// GET_TWEET_DATA_AUTOUPDATING
export const getTweetsAutoUpdating = (filter, count) => (
    {
        type: actionType.GET_TWEET_DATA_AUTOUPDATING,
        filter: filter,
        count: count
    }
);
export const updateTweetDataAutoUpdating = (tweets) => (
    {
        type: actionType.GET_TWEET_DATA_AUTOUPDATING_RECEIVED,
        tweets: tweets.statuses
    }
);

export const updateTweetDataAutoUpdatingError = (err) => (
    {
        type: actionType.GET_TWEET_DATA_AUTOUPDATING_ERROR,
        error: err
    }
);