import * as actionType from '../actions/ActionType';

const initialState = {
    tweets: [],
    tweetsAutoUpdating: []
};

const tweetsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionType.GET_TWEET_DATA_RECEIVED:
            newState = Object.create(state);
            newState.tweets = action.tweets;
            newState.tweetsAutoUpdating = state.tweetsAutoUpdating;
            return newState;
        case actionType.GET_TWEET_DATA_ERROR:
            newState = Object.create(state);
            newState.tweets = [];
            newState.tweetsAutoUpdating = [];
            return newState;
        case actionType.GET_TWEET_DATA_AUTOUPDATING_RECEIVED:
            newState = Object.create(state);
            newState.tweetsAutoUpdating = action.tweets;
            newState.tweets = state.tweets;
            return newState;
        case actionType.GET_TWEET_DATA_AUTOUPDATING_ERROR:
            newState = Object.create(state);
            newState.tweetsAutoUpdating = [];
            newState.tweets = [];
            return newState;
        default:
            return state;
    }
};

export default tweetsReducer;