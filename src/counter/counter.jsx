import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  render() {
    return (
      <React.Fragment>
        <span className='badge badge-primary m-2'>{this.formatCount()}</span>
        <button style={this.styles} className='btn btn-secondary btn-sm'>
          Increment
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state; // destructuring state object
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
