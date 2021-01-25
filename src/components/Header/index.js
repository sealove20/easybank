import React, { useState } from 'react';
import { ReactSVG } from 'react-svg'

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
            <li className="nav__item">Home</li>
            <li className="nav__item">About</li>
            <li className="nav__item">Contact</li>
            <li className="nav__item">Blog</li>
            <li className="nav__item">Careers</li>
          </ul>
        </nav>
        <RequestButton buttonStyle="nav__request_button" />
      </section>
    </header>
    )
}