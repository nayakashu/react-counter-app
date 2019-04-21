import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200/300'
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt='picsum' />
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state; // destructuring state object
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
