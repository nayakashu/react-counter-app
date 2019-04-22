import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.state; // destructuring state object
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
