/** @jsx React.DOM */

var TweetForm = React.createClass({
    handleSubmit: function() {
        var content = this.refs.content.getDOMNode().value;
        this.props.onTweetSubmit({content: content});
        this.refs.content.getDOMNode().value = '';
        return false;
    },
    render: function() {
        return (
            <form className="tweet-form" onSubmit={this.handleSubmit}>
                <textarea placeholder="Tweet about something..." ref="content"></textarea>
                <button type="submit">Tweet it!</button>
            </form>
        );
    }
});

export default TweetForm;
