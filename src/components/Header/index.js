import React, { useState } from 'react';
import { ReactSVG } from 'react-svg'
import { Link } from 'react-scroll';

import RequestButton from '../RequestButtom';
import BurguerMenu from './components/BurguerMenu';
import Menu from './components/Menu';
import './styles.scss';

import logo from '../../assets/images/headerlogo.svg'
import { ReactComponent as CloseButton } from '../../assets/images/icon-close.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="header">
      <section className="header__container">
        <ReactSVG src={logo} className="logo" />
        <nav className="nav__container"> 
          {isOpen 
            ? <CloseButton className="nav__close_button" onClick={() => setIsOpen(!isOpen)} /> 
            : <BurguerMenu menuStyle="nav__hamburguer_button" setIsOpen={setIsOpen} isOpen={isOpen} /> }
          <Menu isOpen={isOpen} />
          <ul className="nav">
            <Link               
              className="nav__item"   
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
              className="nav__item"   
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
              className="nav__item"   
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
              className="nav__item"   
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
              className="nav__item"   
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
        <RequestButton buttonStyle="nav__request_button" />
      </section>
    </header>
    )
}