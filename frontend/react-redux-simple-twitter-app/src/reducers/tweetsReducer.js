import * as actionType from '../actions/ActionType';

const initialState = {
    tweets: [],
    tweetsAutoUpdating: []
};

const tweetsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionType.GET_TWEET_DATA_RECEIVED:
            return Object.assign({}, state, {
                tweets: action.tweets
            });
        case actionType.GET_TWEET_DATA_ERROR:
            return Object.assign({}, state);

        case actionType.GET_TWEET_DATA_AUTOUPDATING_RECEIVED:
            return Object.assign({}, state, {
                tweetsAutoUpdating: action.tweets
            });
        case actionType.GET_TWEET_DATA_AUTOUPDATING_ERROR:
            return Object.assign({}, state);
        default:
            return state;
    }
};

export default tweetsReducer;