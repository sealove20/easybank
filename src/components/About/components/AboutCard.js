import React from 'react';

import './styles.scss';

export default function AboutCard({ cardImage, cardTittle, cardText }) {
  return (
    <section className="about__card">
      <img src={cardImage} alt="icon with a hand holding plastics" />
      <h3 className="about__card__tittle">
        {cardTittle}
      </h3>
      <p className="about__card__text">
        {cardText}
      </p>
    </section>
  );
};


