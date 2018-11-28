import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
}

export default Header;
