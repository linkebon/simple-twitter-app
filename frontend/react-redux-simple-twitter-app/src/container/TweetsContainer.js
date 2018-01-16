import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tweetActions from "../actions/TweetActions";
import Tweet from "../components/Tweet";
import {uniqueId} from "../util/UuidUtil";
import SearchTweetInput from '../components/SearchTweetInput';

class TweetsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {dispatch} = this.props;
        let actions = bindActionCreators(tweetActions, dispatch);
        return (
            <div>
                <SearchTweetInput getTweets={actions.getTweets} renderCountInput={true} autoUpdate={false} initialText={'Search tweets..'}/>
                <br/>
                {this.props.tweets.tweets.map((tweet, index) => {
                    let id = uniqueId();
                    return (
                        <div key={id}>
                            <Tweet tweet={tweet} id={id}/>
                        </div>
                    )
                })}
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
