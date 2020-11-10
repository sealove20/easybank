import React from 'react';
import RequestButton from '../RequestButtom';
import mockups from '../../assets/images/image-mockups.png';

import './styles.scss';

export default function Main() {
  return (
    <main className="main">
      <section className="card">
        <h1 className="card__title">Next generation digital banking</h1>
        <p className="card__text">
          Take your financial life online. Your Easybank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.
        </p>

        <RequestButton buttonStyle="card__button" />
      </section>
      <section className="card__image">
        <img src={mockups} alt="mobile mockup" className="mockups" /> 
      </section>
    </main>
  )
}