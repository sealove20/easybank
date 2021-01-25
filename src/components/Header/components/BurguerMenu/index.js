import React from 'react';

import { ReactComponent as Hamburger } from '../../../../assets/images/icon-hamburger.svg';
import './styles.scss';

export default function BurguerMenu({ setIsOpen, isOpen, menuStyle }) {
  return (
    <Hamburger className={`${menuStyle}`} onClick={() => setIsOpen(!isOpen)} />
  )
} 