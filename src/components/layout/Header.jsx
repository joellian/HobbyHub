import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">
        <Link to="/">MyAnime</Link>
      </h2>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/create">Create Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
