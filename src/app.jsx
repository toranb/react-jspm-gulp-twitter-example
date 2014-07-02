import React from 'react';
import ReactRouter from 'react-nested-router';

import TweetForm from './tweet_form';
import TweetList from './tweet_list';

var Link = ReactRouter.Link;

var App = React.createClass({
  sendTweetToServer: function(tweet) {
      var tweets = this.state.tweets;
      tweets.unshift({
          author: 'toranb',
          content: tweet.content,
          key: Date.now()
      });
      this.setState({tweets: tweets});
  },
  getInitialState: function() {
    var tweets = [
      {author: 'toranb', content: 'third', key: '3'},
      {author: 'toranb', content: 'second', key: '2'},
      {author: 'toranb', content: 'first', key: '1'}
    ];
    return {
        tweets: tweets
    }
  },
  render: function() {
    return (
      <div>
        <ul>
          <li><Link to="analytics">Analytics</Link></li>
        </ul>
        <TweetForm onTweetSubmit={this.sendTweetToServer} />
        <TweetList tweetData={this.state.tweets} />
      </div>
    );
  }
});

export default App;
