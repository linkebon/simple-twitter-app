import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tweetActions from "../actions/TweetActions";
import Tweet from "../components/Tweet";

class TweetsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    tweets(filter, count = 5) {
        if (filter === "" || filter === undefined) {
            return;
        }

        this.props.getTweets(filter, count);
    }

    render() {
        return (
            <div className="container">
                <h4>Tweets</h4>
                <form className="form-inline">
                    <input id="filter" placeholder={"Search tweets"} className="form-control" type="text"
                           onChange={(e) => {
                               e.preventDefault();
                               let searchValue = e.target.value;
                               if (searchValue.length > 3) {
                                   let count = $("#tweetCount").val();
                                   this.tweets(e.target.value, count);
                               }
                           }}/>
                    <input id="tweetCount" defaultValue={5} className="form-control small" onChange={(e) => {
                        e.preventDefault();
                        if (!/^\d+$/.test(e.target.value)) {
                            e.target.value = '';
                        }
                    }}/>
                </form>
                <br/>
                <div className="row">
                    {this.props.tweets.map((tweet, index) => {
                        return (
                            <div className="col-md-5" key={index}>
                                <Tweet tweet={tweet} id={index}/>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweetReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(tweetActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsContainer)
