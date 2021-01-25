import React from 'react';

import './styles.scss';

export default function Menu({ isOpen }) {
  
  return (
    <>
      {isOpen 
        ? (
          <nav className="mobile__nav">
            <ul className="mobile__nav__menu">
              <li className="mobile__nav__item">Home</li>
              <li className="mobile__nav__item">About</li>
              <li className="mobile__nav__item">Contact</li>
              <li className="mobile__nav__item">Blog</li>
              <li className="mobile__nav__item">Careers</li>
            </ul>
          </nav>
        ) 
        : ''}
    </>
  )
}