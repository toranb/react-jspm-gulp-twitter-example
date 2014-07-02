/** @jsx React.DOM */

var Tweet = React.createClass({
    render: function() {
        return (
            <div className="tweet">
                <h3 className="tweet-author">{this.props.author}</h3>
                <span className="tweet-content">{this.props.content}</span>
            </div>
        );
    }
});

export default Tweet;
