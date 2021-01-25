import React from 'react';

import './styles.scss';

import Article from './components/Article';

import currency from '../../assets/images/image-currency.jpg';
import restaurant from '../../assets/images/image-restaurant.jpg';
import plane from '../../assets/images/image-plane.jpg';
import confetti from '../../assets/images/image-confetti.jpg';

export default function Articles() {
  return (
    <article className="article" id="section-articles">
      <h2 className="article__tittle">Latest Articles</h2>
      <div className="article__cards__container">
        <Article 
          articleImage={currency} 
          articleAuthor="By Claire Robinson" 
          articleTittle="Receive money in any currency with no fees" 
          articleContent="The world is getting smaller and we’re becoming more mobile. So why should you be 
            forced to only receive money in a single …" 
        />
        <Article 
          articleImage={restaurant} 
          articleAuthor="By Wilson Hutton" 
          articleTittle="Treat yourself without worrying about money" 
          articleContent="Our simple budgeting feature allows you to separate out your spending and set 
          realistic limits each month. That means you …" 
        />
        <Article 
          articleImage={plane} 
          articleAuthor="By Wilson Hutton" 
          articleTittle="Take your Easybank card wherever you go" 
          articleContent="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
          while you’re abroad. We’ll even show you …" 
        />
        <Article 
          articleImage={confetti} 
          articleAuthor="By Claire Robinson" 
          articleTittle="Our invite-only Beta accounts are now live!" 
          articleContent="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
          It’s easy to request an invite through the site..." 
        />
      </div>
    </article>
  )
}