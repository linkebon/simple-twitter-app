import React, {Component} from 'react';

class SearchTweetInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 5
        }
    }

    renderCount(render) {
        if (render) {
            return (
                <input id="tweetCount" defaultValue={this.state.count} className="form-control small" onChange={(e) => {
                    e.preventDefault();
                    if (/^\d+$/.test(e.target.value)) {
                        this.setState({count: e.target.value});
                    }
                }}/>
            )
        }
    }

    render() {
        let {getTweets, renderCountInput} = this.props;
        let filter = '';
        return (
            <form className="form-inline">
                <input id="autoUpdatingFilterId" placeholder={"Search tweets"} className="form-control" type="text"
                       onChange={(e) => {
                           e.preventDefault();
                           filter = e.target.value;
                           if (filter.length > 3) {
                               getTweets(filter, this.state.count);
                           }
                       }}/>
                {this.renderCount(renderCountInput)}
            </form>
        )
    }
}
export default SearchTweetInput;