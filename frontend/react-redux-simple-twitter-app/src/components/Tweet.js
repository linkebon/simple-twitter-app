import React, {Component} from 'react';

class Tweet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {tweet} = this.props;
        return (
            <div className="rounded infoContainer">
                <div className={"float-right"}>
                    <a className={"text-muted"}>{new Date(tweet.created_at).toLocaleString()}</a>
                    <button className="btn-outline-secondary" style={{marginLeft: '10px'}} data-toggle="collapse"
                            href={'#' + this.props.id}
                            aria-expanded="true"
                            aria-controls={'#' + this.props.id}>-
                    </button>
                </div>
                <br/>
                <div id={this.props.id} className={"collapse in show"}>
                    <p>{tweet.text}</p>
                </div>
            </div>
        )
    }
}

export default Tweet;