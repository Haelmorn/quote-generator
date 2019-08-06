import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import QuoteDisplay from './Quotes';
import ButtonRow from './Buttons';
import quotes from './quote_list'


const styles = theme => ({
  root: {
    margin: '10px',
    height: 400,
    width: 300,
    padding: '0 30px',
    overflowY: 'scroll',
  },
});
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quotes: quotes,
        randomIndex: Math.floor(Math.random() * quotes.length)
    }
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.shareTweet = this.shareTweet.bind(this);
  }
  getRandomQuote() {
    let newIndex = Math.floor(Math.random() * this.state.quotes.length);
    while (newIndex == this.state.randomIndex) {
      newIndex = Math.floor(Math.random() * this.state.quotes.length)
    }
      this.setState({
        randomIndex: newIndex
      });
  }
  shareTweet() {
    const text = this.state.quotes[this.state.randomIndex]['quote']
    const author = this.state.quotes[this.state.randomIndex]['author']
    const link = "https://twitter.com/intent/tweet?text=" + "\"" + text + "\" " + author
    window.open(link)
  }
  render() {
    return (
      <div id='main-display'>
        <QuoteDisplay quotes = {this.state.quotes} quoteIndex={this.state.randomIndex}/>
        <ButtonRow getRandomQuote={this.getRandomQuote} shareTweet={this.shareTweet}/>
      </div>
    )
  }
};

export default withStyles(styles)(App);