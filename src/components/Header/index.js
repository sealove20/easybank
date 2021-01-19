import React from 'react';
import { ReactSVG } from 'react-svg'

import RequestButton from '../RequestButtom';
import './styles.scss';

import logo from '../../assets/images/headerlogo.svg'

export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <ReactSVG src={logo} className="logo" />
        <nav className="nav__container"> 
          <ul className="nav">
            <li className="nav__item">Home</li>
            <li className="nav__item">About</li>
            <li className="nav__item">Contact</li>
            <li className="nav__item">Blog</li>
            <li className="nav__item">Careers</li>
          </ul>
        </nav>
        <RequestButton />
      </section>
    </header>
    )
}