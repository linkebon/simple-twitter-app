import React, {Component} from 'react';

class SearchTweetInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {getTweets, autoUpdate} = this.props;
        let count = '5';
        let filter = '';
        return (
            <form className="form-inline">
                <input id="autoUpdatingFilterId" placeholder={"Search tweets"} className="form-control" type="text"
                       onChange={(e) => {
                           e.preventDefault();
                           filter = e.target.value;
                           if (filter.length > 3) {
                               getTweets(filter, count);
                           }
                       }}/>
                <input id="tweetCount" defaultValue={count} className="form-control small" onChange={(e) => {
                    e.preventDefault();
                    if (!/^\d+$/.test(e.target.value)) {
                        e.target.value = '';
                    } else {
                        count = e.target.value;
                    }
                }}/>
            </form>
        )
    }
}

export default SearchTweetInput;