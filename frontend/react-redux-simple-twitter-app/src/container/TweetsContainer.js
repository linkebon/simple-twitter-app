import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tweetActions from "../actions/TweetActions";
import Tweet from "../components/Tweet";
import SearchTweetInput from '../components/SearchTweetInput';

class TweetsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {dispatch, tweets} = this.props;
        let actions = bindActionCreators(tweetActions, dispatch);
        const tweetsToRender = tweets.tweets.map((tweet, index) => {
            const id = tweet.id;
            return (
                <div key={id}>
                    <Tweet tweet={tweet} id={id}/>
                </div>
            )
        });
        return (
            <div>
                <SearchTweetInput getTweets={actions.getTweets} renderCountInput={true} autoUpdate={{auto: false, interval: 20000}}
                                  initialText={'Search tweets..'}/>
                <br/>
                {tweetsToRender}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweetReducer
    }
};

export default connect(mapStateToProps)(TweetsContainer)
