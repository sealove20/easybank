import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function AboutCard({ cardImage = '', cardTittle, cardText }) {
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

AboutCard.defaultProps = {
  cardImage: '',
  cardTittle: '',
  cardText: '',
}

AboutCard.propTypes = {
  cardImage: PropTypes.string,
  cardTittle: PropTypes.string,
  cardText: PropTypes.string,
}

export default AboutCard;


