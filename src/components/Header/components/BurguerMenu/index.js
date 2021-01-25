import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Hamburger } from '../../../../assets/images/icon-hamburger.svg';
import './styles.scss';

function BurguerMenu({ setIsOpen, isOpen, menuStyle }) {
  return (
    <Hamburger className={`${menuStyle}`} onClick={() => setIsOpen(!isOpen)} />
  )
} 

BurguerMenu.defaultProps = {
  setIsOpen: () => {},
  isOpen: false,
  menuStyle: '',
}

BurguerMenu.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  menuStyle: PropTypes.string,
}

export default BurguerMenu;