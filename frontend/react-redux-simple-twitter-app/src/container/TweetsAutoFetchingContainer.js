import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tweet from '../components/Tweet';
import * as TweetActions from '../actions/TweetActions';
import SearchTweetInput from "../components/SearchTweetInput";
import {uniqueId} from '../util/UuidUtil';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TweetsAutoFetchingContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {dispatch} = this.props;
        let actions = bindActionCreators(TweetActions, dispatch);
        const transitionOptions = {
            transitionName: 'fade',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        };
        return (
            <div>
                <SearchTweetInput getTweets={actions.getTweetsAutoUpdating} renderCountInput={false} autoUpdate={true} initialText={'Autoupdating..'}/>
                <br/>
                {this.props.tweets.tweetsAutoUpdating.map((tweet) => {
                    let id = uniqueId();
                    return (
                        <div key={id}>
                            <ReactCSSTransitionGroup {...transitionOptions}>
                                <Tweet tweet={tweet} id={id}/>
                            </ReactCSSTransitionGroup>
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