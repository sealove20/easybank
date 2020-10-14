import React from 'react';
import { ReactSVG } from 'react-svg'

import RequestButton from '../RequestButtom';
import './styles.scss';

import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <ReactSVG src={logo} />
      <nav>
        <ul className="nav">
          <li className="nav__item">Home</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Contact</li>
          <li className="nav__item">Blog</li>
          <li className="nav__item">Careers</li>
        </ul>
      </nav>
      <RequestButton />
    </header>
    )
}