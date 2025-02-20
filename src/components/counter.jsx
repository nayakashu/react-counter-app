import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    // Conditional retrieval of data from server based on change in props
    if (prevProps.counter.value !== this.props.counter.value) {
      // Make AJAX call to server to retrieve the data
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Rendered');
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; // destructuring state object
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
