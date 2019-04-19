import React from 'react';
//withRouter is the hoc and I need to export it
import { Link, NavLink, withRouter } from 'react-router-dom';

const NavBar = (props) => { 

  // setTimeout(() => { 
  //   props.history.push('/about')
  // }, 2000)

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href='/' className="brand-logo">Love React</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          {/* NavLink adds .active when I click specific link */}
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contacts">Contacts</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(NavBar);