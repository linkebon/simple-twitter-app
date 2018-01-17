import React, {Component} from 'react';

class SearchTweetInput extends Component {

    constructor(props) {
        super(props);
        this.count = 5;
        this.filter = '';
    }

    componentDidMount() {
        let {getTweets, autoUpdate} = this.props;
        if (autoUpdate.auto) {
            this.updateTweetInterval = setInterval(() => {
                getTweets(this.filter, this.count)
            }, autoUpdate.interval)
        }
    }

    componentWillUnmount() {
        if (this.props.autoUpdate.auto) {
            clearInterval(this.updateTweetInterval);
        }
    }

    renderCount(render) {
        if (render) {
            return (
                <input id="tweetCount" defaultValue={this.count} className="form-control small" onChange={(e) => {
                    e.preventDefault();
                    if (/^\d+$/.test(e.target.value)) {
                        this.count = e.target.value;
                    }
                }}/>
            )
        }
    };

    render() {
        let {renderCountInput, getTweets, initialText} = this.props;
        return (
            <form className="form-inline">
                <input id="autoUpdatingFilterId" placeholder={initialText} className="form-control" type="text"
                       onChange={(e) => {
                           e.preventDefault();
                           if (e.target.value.length > 3) {
                               this.filter = e.target.value;
                               getTweets(this.filter, this.count);
                           }
                       }}/>
                {this.renderCount(renderCountInput)}
            </form>
        )
    }
}

export default SearchTweetInput;