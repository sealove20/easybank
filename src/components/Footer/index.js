import React from 'react';
import RequestButton from '../RequestButtom';

import './styles.scss';

import logo from '../../assets/images/footerlogo.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';
import youtube from '../../assets/images/icon-youtube.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__left__container">
        <div className="footer__images__container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer__social__container">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>

        <div className="footer__text__left">
          <p className="footer__text">About Us</p>
          <p className="footer__text">Contact</p>
          <p className="footer__text">Blog</p>
        </div>
        <div className="footer__text__left">
          <p className="footer__text">Careers</p>
          <p className="footer__text">Support</p>
          <p className="footer__text">Privacy Policy</p>
        </div>
      </section>
      <section className="footer__right__container">
        <div className="footer__right__content">
          <RequestButton buttonStyle="footer__right__button" />
          <p className="footer__text">© Easybank. All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}