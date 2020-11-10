import React from 'react';

import onlines from '../../assets/images/icon-online.svg'

import './styles.scss';

export default function About() {
  return (
    <article className="about">
      <section className="about__tittle_container">
        <h2 className="about__tittle">Why choose Easybank?</h2>
        <p className="about__text">  
          We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.
        </p>
        <section className="about__card">
          <img src={onlines} alt="icon with a hand holding plastics" />
          <h3 className="about__card__tittle">
            Online Banking
          </h3>
          <p className="about__card__text">
            Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.
          </p>
        </section>
      </section>
    </article>
  )
}