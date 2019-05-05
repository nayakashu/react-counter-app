import React from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log('Navbar - Rendered');
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/#" className="navbar-brand">
        Todo Cart{' '}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
