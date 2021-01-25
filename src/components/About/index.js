import React from 'react';
import AboutCard from './components/AboutCard';

import onlines from '../../assets/images/icon-online.svg';
import budgeting from '../../assets/images/icon-budgeting.svg';
import onboarding from '../../assets/images/icon-onboarding.svg';
import api from '../../assets/images/icon-api.svg';

import './styles.scss';

export default function About() {
  return (
    <article className="about" id="section-about">
      <section className="about__tittle_container">
        <h2 className="about__tittle">Why choose Easybank?</h2>
        <p className="about__text">  
          We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.
        </p>
        <section className="about__card__container">
          <AboutCard 
            cardImage={onlines}
            cardTittle="Online Banking" 
            cardText="Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world." 
          />
          <AboutCard 
            cardImage={budgeting} 
            cardTittle="Simple Budgeting" 
            cardText="See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits." 
          />
          <AboutCard 
            cardImage={onboarding} 
            cardTittle="Fast Onboarding" 
            cardText="We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away." 
          />
          <AboutCard 
            cardImage={api} 
            cardTittle="Open API" 
            cardText="Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier." 
          />
        </section>
      </section>
    </article>
  )
}