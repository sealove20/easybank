import React from 'react';
import RequestButton from '../RequestButtom';

import './styles.scss';

import logo from '../../assets/images/footerlogo.svg';
import { ReactComponent as Facebook } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../assets/images/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/images/icon-pinterest.svg';
import { ReactComponent as Youtube } from '../../assets/images/icon-youtube.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__left__container">
          <div className="footer__images__container">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer__social__container">
              <Facebook className="social" />
              <Instagram className="social" />
              <Twitter className="social" />
              <Pinterest className="social" />
              <Youtube className="social" />
            </div>
          </div>

          <div className="footer__text__left">
            <p className="footer__text">About Us</p>
            <p className="footer__text">Contact</p>
            <p className="footer__text">Blog</p>
          </div>
          <div className="footer__text__right">
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
      </div>
    </footer>
  );
}