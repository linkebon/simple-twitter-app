import React from 'react';
import TweetContainer from '../container/TweetsContainer';
import TweetAutoFetchingContainer from '../container/TweetsAutoFetchingContainer';

const App = () => {
    return (
        <div className="container" style={{marginTop: '1%'}}>
            <div className="row">
                <div className="col-8">
                    <TweetContainer/>
                </div>
                <div className="col-4">
                    <TweetAutoFetchingContainer/>
                </div>

            </div>

        </div>
    )
};
export default App;