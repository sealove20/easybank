import React from 'react';

import './styles.scss';

import currency from '../../assets/images/image-currency.jpg';
import restaurant from '../../assets/images/image-restaurant.jpg';
import plane from '../../assets/images/image-plane.jpg';
import confetti from '../../assets/images/image-confetti.jpg';

export default function Articles() {
  return (
    <article className="article">
      <h2 className="article__tittle">Latest Articles</h2>
      
      <div className="article__cards__container">
        <section className="article__card__container">
          <img className="article__card__image" src={currency} alt="icon with a hand holding plastics" />
          <div className="article__card__footer">
            <p className="article__card__author">By Claire Robinson</p>
            <h3 className="article__card__tittle">Receive money in any currency with no fees</h3>
            <p className="article__card__text">
              The world is getting smaller and we’re becoming more mobile. So why should you be 
              forced to only receive money in a single …
            </p>
          </div>
        </section>

        <section className="article__card__container">
          <img className="article__card__image" src={restaurant} alt="icon with a hand holding plastics" />
          <div className="article__card__footer">
            <p className="article__card__author">By Wilson Hutton</p>
            <h3 className="article__card__tittle">Treat yourself without worrying about money</h3>
            <p className="article__card__text">
              Our simple budgeting feature allows you to separate out your spending and set 
              realistic limits each month. That means you …
            </p>
          </div>
        </section>

        <section className="article__card__container">
          <img className="article__card__image" src={plane} alt="icon with a hand holding plastics" />
          <div className="article__card__footer">
            <p className="article__card__author">By Wilson Hutton</p>
            <h3 className="article__card__tittle">Take your Easybank card wherever you go</h3>
            <p className="article__card__text">
              We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
              while you’re abroad. We’ll even show you …
            </p>
          </div>
        </section>

        <section className="article__card__container">
          <img className="article__card__image" src={confetti} alt="icon with a hand holding plastics" />
          <div className="article__card__footer">
            <p className="article__card__author">By Claire Robinson</p>
            <h3 className="article__card__tittle">Our invite-only Beta accounts are now live!</h3>
            <p className="article__card__text">
              After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
              It’s easy to request an invite through the site...
            </p>
          </div>
        </section>
      </div>
    </article>
  )
}