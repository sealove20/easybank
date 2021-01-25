import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import './styles.scss';

function Menu({ isOpen }) {
  
  return (
    <>
      {isOpen 
        ? (
          <nav className="mobile__nav">
            <ul className="mobile__nav__menu">
            <Link               
              className="mobile__nav__item"   
              activeClass="active"
              to="section-main"
              spy
              smooth
              offset={-70}
              duration={700}
            >
              Home
            </Link>
            <Link
              className="mobile__nav__item"   
              activeClass="active"
              to="section-about"
              spy
              smooth
              offset={-70}
              duration={700}
            >
              About
            </Link>
            <Link               
              className="mobile__nav__item"   
              activeClass="active"
              to="section-footer"
              spy
              smooth
              offset={-70}
              duration={700}
            >
              Contact
            </Link>
            <Link               
              className="mobile__nav__item"   
              activeClass="active"
              to="section-articles"
              spy
              smooth
              offset={-70}
              duration={700}
            >
              Blog
            </Link>
            <Link               
              className="mobile__nav__item"   
              activeClass="active"
              to="section-footer"
              spy
              smooth
              offset={-70}
              duration={700}
            >
              Careers
            </Link>
            </ul>
          </nav>
        ) 
        : ''}
    </>
  )
}

Menu.defaultProps = {
  isOpen: false,
}

Menu.propTypes = {
  isOpen: PropTypes.bool,
}

export default Menu;