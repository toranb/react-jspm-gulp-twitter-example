/** @jsx React.DOM */

import Tweet from './tweet';

var TweetForm = React.createClass({
    render: function() {
        var tweetNodes = this.props.tweetData.map(function(tweet) {
            return (
                <Tweet author={tweet.author} content={tweet.content} key={tweet.key} />
            );
        });
        return (
            <div className="tweet-list">
                {tweetNodes}
            </div>
        );
    }
});

export default TweetForm;
