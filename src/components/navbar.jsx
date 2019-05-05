import React from 'react';

// Stateless Functional Component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/#" className="navbar-brand">
        Todo Cart{' '}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
