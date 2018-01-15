import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tweet from '../components/Tweet';
import * as TweetActions from '../actions/TweetActions';
import SearchTweetInput from "../components/SearchTweetInput";
import {uniqueId} from '../util/UuidUtil';

class TweetsAutoFetchingContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {dispatch} = this.props;
        let actions = bindActionCreators(TweetActions, dispatch);
        return (
            <div>
                <SearchTweetInput getTweetsAutoUpdating={actions.getTweetsAutoUpdating}/>
                <br/>
                {this.props.tweets.tweetsAutoUpdating.map((tweet) => {
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

export default connect(mapStateToProps)(TweetsAutoFetchingContainer)