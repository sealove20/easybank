import React from 'react';

import './styles.scss';

export default function Article({ articleImage, articleAuthor, articleTittle, articleContent }) {
  return (
    <section className="article__card__container">
      <img className="article__card__image" src={articleImage} alt="icon with a hand holding plastics" />
      <div className="article__card__footer">
        <div className="article__card__content">
          <p className="article__card__author">{articleAuthor}</p>
          <h3 className="article__card__tittle">{articleTittle}</h3>
          <p className="article__card__text">{articleContent}</p>
        </div>
      </div>
    </section>
  )
}

