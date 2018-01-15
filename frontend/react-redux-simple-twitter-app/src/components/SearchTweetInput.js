import React, {Component} from 'react';

class SearchTweetInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {getTweetsAutoUpdating} = this.props;
        return (
            <form className="form-inline">
                <input id="autoUpdatingFilterId" placeholder={"Search tweets"} className="form-control" type="text"
                       onChange={(e) => {
                           e.preventDefault();
                           let searchValue = e.target.value;
                           if (searchValue.length > 3) {
                               let tempCount = $("#tweetCount").val();
                               let count = tempCount ? tempCount : '5';
                               getTweetsAutoUpdating(e.target.value, count);
                           }
                       }}/>
                <input id="tweetCount" defaultValue={5} className="form-control small" onChange={(e) => {
                    e.preventDefault();
                    if (!/^\d+$/.test(e.target.value)) {
                        e.target.value = '';
                    }
                }}/>
            </form>
        )
    }
}

export default SearchTweetInput;