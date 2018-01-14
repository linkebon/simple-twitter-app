import {combineReducers} from 'redux';
import tweetReducer from './tweetsReducer';

export default combineReducers({
    tweetReducer: tweetReducer
});